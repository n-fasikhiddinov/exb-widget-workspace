import { getAppStore } from "jimu-core";
// import { record } from "rrweb"; // rrweb временно отключён

/**
 * Один самодостаточный файл мониторинга.
 *
 * Что внутри:
 * - Monitoring — подключается к ArcGIS Experience Builder и берет user/portal из getAppStore()
 * - TrackerCore — WebSocket session, click/keydown/scroll/navigation/visibility, batch отправка /events
 * - rrweb — запись DOM/session replay и отправка пачками в /rrweb
 */

interface TrackerConfig {
    apiUrl: string;
    apiKey: string;
    enableEvents?: boolean;
    enableRrweb?: boolean;
    eventFlushMs?: number;
    rrwebFlushMs?: number;
    reconnectMs?: number;
    maxBatch?: number;
    /** Частота записи canvas в кадрах/сек. Чем выше — тем больше JSON. */
    canvasFps?: number;
}

interface ArcGISUserPayload {
    [key: string]: any;
    id?: string;
    username?: string;
    fullName?: string;
    email?: string;
    role?: string;
    orgId?: string;
    created?: number;
    modified?: number;
    culture?: string;
    cultureFormat?: string;
    description?: string;
    disabled?: boolean;
    emailStatus?: string;
    favGroupId?: string;
    firstName?: string;
    lastName?: string;
    groups?: unknown[];
    idUserName?: string;
    level?: string;
    mfaEnabled?: boolean;
    mfaEnforcementExempt?: boolean;
    preferredView?: string;
    provider?: string;
    region?: string;
    storageQuota?: number;
    storageUsage?: number;
    thumbnail?: string;
    udn?: string;
    units?: string;
    userLicenseTypeId?: string;
    userType?: string;
    privileges?: string[];
    appInfo?: {
        appId?: string;
        appTitle?: string;
        itemId?: string;
        appOwner?: string;
        privileges?: string[];
    };
}

type ArcGISPortalPayload = any;

interface BrowserDevicePayload {
    collectedAt: string;
    browser: {
        userAgent: string;
        platform: string;
        language: string;
        languages: readonly string[];
        cookieEnabled: boolean;
        online: boolean;
        plugins: Array<{ name: string; filename: string; description: string }>;
        mimeTypes: Array<{ type: string; description: string; suffixes: string }>;
    };
    device: {
        hardwareConcurrency: number | null;
        deviceMemory: number | null;
        maxTouchPoints: number;
        screen: {
            width: number;
            height: number;
            availWidth: number;
            availHeight: number;
            colorDepth: number;
            pixelDepth: number;
            orientation: string | null;
        };
        viewport: { width: number; height: number };
        window: {
            outerWidth: number;
            outerHeight: number;
            devicePixelRatio: number;
        };
        battery: Record<string, unknown> | null;
        webgl: { vendor: string | null; renderer: string | null };
    };
    network: {
        effectiveType: string | null;
        downlink: number | null;
        rtt: number | null;
        saveData: boolean | null;
    };
    page: {
        href: string;
        origin: string;
        pathname: string;
        search: string;
        hash: string;
        referrer: string;
        historyLength: number;
    };
    locale: {
        timezone: string;
        locale: string;
        timezoneOffset: number;
    };
    preferences: {
        prefersDarkMode: boolean;
        prefersReducedMotion: boolean;
    };
    storage: {
        localStorageKeys: string[];
        sessionStorageKeys: string[];
        cookies: string;
    };
    fingerprints: {
        canvas: string | null;
    };
}

interface EventPayload {
    session_id: string;
    user_id: string;
    event_type: string;
    timestamp_ms: number;
    url: string;
    el_tag: string;
    el_id: string;
    el_classes: string;
    el_text: string;
    el_selector: string;
    pos_x: number;
    pos_y: number;
    vp_width: number;
    vp_height: number;
    scroll_x: number;
    scroll_y: number;
    metadata: string;
}

interface RrwebPayload {
    session_id: string;
    seq: number;
    timestamp: number;
    type: number;
    data: string;
}

