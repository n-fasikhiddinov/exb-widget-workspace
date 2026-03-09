import { React } from "jimu-core";
import "./CustomMap.css"

import Map from "ol/Map";
import View from "ol/View";

import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";

import VectorSource from "ol/source/Vector";
import TileWMS from "ol/source/TileWMS";
import XYZ from "ol/source/XYZ";

import Draw from "ol/interaction/Draw";
import Overlay from "ol/Overlay";

import GeoJSON from "ol/format/GeoJSON";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import CircleStyle from "ol/style/Circle";

import { fromLonLat, toLonLat } from "ol/proj";
import { getDistance } from "ol/sphere";
import { primaryAction } from "ol/events/condition";

import {
    Theme,
    ThemeType
} from "../../configs/config";
import {
    RulerIcon,
    LocationIcon,
    PlusIcon,
    MinusIcon
} from "../../configs/icons";

interface CustomMapProps {
    getTheme: ThemeType;
    getSelected: any[] | null;
    setSelected: (value: any[] | null) => void;
    mainLayerRef: React.MutableRefObject<TileWMS>;
    districtLayerRef: React.MutableRefObject<TileWMS>;
    regionLayerRef: React.MutableRefObject<TileWMS>;
    setMap: (value: Map | null) => void;
}

const UNIQUE_ID_FIELD = "uniqueid";
const HOME_LONLAT: [number, number] = [69.2401, 41.2995];
const HOME_ZOOM = 6;

function formatDistance(meters: number): string {
    if (!isFinite(meters)) return "";
    if (meters < 1000) return `${meters.toFixed(0)} м`;
    return `${(meters / 1000).toFixed(2)} км`;
}