class TrackerCore {
    private cfg: Required<TrackerConfig>;

    private ws: WebSocket | null = null;
    private sessionId = "";
    private userId = "";
    private reconnectTimer: number | null = null;
    private destroyed = false;
    private started = false;

    private pendingUser: ArcGISUserPayload | null = null;
    private pendingPortal: ArcGISPortalPayload | null = null;
    private pendingClient: BrowserDevicePayload | null = null;

    private eventBuf: EventPayload[] = [];
    private rrwebBuf: RrwebPayload[] = [];
    private rrwebSeq = 0;

    private eventFlushTimer: number | null = null;
    private rrwebFlushTimer: number | null = null;

    private eventsForbidden = false;
    private rrwebForbidden = false;

    private stopRrweb: (() => void) | null = null;

    private originalPushState: typeof history.pushState | null = null;
    private originalReplaceState: typeof history.replaceState | null = null;

    private readonly onClick: (e: MouseEvent) => void;
    private readonly onKeyDown: (e: KeyboardEvent) => void;
    private readonly onScroll: () => void;
    private readonly onNavigate: () => void;
    private readonly onVisibility: () => void;

    constructor(cfg: TrackerConfig) {
        this.cfg = {
            enableEvents: true,
            enableRrweb: false,
            eventFlushMs: 2000,
            rrwebFlushMs: 3000,
            reconnectMs: 3000,
            maxBatch: 50,
            // Для карт и WebGL/2D canvas 15 FPS создаёт очень большой поток.
            // 2 FPS обычно достаточно для просмотра действий пользователя.
            canvasFps: 2,
            ...cfg,
        };

        this.onClick = (e: MouseEvent) => {
            const t = e.target as HTMLElement | null;

            this.pushEvent({
                event_type: "click",
                el_tag: t?.tagName?.toLowerCase() || "",
                el_id: t?.id || "",
                el_classes: typeof t?.className === "string" ? t.className : "",
                el_text: (t?.textContent || "").trim().slice(0, 200),
                el_selector: this.getSelector(t),
                pos_x: e.clientX,
                pos_y: e.clientY,
            });
        };

        this.onKeyDown = (e: KeyboardEvent) => {
            const t = e.target as HTMLElement | null;

            this.pushEvent({
                event_type: "keydown",
                el_tag: t?.tagName?.toLowerCase() || "",
                el_id: t?.id || "",
                el_classes: typeof t?.className === "string" ? t.className : "",
                el_text: "",
                el_selector: this.getSelector(t),
                metadata: JSON.stringify({
                    key: e.key,
                    code: e.code,
                    ctrlKey: e.ctrlKey,
                    shiftKey: e.shiftKey,
                    altKey: e.altKey,
                    metaKey: e.metaKey,
                    repeat: e.repeat,
                }),
            });
        };

        this.onScroll = this.throttle(() => {
            this.pushEvent({
                event_type: "scroll",
                scroll_x: window.scrollX,
                scroll_y: window.scrollY,
            });
        }, 500);

        this.onNavigate = () => {
            this.pushEvent({
                event_type: "navigate",
            });
        };

        this.onVisibility = () => {
            this.sendWsUpdate();
        };
    }

    start(
        user: ArcGISUserPayload,
        portal: ArcGISPortalPayload,
        client: BrowserDevicePayload,
    ): void {
        if (this.started) return;

        this.started = true;
        this.destroyed = false;
        this.pendingUser = user;
        this.pendingPortal = portal;
        this.pendingClient = client;
        this.userId = String(user.id || user.username || "unknown-user");

        this.connect();
    }

    updateContext(
        user: ArcGISUserPayload,
        portal: ArcGISPortalPayload,
        client?: BrowserDevicePayload,
    ): void {
        this.pendingUser = user;
        this.pendingPortal = portal;

        if (client) {
            this.pendingClient = client;
        }

        this.userId = String(user.id || user.username || "unknown-user");

        this.wsSend({
            type: "update",
            hidden: document.hidden,
            portal: this.pendingPortal,
            user: this.pendingUser,
            client: this.pendingClient,
        });
    }

    async stop(): Promise<void> {
        this.destroyed = true;
        this.started = false;

        this.clearReconnectTimer();
        this.teardownListeners();
        this.stopFlushTimers();

        // rrweb отключён
        // if (this.stopRrweb) {
        //     this.stopRrweb();
        //     this.stopRrweb = null;
        // }

        await this.flushEvents();
        // await this.flushRrweb(); // rrweb отключён

        if (this.ws) {
            try {
                this.ws.close(1000, "monitoring stopped");
            } catch (error) {
                console.error("Monitoring WS close error:", error);
            }
        }

        this.ws = null;
        this.sessionId = "";
    }

    private connect(): void {
        if (this.destroyed) return;
        if (this.ws && this.ws.readyState !== WebSocket.CLOSED) return;

        const wsUrl = this.buildWsUrl();

        try {
            this.ws = new WebSocket(wsUrl);
        } catch (error) {
            console.error("Monitoring WS create error:", error);
            this.scheduleReconnect();
            return;
        }

        this.ws.onopen = () => {
            this.wsSend({
                type: "init",
                hidden: document.hidden,
                portal: this.pendingPortal,
                user: this.pendingUser,
                client: this.pendingClient,
            });
        };

        this.ws.onmessage = (e: MessageEvent) => {
            let msg: any;

            try {
                msg = JSON.parse(String(e.data));
            } catch (error) {
                console.error("Invalid monitoring WS message:", e.data);
                return;
            }

            if (msg.status === "session_started" && msg.session?.id) {
                this.sessionId = String(msg.session.id);
                this.afterSessionStarted();
            }
        };

        this.ws.onerror = (error) => {
            console.error("Monitoring WS error:", error);
        };

        this.ws.onclose = (e: CloseEvent) => {
            this.ws = null;
            this.sessionId = "";
            this.teardownListeners();
            this.stopFlushTimers();

            if (this.stopRrweb) {
                this.stopRrweb();
                this.stopRrweb = null;
            }

            if (!this.destroyed && e.code !== 1000) {
                this.scheduleReconnect();
            }
        };
    }