function escapeCql(v: string): string {
    return v.replace(/'/g, "''");
}

function rgb(vars: string): string {
    return `rgb(${vars})`;
}

function rgba(vars: string, a: number): string {
    return `rgba(${vars}, ${a})`;
}

export default function CustomMap({
    getTheme,
    getSelected,
    setSelected,
    mainLayerRef,
    districtLayerRef,
    regionLayerRef,
    setMap,
}: CustomMapProps) {
    const [getFocus, setFocus] = React.useState<"home" | "plus" | "minus" | "ruler" | null>(null)
    const mapDivRef = React.useRef<HTMLDivElement>(null);
    const mapObjRef = React.useRef<Map | null>(null);

    const [rulerActive, setRulerActive] = React.useState(false);
    const rulerActiveRef = React.useRef(false);

    const rulerLayerRef = React.useRef<VectorLayer<VectorSource> | null>(null);
    const rulerSourceRef = React.useRef<VectorSource | null>(null);
    const rulerDrawRef = React.useRef<Draw | null>(null);

    const segmentOverlaysRef = React.useRef<Overlay[]>([]);
    const geomChangeKeyRef = React.useRef<any>(null);

    const highlightSourceRef = React.useRef<VectorSource<any> | null>(null);
    const highlightLayerRef = React.useRef<VectorLayer<VectorSource<any>> | null>(null);

    const HOME = React.useMemo(
        () => ({
            center: fromLonLat(HOME_LONLAT) as any,
            zoom: HOME_ZOOM,
        }),
        []
    );

    const getMapSafe = React.useCallback(() => mapObjRef.current, []);

    const themeVars = Theme[getTheme];

    const buildHighlightStyle = React.useCallback(() => {
        return new Style({
            stroke: new Stroke({ color: rgba(themeVars["--active-color"], 0.95), width: 3 }),
            fill: new Fill({ color: rgba(themeVars["--active-color"], 0.20) }),
        });
    }, [themeVars]);

    const buildRulerStyle = React.useCallback(() => {
        return new Style({
            stroke: new Stroke({ color: rgba(themeVars["--active-color"], 0.85), width: 2 }),
            image: new CircleStyle({
                radius: 4,
                fill: new Fill({ color: rgba(themeVars["--active-color"], 0.85) }),
                stroke: new Stroke({ color: "rgba(0,0,0,0.35)", width: 1 }),
            }),
        });
    }, [themeVars]);

    const applyThemeToOverlays = React.useCallback(() => {
        const areaBg = themeVars["--area-bg"];
        const textColor = themeVars["--color"];

        for (const ov of segmentOverlaysRef.current) {
            const el = ov.getElement() as HTMLElement | null;
            if (!el) continue;

            el.style.background = rgba(areaBg, getTheme === "dark" ? 0.80 : 0.90);
            el.style.color = rgb(textColor);
            el.style.border = `1px solid ${rgba(themeVars["--active-color"], 0.25)}`;
        }
    }, [getTheme, themeVars]);

    React.useEffect(() => {
        if (highlightLayerRef.current) {
            highlightLayerRef.current.setStyle(buildHighlightStyle());
            highlightLayerRef.current.changed();
        }

        if (rulerLayerRef.current) {
            const s = buildRulerStyle();
            rulerLayerRef.current.setStyle(s);
            rulerLayerRef.current.changed();
        }

        applyThemeToOverlays();
    }, [buildHighlightStyle, buildRulerStyle, applyThemeToOverlays]);

    const clearRuler = React.useCallback(() => {
        rulerSourceRef.current?.clear();
        const map = getMapSafe();
        if (map) {
            for (const ov of segmentOverlaysRef.current) map.removeOverlay(ov);
        }
        segmentOverlaysRef.current = [];
    }, [getMapSafe]);

    const clearSelection = React.useCallback(() => {
        highlightSourceRef.current?.clear();
        setSelected(null);
    }, [setSelected]);

    React.useEffect(() => {
        rulerActiveRef.current = rulerActive;
        if (rulerActive) clearSelection();
    }, [rulerActive, clearSelection]);

    const updateSegmentLabels = React.useCallback(
        (geom: any) => {
            const map = getMapSafe();
            if (!map || !geom) return;

            for (const ov of segmentOverlaysRef.current) map.removeOverlay(ov);
            segmentOverlaysRef.current = [];

            const coords: number[][] = geom.getCoordinates?.() ?? [];
            if (coords.length < 2) return;

            const areaBg = themeVars["--area-bg"];
            const textColor = themeVars["--color"];

            for (let i = 1; i < coords.length; i++) {
                const a3857 = coords[i - 1];
                const b3857 = coords[i];

                const a4326 = toLonLat(a3857);
                const b4326 = toLonLat(b3857);

                const dist = getDistance(a4326, b4326);
                const label = formatDistance(dist);

                const mid: number[] = [(a3857[0] + b3857[0]) / 2, (a3857[1] + b3857[1]) / 2];

                const el = document.createElement("div");
                el.textContent = label;

                el.style.padding = "2px 6px";
                el.style.borderRadius = "10px";
                el.style.userSelect = "none";
                el.style.fontSize = "12px";
                el.style.whiteSpace = "nowrap";
                el.style.background = rgba(areaBg, getTheme === "dark" ? 0.80 : 0.90);
                el.style.color = rgb(textColor);
                el.style.border = `1px solid ${rgba(themeVars["--active-color"], 0.25)}`;

                const ov = new Overlay({
                    element: el,
                    positioning: "center-center",
                    stopEvent: false,
                    offset: [0, -10],
                    position: mid as any,
                });

                map.addOverlay(ov);
                segmentOverlaysRef.current.push(ov);
            }
        },
        [getMapSafe, getTheme, themeVars]
    );

    const enableRuler = React.useCallback(() => {
        const map = getMapSafe();
        if (!map) return;

        const drawStyle = buildRulerStyle();

        const src = new VectorSource();
        const layer = new VectorLayer({
            source: src,
            zIndex: 998,
            style: drawStyle,
        });

        map.addLayer(layer);

        const draw = new Draw({
            source: src,
            type: "LineString",
            style: drawStyle,
            condition: (evt) => {
                const e = evt.originalEvent as MouseEvent;
                return primaryAction(evt) && e.button === 0;
            },
        });

        draw.on("drawstart", (e: any) => {
            clearRuler();
            const geom = e.feature.getGeometry();
            geomChangeKeyRef.current = geom.on("change", () => updateSegmentLabels(geom));
        });

        draw.on("drawend", (e: any) => {
            updateSegmentLabels(e.feature.getGeometry());
        });

        map.addInteraction(draw);

        const viewport = map.getViewport();

        const onContextMenu = (ev: MouseEvent) => {
            if (!rulerActiveRef.current) return;
            ev.preventDefault();
            ev.stopPropagation();

            const d: any = rulerDrawRef.current as any;
            if (d && typeof d.abortDrawing === "function") d.abortDrawing();
            clearRuler();
        };

        const onPointerDown = (ev: PointerEvent) => {
            if (!rulerActiveRef.current) return;
            if (ev.button !== 2) return;

            ev.preventDefault();
            ev.stopPropagation();

            const d: any = rulerDrawRef.current as any;
            if (d && typeof d.abortDrawing === "function") d.abortDrawing();
            clearRuler();
        };

        const onKeyDown = (ev: KeyboardEvent) => {
            if (!rulerActiveRef.current) return;
            if (ev.key === "Escape") {
                setRulerActive(false);
                // НЕ очищаем по ESC (как ты просил).
                // Если вдруг понадобится очищать при выходе из режима — раскомментируй:
                // clearRuler();
            }
        };

        viewport.addEventListener("pointerdown", onPointerDown, true);
        viewport.addEventListener("contextmenu", onContextMenu);
        window.addEventListener("keydown", onKeyDown);

        rulerSourceRef.current = src;
        rulerLayerRef.current = layer;
        rulerDrawRef.current = draw;

        return () => {
            viewport.removeEventListener("contextmenu", onContextMenu);
            viewport.removeEventListener("pointerdown", onPointerDown, true);
            window.removeEventListener("keydown", onKeyDown);

            map.removeInteraction(draw);
            map.removeLayer(layer);

            // по условиям: выключение линейки НЕ очищает
            // clearRuler(); // <- если хочешь очищать при выходе, включи

            rulerSourceRef.current = null;
            rulerLayerRef.current = null;
            rulerDrawRef.current = null;
            geomChangeKeyRef.current = null;
        };
    }, [buildRulerStyle, clearRuler, getMapSafe, updateSegmentLabels]);

    React.useEffect(() => {
        const map = getMapSafe();
        if (!map) return;

        if (!rulerActive) {
            if (rulerDrawRef.current) map.removeInteraction(rulerDrawRef.current as any);
            if (rulerLayerRef.current) map.removeLayer(rulerLayerRef.current as any);

            rulerDrawRef.current = null;
            rulerLayerRef.current = null;
            rulerSourceRef.current = null;

            // overlays оставляем (не очищаем) — чистим только ПКМ
            return;
        }

        const cleanup = enableRuler();
        return () => {
            if (cleanup) cleanup();
        };
    }, [rulerActive, enableRuler, getMapSafe]);

    React.useEffect(() => {
        const map = getMapSafe();
        if (!map) return;

        const src = highlightSourceRef.current;
        if (!src) return;

        if (!getSelected || !Array.isArray(getSelected) || getSelected.length === 0) {
            src.clear();
            return;
        }

        const gidRaw = getSelected?.[0]?.properties?.[UNIQUE_ID_FIELD] ?? getSelected?.[0]?.id ?? null;
        const gid = gidRaw != null ? String(gidRaw) : "";
        if (!gid) return;

        const ac = new AbortController();
        let cancelled = false;

        (async () => {
            try {
                const url =
                    `http://localhost:8080/geoserver/Test/ows` +
                    `?service=WFS&version=2.0.0&request=GetFeature` +
                    `&typeNames=Test:fieldfire` +
                    `&outputFormat=application/json` +
                    `&srsName=EPSG:3857` +
                    `&CQL_FILTER=${encodeURIComponent(`${UNIQUE_ID_FIELD}='${escapeCql(gid)}'`)}`;

                const r = await fetch(url, { signal: ac.signal });
                if (!r.ok) throw new Error(`WFS HTTP ${r.status}`);
                const geojson = await r.json();
                if (cancelled) return;

                const features = new GeoJSON().readFeatures(geojson, {
                    featureProjection: "EPSG:3857",
                });

                src.clear();
                if (!features.length) return;

                src.addFeatures(features);

                const geom = features[0].getGeometry();
                if (!geom) return;

                await new Promise<void>((resolve) => {
                    map.once("postrender", () => resolve());
                    map.render();
                });

                if (cancelled) return;

                map.getView().fit(geom.getExtent(), {
                    duration: 500,
                    padding: [100, 100, 100, 100],
                    maxZoom: 15,
                });
            } catch (e: any) {
                if (e?.name === "AbortError") return;
                console.error("Highlight WFS error:", e);
                src.clear();
            }
        })();

        return () => {
            cancelled = true;
            ac.abort();
        };
    }, [getSelected, getMapSafe]);

    React.useEffect(() => {
        if (!mapDivRef.current) return;
        if (mapObjRef.current) return;

        const highlightSource = new VectorSource();
        const highlightLayer = new VectorLayer({
            source: highlightSource,
            zIndex: 999,
            style: buildHighlightStyle(),
        });

        const baseImagery = new TileLayer({
            zIndex: 0,
            source: new XYZ({
                url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                crossOrigin: "anonymous",
            }),
        });

        const polygonsLayer = new TileLayer({
            zIndex: 2,
            source: mainLayerRef.current,
            opacity: 1,
        });

        const RegionLayer = new TileLayer({
            zIndex: 1,
            source: regionLayerRef.current,
            opacity: 1,
            maxZoom: 8
        });

        const DistrictLayer = new TileLayer({
            zIndex: 1,
            source: districtLayerRef.current,
            opacity: 1,
            minZoom: 8
        });

        const map = new Map({
            target: mapDivRef.current,
            controls: [],
            layers: [baseImagery, DistrictLayer, RegionLayer, polygonsLayer, highlightLayer],
            view: new View({
                center: HOME.center,
                zoom: HOME.zoom,
                minZoom: 3,
                maxZoom: 19,
            }),
        });

        mapObjRef.current = map;
        highlightSourceRef.current = highlightSource;
        highlightLayerRef.current = highlightLayer;

        setMap(map);

        const onSingleClick = async (evt: any) => {
            if (rulerActiveRef.current) return;

            const res = map.getView().getResolution();
            if (!res) return;

            const url = mainLayerRef.current.getFeatureInfoUrl(evt.coordinate, res, "EPSG:3857", {
                INFO_FORMAT: "application/json",
                FEATURE_COUNT: 10,
            });

            if (!url) {
                clearSelection();
                return;
            }

            try {
                const r = await fetch(url);
                const txt = await r.text();

                const t = txt.trim();
                if (!(t.startsWith("{") || t.startsWith("["))) {
                    clearSelection();
                    return;
                }

                const data = JSON.parse(txt);
                const feats = data?.features;

                if (!feats?.length) {
                    clearSelection();
                    return;
                }

                const clickedId = feats?.[0]?.properties?.[UNIQUE_ID_FIELD] ?? null;
                const selectedId = getSelected?.[0]?.properties?.[UNIQUE_ID_FIELD] ?? null;

                if (clickedId != null && selectedId != null && String(clickedId) === String(selectedId)) {
                    clearSelection();
                    return;
                }

                setSelected(feats);
            } catch (e) {
                console.error("FeatureInfo error:", e);
                clearSelection();
            }
        };

        map.on("singleclick", onSingleClick);

        return () => {
            map.un("singleclick", onSingleClick);
            map.setTarget(undefined);

            mapObjRef.current = null;
            mainLayerRef.current = null;
            highlightSourceRef.current = null;
            highlightLayerRef.current = null;

            setMap(null);
        };
    }, []);

    const onHome = () => {
        const map = getMapSafe();
        if (!map) return;
        map.getView().animate({ center: HOME.center, zoom: HOME.zoom, duration: 400 });
        clearSelection();
    };

    const onZoomIn = () => {
        const map = getMapSafe();
        if (!map) return;
        const z = map.getView().getZoom() ?? HOME.zoom;
        map.getView().animate({ zoom: z + 1, duration: 180 });
    };

    const onZoomOut = () => {
        const map = getMapSafe();
        if (!map) return;
        const z = map.getView().getZoom() ?? HOME.zoom;
        map.getView().animate({ zoom: z - 1, duration: 180 });
    };

    const onToggleRuler = () => {
        setRulerActive((p) => !p);
    };

    return (
        <div className="customMapArea">
            <div className="customMapBlock" ref={mapDivRef} />

            <div className="customMapBtns">
                <div className={`customMapBtn ${rulerActive && "active"}`}
                    role="button"
                    onClick={onToggleRuler}
                    onMouseEnter={() => setFocus("ruler")}
                    onMouseLeave={() => setFocus(null)}
                >
                    <RulerIcon
                        size="16px"
                        color={`rgb(${Theme[getTheme][rulerActive || getFocus === "ruler" ? "--active-color" : "--color"]})`}
                    />
                </div>
                <div className="customMapBtn"
                    onClick={onHome}
                    onMouseEnter={() => setFocus("home")}
                    onMouseLeave={() => setFocus(null)}
                >
                    <LocationIcon
                        size="16px"
                        color={`rgb(${Theme[getTheme][getFocus === "home" ? "--active-color" : "--color"]})`}
                    />
                </div>
                <div className="customMapBtn"
                    onClick={onZoomIn}
                    onMouseEnter={() => setFocus("plus")}
                    onMouseLeave={() => setFocus(null)}
                >
                    <PlusIcon
                        size="16px"
                        color={`rgb(${Theme[getTheme][getFocus === "plus" ? "--active-color" : "--color"]})`}
                    />
                </div>
                <div className="customMapBtn"
                    onClick={onZoomOut}
                    onMouseEnter={() => setFocus("minus")}
                    onMouseLeave={() => setFocus(null)}
                >
                    <MinusIcon
                        size="16px"
                        color={`rgb(${Theme[getTheme][getFocus === "minus" ? "--active-color" : "--color"]})`}
                    />
                </div>
            </div>
        </div>
    );
}