    private buildWsUrl(): string {
        return (
            this.cfg.apiUrl
                .replace(/^https:\/\//, "wss://")
                .replace(/^http:\/\//, "ws://")
                .replace(/\/$/, "") + "/ws/info"
        );
    }

    private afterSessionStarted(): void {
        if (this.cfg.enableEvents) {
            this.setupListeners();
        }

        // rrweb/session replay отключён. Обычные события продолжают писаться через /events.
        // if (this.cfg.enableRrweb) {
        //     this.startRrweb();
        // }

        this.startFlushTimers();
    }

    private setupListeners(): void {
        this.teardownListeners();

        document.addEventListener("click", this.onClick, true);
        document.addEventListener("keydown", this.onKeyDown, true);
        document.addEventListener("scroll", this.onScroll, true);
        document.addEventListener("visibilitychange", this.onVisibility);

        window.addEventListener("popstate", this.onNavigate);
        window.addEventListener("hashchange", this.onNavigate);
        window.addEventListener("beforeunload", this.onBeforeUnload);

        this.patchHistory();
    }

    private teardownListeners(): void {
        document.removeEventListener("click", this.onClick, true);
        document.removeEventListener("keydown", this.onKeyDown, true);
        document.removeEventListener("scroll", this.onScroll, true);
        document.removeEventListener("visibilitychange", this.onVisibility);

        window.removeEventListener("popstate", this.onNavigate);
        window.removeEventListener("hashchange", this.onNavigate);
        window.removeEventListener("beforeunload", this.onBeforeUnload);

        this.restoreHistory();
    }

    private patchHistory(): void {
        if (!this.originalPushState) {
            this.originalPushState = history.pushState;
        }

        if (!this.originalReplaceState) {
            this.originalReplaceState = history.replaceState;
        }

        const self = this;

        history.pushState = function (
            ...args: Parameters<typeof history.pushState>
        ) {
            const result = self.originalPushState!.apply(history, args);

            self.pushEvent({
                event_type: "navigate",
            });

            return result;
        };

        history.replaceState = function (
            ...args: Parameters<typeof history.replaceState>
        ) {
            const result = self.originalReplaceState!.apply(history, args);

            self.pushEvent({
                event_type: "navigate",
            });

            return result;
        };
    }

    private restoreHistory(): void {
        if (this.originalPushState) {
            history.pushState = this.originalPushState;
            this.originalPushState = null;
        }

        if (this.originalReplaceState) {
            history.replaceState = this.originalReplaceState;
            this.originalReplaceState = null;
        }
    }

    private sendWsUpdate(): void {
        this.wsSend({
            type: "update",
            hidden: document.hidden,
            portal: this.pendingPortal,
            user: this.pendingUser,
            client: this.pendingClient,
        });
    }

    private wsSend(data: unknown): void {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;

        try {
            this.ws.send(JSON.stringify(data));
        } catch (error) {
            console.error("Monitoring WS send error:", error);
        }
    }

    private scheduleReconnect(): void {
        this.clearReconnectTimer();

        this.reconnectTimer = window.setTimeout(() => {
            this.reconnectTimer = null;
            this.connect();
        }, this.cfg.reconnectMs);
    }

    private clearReconnectTimer(): void {
        if (this.reconnectTimer !== null) {
            window.clearTimeout(this.reconnectTimer);
            this.reconnectTimer = null;
        }
    }

    private pushEvent(fields: Partial<EventPayload>): void {
        if (!this.sessionId) return;

        this.eventBuf.push({
            session_id: this.sessionId,
            user_id: this.userId,
            event_type: fields.event_type || "event",
            timestamp_ms: Date.now(),
            url: location.href,

            el_tag: "",
            el_id: "",
            el_classes: "",
            el_text: "",
            el_selector: "",

            pos_x: 0,
            pos_y: 0,

            vp_width: window.innerWidth,
            vp_height: window.innerHeight,

            scroll_x: window.scrollX,
            scroll_y: window.scrollY,

            metadata: "",

            ...fields,
        });

        if (this.eventBuf.length >= this.cfg.maxBatch) {
            void this.flushEvents();
        }
    }

    // private startRrweb(): void {
    //     if (this.stopRrweb) return
    // 
    //     try {
    //         this.stopRrweb = record({
    //             emit: (event: {
    //                 timestamp: number
    //                 type: number
    //                 data: unknown
    //             }) => {
    //                 if (!this.sessionId) return
    // 
    //                 this.rrwebBuf.push({
    //                     session_id: this.sessionId,
    //                     seq: this.rrwebSeq++,
    //                     timestamp: event.timestamp,
    //                     type: event.type,
    //                     data: JSON.stringify(event.data),
    //                 })
    // 
    //                 if (
    //                     this.rrwebBuf.length >=
    //                     this.cfg.maxBatch
    //                 ) {
    //                     void this.flushRrweb()
    //                 }
    //             },
    // 
    //             // Запись изменений canvas.
    //             recordCanvas: true,
    // 
    //             sampling: {
    //                 // Было 15 FPS. На картах это генерирует тысячи тяжёлых
    //                 // canvas-команд и может тормозить сам Replayer.
    //                 canvas: this.cfg.canvasFps,
    // 
    //                 // Дополнительно уменьшаем малозначимые частые события.
    //                 mousemove: 100,
    //                 scroll: 150,
    //                 input: "last",
    //             },
    //         })
    //     } catch (error) {
    //         console.error("rrweb start error:", error)
    //     }
    // }
    private startFlushTimers(): void {
        this.stopFlushTimers();

        if (this.cfg.enableEvents) {
            this.eventFlushTimer = window.setInterval(() => {
                void this.flushEvents();
            }, this.cfg.eventFlushMs);
        }

        // rrweb flush timer отключён
        // if (this.cfg.enableRrweb) {
        //     this.rrwebFlushTimer = window.setInterval(() => {
        //         void this.flushRrweb();
        //     }, this.cfg.rrwebFlushMs);
        // }
    }

    private stopFlushTimers(): void {
        if (this.eventFlushTimer !== null) {
            window.clearInterval(this.eventFlushTimer);
            this.eventFlushTimer = null;
        }

        if (this.rrwebFlushTimer !== null) {
            window.clearInterval(this.rrwebFlushTimer);
            this.rrwebFlushTimer = null;
        }
    }

    private async flushEvents(): Promise<void> {
        if (this.eventsForbidden) return;
        if (!this.eventBuf.length) return;

        const batch = this.eventBuf.splice(0, this.cfg.maxBatch);

        try {
            const response = await fetch(
                `${this.cfg.apiUrl.replace(/\/$/, "")}/events`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-API-Key": this.cfg.apiKey,
                    },
                    body: JSON.stringify(batch),
                },
            );

            if (response.status === 403) {
                this.eventsForbidden = true;
                this.eventBuf = [];

                console.error(
                    "Monitoring events rejected with 403. Проверь apiKey на frontend и backend.",
                );

                return;
            }

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
        } catch (error) {
            console.error("Monitoring events flush error:", error);
            this.eventBuf = [...batch, ...this.eventBuf];
        }
    }

    private async flushRrweb(): Promise<void> {
        if (this.rrwebForbidden) return;
        if (!this.rrwebBuf.length) return;

        const batch = this.rrwebBuf.splice(0, this.cfg.maxBatch);

        try {
            const response = await fetch(
                `${this.cfg.apiUrl.replace(/\/$/, "")}/rrweb`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-API-Key": this.cfg.apiKey,
                    },
                    body: JSON.stringify(batch),
                },
            );

            if (response.status === 403) {
                this.rrwebForbidden = true;
                this.rrwebBuf = [];

                console.error(
                    "Monitoring rrweb rejected with 403. Проверь apiKey на frontend и backend.",
                );

                return;
            }

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
        } catch (error) {
            console.error("Monitoring rrweb flush error:", error);
            this.rrwebBuf = [...batch, ...this.rrwebBuf];
        }
    }

    private onBeforeUnload = (): void => {
        this.flushEventsBeforeUnload();
        // this.flushRrwebBeforeUnload(); // rrweb отключён
    };

    private flushEventsBeforeUnload(): void {
        if (this.eventsForbidden) return;
        if (!this.eventBuf.length) return;

        const batch = this.eventBuf.splice(0, this.cfg.maxBatch);

        try {
            void fetch(`${this.cfg.apiUrl.replace(/\/$/, "")}/events`, {
                method: "POST",
                keepalive: true,
                headers: {
                    "Content-Type": "application/json",
                    "X-API-Key": this.cfg.apiKey,
                },
                body: JSON.stringify(batch),
            });
        } catch (error) {
            console.error("Monitoring beforeunload events flush error:", error);
        }
    }

    private flushRrwebBeforeUnload(): void {
        if (this.rrwebForbidden) return;
        if (!this.rrwebBuf.length) return;

        const batch = this.rrwebBuf.splice(0, this.cfg.maxBatch);

        try {
            void fetch(`${this.cfg.apiUrl.replace(/\/$/, "")}/rrweb`, {
                method: "POST",
                keepalive: true,
                headers: {
                    "Content-Type": "application/json",
                    "X-API-Key": this.cfg.apiKey,
                },
                body: JSON.stringify(batch),
            });
        } catch (error) {
            console.error("Monitoring beforeunload rrweb flush error:", error);
        }
    }

    private getSelector(el: HTMLElement | null): string {
        if (!el) return "";
        if (el.id) return `#${el.id}`;

        const parts: string[] = [];
        let current: HTMLElement | null = el;

        while (
            current &&
            current.nodeType === Node.ELEMENT_NODE &&
            parts.length < 5
        ) {
            let part = current.tagName.toLowerCase();

            if (typeof current.className === "string" && current.className.trim()) {
                const firstClass = current.className.trim().split(/\s+/)[0];
                part += `.${firstClass}`;
            }

            parts.unshift(part);
            current = current.parentElement;
        }

        return parts.join(" > ");
    }

    private throttle<T extends (...args: any[]) => void>(
        fn: T,
        delay: number,
    ): T {
        let last = 0;
        let timer: number | null = null;

        return ((...args: Parameters<T>) => {
            const now = Date.now();
            const remaining = delay - (now - last);

            if (remaining <= 0) {
                if (timer !== null) {
                    window.clearTimeout(timer);
                    timer = null;
                }

                last = now;
                fn(...args);
                return;
            }

            if (timer === null) {
                timer = window.setTimeout(() => {
                    timer = null;
                    last = Date.now();
                    fn(...args);
                }, remaining);
            }
        }) as T;
    }
}

export class Monitoring {
    private appInfo: any;
    private tracker: TrackerCore | null = null;
    private unsubscribeAppStore: (() => void) | null = null;
    private clientInfo: BrowserDevicePayload | null = null;
    private starting = false;

    constructor() {
        this.appInfo = getAppStore().getState();
    }

    private refreshAppInfo = (): void => {
        this.appInfo = getAppStore().getState();

        if (this.tracker) {
            this.tracker.updateContext(
                this.getUserPayload(),
                this.getPortalPayload(),
                this.clientInfo || undefined,
            );
        }
    };

    private subscribeToAppStore(): void {
        if (this.unsubscribeAppStore) return;

        this.unsubscribeAppStore = getAppStore().subscribe(this.refreshAppInfo);
    }

    private unsubscribeFromAppStore(): void {
        if (!this.unsubscribeAppStore) return;

        this.unsubscribeAppStore();
        this.unsubscribeAppStore = null;
    }

    /**
     * Backend уже правильно разбирал данные, когда мы отправляли:
     *   portal: this.appInfo?.appInfo
     *   user: this.appInfo?.user
     *
     * Поэтому здесь НЕ пересобираем portal вручную.
     */
    private getUserPayload = (): ArcGISUserPayload => {
        return (
            this.appInfo?.user ||
            this.appInfo?.appContext?.user ||
            this.appInfo?.portalUser ||
            this.appInfo?.appRuntimeInfo?.user ||
            {}
        );
    };

    private getPortalPayload = (): ArcGISPortalPayload => {
        return (
            this.appInfo?.appInfo ||
            this.appInfo?.portalSelf ||
            this.appInfo?.appContext?.portalSelf ||
            this.appInfo?.portal ||
            this.appInfo?.portalInfo ||
            this.appInfo?.appRuntimeInfo?.portalSelf ||
            {}
        );
    };

    private collectClientInfo = async (): Promise<BrowserDevicePayload> => {
        const nav = navigator as Navigator & {
            deviceMemory?: number;
            connection?: {
                effectiveType?: string;
                downlink?: number;
                rtt?: number;
                saveData?: boolean;
            };
            getBattery?: () => Promise<{
                level: number;
                charging: boolean;
                chargingTime: number;
                dischargingTime: number;
            }>;
        };

        let battery: Record<string, unknown> | null = null;

        if (nav.getBattery) {
            try {
                const value = await nav.getBattery();
                battery = {
                    level: Math.round(value.level * 100),
                    charging: value.charging,
                    chargingTime: value.chargingTime,
                    dischargingTime: value.dischargingTime,
                };
            } catch {
                battery = null;
            }
        }

        let canvasFingerprint: string | null = null;

        try {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");

            if (context) {
                context.textBaseline = "top";
                context.font = "16px Arial";
                context.fillStyle = "#f60";
                context.fillRect(0, 0, 100, 30);
                context.fillStyle = "#069";
                context.fillText("User fingerprint test", 2, 2);
                canvasFingerprint = canvas.toDataURL();
            }
        } catch {
            canvasFingerprint = null;
        }

        let webglVendor: string | null = null;
        let webglRenderer: string | null = null;

        try {
            const canvas = document.createElement("canvas");
            const gl =
                canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

            if (gl) {
                const context = gl as WebGLRenderingContext;
                const debugInfo = context.getExtension(
                    "WEBGL_debug_renderer_info",
                ) as any;

                if (debugInfo) {
                    webglVendor = String(
                        context.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
                    );
                    webglRenderer = String(
                        context.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
                    );
                }
            }
        } catch {
            webglVendor = null;
            webglRenderer = null;
        }

        const dateOptions = Intl.DateTimeFormat().resolvedOptions();
        const connection = nav.connection;

        return {
            collectedAt: new Date().toISOString(),
            browser: {
                userAgent: nav.userAgent,
                platform: nav.platform,
                language: nav.language,
                languages: nav.languages,
                cookieEnabled: nav.cookieEnabled,
                online: nav.onLine,
                plugins: Array.from(nav.plugins || []).map((plugin) => ({
                    name: plugin.name,
                    filename: plugin.filename,
                    description: plugin.description,
                })),
                mimeTypes: Array.from(nav.mimeTypes || []).map((item) => ({
                    type: item.type,
                    description: item.description,
                    suffixes: item.suffixes,
                })),
            },
            device: {
                hardwareConcurrency: nav.hardwareConcurrency || null,
                deviceMemory: nav.deviceMemory ?? null,
                maxTouchPoints: nav.maxTouchPoints || 0,
                screen: {
                    width: screen.width,
                    height: screen.height,
                    availWidth: screen.availWidth,
                    availHeight: screen.availHeight,
                    colorDepth: screen.colorDepth,
                    pixelDepth: screen.pixelDepth,
                    orientation: screen.orientation?.type || null,
                },
                viewport: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                },
                window: {
                    outerWidth: window.outerWidth,
                    outerHeight: window.outerHeight,
                    devicePixelRatio: window.devicePixelRatio,
                },
                battery,
                webgl: {
                    vendor: webglVendor,
                    renderer: webglRenderer,
                },
            },
            network: {
                effectiveType: connection?.effectiveType ?? null,
                downlink: connection?.downlink ?? null,
                rtt: connection?.rtt ?? null,
                saveData: connection?.saveData ?? null,
            },
            page: {
                href: location.href,
                origin: location.origin,
                pathname: location.pathname,
                search: location.search,
                hash: location.hash,
                referrer: document.referrer,
                historyLength: history.length,
            },
            locale: {
                timezone: dateOptions.timeZone,
                locale: dateOptions.locale,
                timezoneOffset: new Date().getTimezoneOffset(),
            },
            preferences: {
                prefersDarkMode: matchMedia("(prefers-color-scheme: dark)").matches,
                prefersReducedMotion: matchMedia("(prefers-reduced-motion: reduce)")
                    .matches,
            },
            storage: {
                localStorageKeys: Object.keys(localStorage),
                sessionStorageKeys: Object.keys(sessionStorage),
                cookies: document.cookie,
            },
            fingerprints: {
                canvas: canvasFingerprint,
            },
        };
    };

    start(): void {
        if (this.tracker || this.starting) return;

        this.starting = true;
        void this.startInternal();
    }

    private async startInternal(): Promise<void> {
        try {
            this.refreshAppInfo();
            this.subscribeToAppStore();
            this.clientInfo = await this.collectClientInfo();

            this.tracker = new TrackerCore({
                apiUrl: "https://api-monitoring.sgm.uzspace.uz/",
                apiKey: "sk-HNHvn5j4sfLhKIHwxRiMy5NwnwMFy11EdAWxchZoHfk",

                enableEvents: true,
                enableRrweb: false,

                eventFlushMs: 2000,
                rrwebFlushMs: 3000,
                reconnectMs: 3000,
                maxBatch: 50,
            });

            this.tracker.start(
                this.getUserPayload(),
                this.getPortalPayload(),
                this.clientInfo,
            );
        } catch (error) {
            console.error("Monitoring start error:", error);
            this.tracker = null;
            this.unsubscribeFromAppStore();
        } finally {
            this.starting = false;
        }
    }

    close(): void {
        this.starting = false;
        this.unsubscribeFromAppStore();

        if (!this.tracker) {
            this.clientInfo = null;
            return;
        }

        try {
            void this.tracker.stop();
        } catch (error) {
            console.error("Monitoring stop error:", error);
        }

        this.tracker = null;
        this.clientInfo = null;
    }
}