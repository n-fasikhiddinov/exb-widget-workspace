import XlsxPopulate from "xlsx-populate/browser/xlsx-populate"
import type { AuthorizedFetchOptions } from "../../config/AuthApi"
import { API_BASE_URL, API_SUMMARY_FILTER_KEYS, type filterInterface, type langsTypes } from "../../config/config"
import { tr } from "../../config/translation"

export type SummaryExportMode = "full" | "monthly" | "filtered" | "raw_info"

type AuthorizedFetch = (url: RequestInfo | URL, options?: AuthorizedFetchOptions) => Promise<Response>

type ExportOptions = {
    filter?: filterInterface
    lang: langsTypes
    authorizedFetch?: AuthorizedFetch
}

function isEmptyFilterValue(value: unknown): boolean {
    if (value === undefined || value === null || value === "") return true
    if (Array.isArray(value)) return value.length === 0 || value.every(isEmptyFilterValue)
    return false
}

function buildQuery(params: Record<string, unknown>): string {
    const search = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
        if (isEmptyFilterValue(value)) return

        if (Array.isArray(value)) {
            value.forEach((item) => {
                if (!isEmptyFilterValue(item)) search.append(key, String(item))
            })
            return
        }

        search.set(key, String(value))
    })

    return search.toString()
}

function clampUnixSeconds(seconds: number): string {
    const nowSeconds = Math.floor(Date.now() / 1000)
    return String(Math.min(Math.floor(seconds), nowSeconds))
}

function unixSecondsFromDateParts(
    year: number,
    monthIndex: number,
    day: number,
    endOfDay = false,
): string | null {
    const date = new Date(
        year,
        monthIndex,
        day,
        endOfDay ? 23 : 0,
        endOfDay ? 59 : 0,
        endOfDay ? 59 : 0,
        endOfDay ? 999 : 0,
    )

    if (
        Number.isNaN(date.getTime()) ||
        date.getFullYear() !== year ||
        date.getMonth() !== monthIndex ||
        date.getDate() !== day
    ) {
        return null
    }

    return clampUnixSeconds(date.getTime() / 1000)
}

function toUnixSeconds(value: unknown, endOfDay = false): string | null {
    if (value === null || value === undefined || value === "") return null

    if (typeof value === "number") {
        if (value < 100000000000) return clampUnixSeconds(value)

        const date = new Date(value)
        if (Number.isNaN(date.getTime())) return null

        if (endOfDay) {
            const end = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999)
            return clampUnixSeconds(end.getTime() / 1000)
        }

        const start = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)
        return clampUnixSeconds(start.getTime() / 1000)
    }

    const raw = String(value).trim()
    if (/^\d+$/.test(raw)) {
        if (raw.length <= 10) return clampUnixSeconds(Number(raw))

        const numeric = Number(raw)
        const date = new Date(numeric)
        if (Number.isNaN(date.getTime())) return null

        if (endOfDay) {
            const end = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999)
            return clampUnixSeconds(end.getTime() / 1000)
        }

        const start = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)
        return clampUnixSeconds(start.getTime() / 1000)
    }

    const normalized = raw.replace(/[\/\-]/g, ".").replace(/T/g, " ")
    const apiMatch = normalized.match(/^(\d{4})\.(\d{1,2})\.(\d{1,2})(?:\s+(\d{1,2})(?::(\d{1,2})(?::(\d{1,2}))?)?)?/)
    const ruMatch = normalized.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})(?:\s+(\d{1,2})(?::(\d{1,2})(?::(\d{1,2}))?)?)?/)
    const match = apiMatch || ruMatch

    if (!match) return null

    const year = apiMatch ? Number(match[1]) : Number(match[3])
    const month = Number(match[2]) - 1
    const day = apiMatch ? Number(match[3]) : Number(match[1])

    return unixSecondsFromDateParts(year, month, day, endOfDay)
}

const summaryFilterKeys = API_SUMMARY_FILTER_KEYS
const infoFilterKeys = API_SUMMARY_FILTER_KEYS

function normalizeExportFilter(
    filter?: filterInterface,
    endpoint: "summary" | "info" = "summary",
): Record<string, unknown> {
    const normalized: Record<string, unknown> = {}
    const keys = endpoint === "summary" ? summaryFilterKeys : infoFilterKeys

    keys.forEach((key) => {
        const value = filter?.[key]

        if (key === "date_from") {
            const dateFrom = toUnixSeconds(value)
            if (!isEmptyFilterValue(dateFrom)) normalized.date_from = dateFrom
            return
        }

        if (key === "date_to") {
            const dateTo = toUnixSeconds(value, true)
            if (!isEmptyFilterValue(dateTo)) normalized.date_to = dateTo
            return
        }

        if (Array.isArray(value)) {
            const list = value.map((item) => String(item).trim()).filter(Boolean)
            if (list.length) normalized[key] = list
            return
        }

        if (typeof value === "string") {
            const trimmed = value.trim()
            if (trimmed) normalized[key] = trimmed
            return
        }

        if (!isEmptyFilterValue(value)) normalized[key] = value
    })

    return normalized
}

function removeDateFilter(filter: Record<string, unknown>): Record<string, unknown> {
    const { date_from, date_to, ...rest } = filter
    void date_from
    void date_to
    return rest
}

function buildSummaryTableUrl(filter: Record<string, unknown> = {}, page: number = 1): string {
    const normalizedFilter: Record<string, unknown> = {
        ...filter,
        date_from: toUnixSeconds(filter.date_from),
        date_to: toUnixSeconds(filter.date_to, true),
    }

    return `${API_BASE_URL}/summary/table?${buildQuery({
        page,
        page_size: 200,
        sort_by: "total_duration",
        order: "desc",
        location_group: normalizedFilter.location_group || "region",
        ...normalizedFilter,
    })}`
}

type SummaryCity = {
    key: string
    city: string
}

type SummaryColumn = {
    key: string
    portalid?: string | null
    portal_name: string
    cities?: SummaryCity[]
}

type SummaryCell = {
    session_count?: number
    total_duration?: number
}

type SummaryRow = {
    user_id?: string
    user_name?: string
    full_name?: string
    cells?: Record<string, SummaryCell>
}

type SummaryResponse = {
    columns?: SummaryColumn[]
    rows?: SummaryRow[]
    total_users?: number
    page?: number
    page_size?: number
    pages?: number
}

type InfoItem = {
    [key: string]: unknown
    date_first_in_int?: number
    date_first_in_str?: string
    date_first_out_int?: number
    date_first_out_str?: string
    date_last_in_int?: number
    date_last_in_str?: string
    date_last_out_int?: number
    date_last_out_str?: string
    portalid?: string | null
    portal_name?: string | null
}

type InfoResponse = {
    items?: InfoItem[]
    meta?: {
        page?: number
        pages?: number
        total_pages?: number
        page_count?: number
        total?: number
        total_items?: number
        count?: number
    }
}

type MonthPeriod = {
    title: string
    dateFrom: string
    dateTo: string
}

function text(key: string, lang: string): string {
    return tr(`excel_${key}`, lang as langsTypes, key)
}

function pad2(value: number): string {
    return String(value).padStart(2, "0")
}

function formatMonthTitle(date: Date, lang: string): string {
    return `${tr(`monthFull${date.getMonth() + 1}`, lang as langsTypes)} ${date.getFullYear()}`
}

function monthPeriod(date: Date, lang: string): MonthPeriod {
    const year = date.getFullYear()
    const month = date.getMonth()
    const lastDay = new Date(year, month + 1, 0).getDate()
    const monthValue = pad2(month + 1)

    return {
        title: formatMonthTitle(date, lang),
        dateFrom: `${year}.${monthValue}.01 00:00:00`,
        dateTo: `${year}.${monthValue}.${pad2(lastDay)} 23:59:59`,
    }
}

function buildMonthPeriods(fromUnix: number, toUnix: number, lang: string): MonthPeriod[] {
    const fromDate = new Date(fromUnix * 1000)
    const toDate = new Date(toUnix * 1000)
    const pointer = new Date(fromDate.getFullYear(), fromDate.getMonth(), 1)
    const last = new Date(toDate.getFullYear(), toDate.getMonth(), 1)
    const periods: MonthPeriod[] = []

    while (pointer.getTime() <= last.getTime()) {
        periods.push(monthPeriod(pointer, lang))
        pointer.setMonth(pointer.getMonth() + 1)
    }

    return periods
}


function getYearFromFilter(filter: Record<string, unknown>): number {
    const raw = filter.date_from || filter.date_to
    const seconds = Number(raw || 0)

    if (seconds > 0) {
        const date = new Date(seconds * 1000)
        if (!Number.isNaN(date.getTime())) return date.getFullYear()
    }

    return new Date().getFullYear()
}

function filterPeriodsByYear(periods: MonthPeriod[], year: number): MonthPeriod[] {
    return periods.filter((period) => {
        const match = String(period.dateFrom || "").match(/^(\d{4})\./)
        return match ? Number(match[1]) === year : false
    })
}

function formatSelectedPeriodTitle(filter: Record<string, unknown>, lang: string): string {
    const dateFrom = filter.date_from ? formatMonitoringDate(filter.date_from, lang) : ""
    const dateTo = filter.date_to ? formatMonitoringDate(filter.date_to, lang) : ""

    if (dateFrom && dateTo) return `${dateFrom} – ${dateTo}`
    if (dateFrom) return `${text("selectedPeriod", lang)}: ${dateFrom}`
    if (dateTo) return `${text("selectedPeriod", lang)}: ${dateTo}`

    return text("selectedPeriod", lang)
}


function portalHasData(rows: SummaryRow[], portal: SummaryColumn): boolean {
    const cities = Array.isArray(portal.cities) ? portal.cities : []
    const cityList = cities.length
        ? cities
        : [{ key: portal.key, city: portal.portal_name }]

    return rows.some((row: SummaryRow) => {
        return cityList.some((city: SummaryCity) => {
            const cell = row.cells?.[city.key]
            return Number(cell?.total_duration || 0) > 0 || Number(cell?.session_count || 0) > 0
        })
    })
}

function excelColumnName(column: number): string {
    let current = column
    let result = ""

    while (current > 0) {
        const remainder = (current - 1) % 26
        result = String.fromCharCode(65 + remainder) + result
        current = Math.floor((current - 1) / 26)
    }

    return result
}

function secondsToExcelDuration(seconds: unknown): number {
    return Number(seconds || 0) / 86400
}

function portalColumnWidth(portal: SummaryColumn): number {
    const cities = Array.isArray(portal.cities) ? portal.cities : []
    return Math.max(cities.length, 1) * 2 + 2
}

async function readJson<T>(url: string, authorizedFetch?: AuthorizedFetch): Promise<T> {
    const request = authorizedFetch || fetch
    const response = await request(url)

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`)
    }

    return response.json() as Promise<T>
}

async function fetchSummary(
    dateFrom?: string,
    dateTo?: string,
    authorizedFetch?: AuthorizedFetch,
    baseFilter: Record<string, unknown> = {},
): Promise<SummaryResponse> {
    const filter = {
        ...baseFilter,
        ...(dateFrom && dateTo ? { date_from: dateFrom, date_to: dateTo } : {}),
    }
    const first = await readJson<SummaryResponse>(buildSummaryTableUrl(filter, 1), authorizedFetch)
    const rows: SummaryRow[] = Array.isArray(first.rows) ? [...first.rows] : []
    const pages = Number(first.pages || 1)

    if (pages > 1) {
        const remaining = await Promise.all(
            Array.from({ length: pages - 1 }, (_: unknown, index: number) => {
                return readJson<SummaryResponse>(buildSummaryTableUrl(filter, index + 2), authorizedFetch)
            }),
        )

        remaining.forEach((page: SummaryResponse) => {
            if (Array.isArray(page.rows)) rows.push(...page.rows)
        })
    }

    return { ...first, rows }
}

function formatMonitoringDate(value: unknown, lang: string): string {
    const timestamp = Number(value || 0)
    if (!timestamp) return "—"

    const locale = lang === "UZ" ? "uz-UZ" : lang === "EN" ? "en-GB" : "ru-RU"

    return new Intl.DateTimeFormat(locale, {
        timeZone: "Asia/Tashkent",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(new Date(timestamp * 1000))
}
function formatMonitoringDateTime(value: unknown, lang: string): string {
    const timestamp = Number(value || 0)
    if (!timestamp) return ""

    const locale = lang === "UZ" ? "uz-UZ" : lang === "EN" ? "en-GB" : "ru-RU"

    return new Intl.DateTimeFormat(locale, {
        timeZone: "Asia/Tashkent",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(new Date(timestamp * 1000))
}

function formatDownloadDateTime(lang: string): string {
    const locale = lang === "UZ" ? "uz-UZ" : lang === "EN" ? "en-GB" : "ru-RU"

    return new Intl.DateTimeFormat(locale, {
        timeZone: "Asia/Tashkent",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(new Date())
}

function formatSeconds(value: unknown, lang: string): string {
    const totalSeconds = Math.max(0, Math.floor(Number(value || 0)))
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    if (lang === "EN") return `${hours} h ${pad2(minutes)} min ${pad2(seconds)} sec`
    if (lang === "UZ") return `${hours} soat ${pad2(minutes)} daq ${pad2(seconds)} soniya`
    return `${hours} ч ${pad2(minutes)} мин ${pad2(seconds)} сек`
}

function boolText(value: unknown, lang: string): string {
    if (value === null || value === undefined || value === "") return ""
    const normalized = value === true || value === "true" || value === 1 || value === "1"
    if (lang === "EN") return normalized ? "Yes" : "No"
    if (lang === "UZ") return normalized ? "Ha" : "Yo‘q"
    return normalized ? "Да" : "Нет"
}

function safeString(value: unknown): string {
    if (value === null || value === undefined) return ""
    return String(value)
}

function getObjectValue(source: unknown, path: string): unknown {
    if (!source || typeof source !== "object") return undefined

    return path.split(".").reduce<unknown>((current, key) => {
        if (!current || typeof current !== "object") return undefined
        return (current as Record<string, unknown>)[key]
    }, source)
}

function joinSize(width: unknown, height: unknown): string {
    if (!width && !height) return ""
    return `${safeString(width)} × ${safeString(height)}`
}

function countList(value: unknown): number | "" {
    return Array.isArray(value) ? value.length : ""
}



function rawInfoHeader(column: string, lang: string): string {
    const config = getRawInfoColumnConfig(column)
    const labelKey = config?.labelKey || column
    return tr(`rawInfo_${labelKey}`, lang as langsTypes, column)
}

function csvValue(value: unknown): string {
    if (value === null || value === undefined) return ""
    const str = typeof value === "object" ? JSON.stringify(value) : String(value)
    return `"${str.replace(/"/g, '""')}"`
}

function triggerTextDownload(content: string, fileName: string, downloadWindow: Window | null): void {
    const blob = new Blob(["﻿" + content], { type: "text/csv;charset=utf-8;" })
    triggerDownload(blob, fileName, downloadWindow)
}


const INFO_PAGE_SIZE = 200
const RAW_INFO_CSV_LIMIT = 50000
const RAW_INFO_MAX_PAGES = 10000

function infoUrl(filter: Record<string, unknown>, page: number, pageSize: number = INFO_PAGE_SIZE): string {
    return `${API_BASE_URL}/info?${buildQuery({
        page,
        page_size: pageSize,
        sort_by: "id",
        order: "desc",
        ...filter,
    })}`
}

async function fetchInfoPage(
    filter: Record<string, unknown> = {},
    page: number = 1,
    authorizedFetch?: AuthorizedFetch,
): Promise<InfoResponse> {
    return readJson<InfoResponse>(infoUrl(filter, page), authorizedFetch)
}

function getInfoPages(response: InfoResponse, fallback = 0): number {
    return Number(
        response.meta?.pages ||
        response.meta?.total_pages ||
        response.meta?.page_count ||
        fallback ||
        0,
    )
}

function getInfoTotal(response: InfoResponse): number {
    return Number(
        response.meta?.total ||
        response.meta?.total_items ||
        response.meta?.count ||
        0,
    )
}

async function fetchAllInfoRows(filter: Record<string, unknown> = {}, authorizedFetch?: AuthorizedFetch): Promise<InfoItem[]> {
    const result: InfoItem[] = []
    let page = 1
    let detectedPages = 0

    while (page <= RAW_INFO_MAX_PAGES) {
        const response = await fetchInfoPage(filter, page, authorizedFetch)
        const items = Array.isArray(response.items) ? response.items : []
        result.push(...items)

        detectedPages = getInfoPages(response, detectedPages)

        if ((detectedPages > 0 && page >= detectedPages) || items.length < INFO_PAGE_SIZE) {
            break
        }

        page += 1
    }

    return result
}

function getPreparedInfoItem(item: InfoItem, lang: string): InfoItem {
    const clientInfo = item.client_info as Record<string, unknown> | undefined
    const durationValue = item.duration ?? item.total_time_sec
    const dateFirstIn = item.date_first_in_int
    const dateFirstOut = item.date_first_out_int
    const dateLastIn = item.date_last_in_int
    const dateLastOut = Number(item.date_last_out_int ?? item.last_out ?? 0) || undefined
    const collectedAt = getObjectValue(clientInfo, "collectedAt")
    const collectedAtDate = collectedAt ? new Date(String(collectedAt)) : null

    return {
        ...item,
        date_last_out_int: dateLastOut,
        duration_formatted: formatSeconds(durationValue, lang),
        date_first_in_formatted: formatMonitoringDateTime(dateFirstIn, lang),
        date_first_out_formatted: formatMonitoringDateTime(dateFirstOut, lang),
        date_last_in_formatted: formatMonitoringDateTime(dateLastIn, lang),
        date_last_out_formatted: formatMonitoringDateTime(dateLastOut, lang),
        page_href: getObjectValue(clientInfo, "page.href"),
        page_pathname: getObjectValue(clientInfo, "page.pathname"),
        page_referrer: getObjectValue(clientInfo, "page.referrer"),
        browser_language: getObjectValue(clientInfo, "browser.language"),
        browser_platform: getObjectValue(clientInfo, "browser.platform"),
        browser_online: boolText(getObjectValue(clientInfo, "browser.online"), lang),
        browser_cookie_enabled: boolText(getObjectValue(clientInfo, "browser.cookieEnabled"), lang),
        browser_user_agent: getObjectValue(clientInfo, "browser.userAgent"),
        device_screen: joinSize(
            getObjectValue(clientInfo, "device.screen.width"),
            getObjectValue(clientInfo, "device.screen.height"),
        ),
        device_viewport: joinSize(
            getObjectValue(clientInfo, "device.viewport.width"),
            getObjectValue(clientInfo, "device.viewport.height"),
        ),
        device_window: joinSize(
            getObjectValue(clientInfo, "device.window.outerWidth"),
            getObjectValue(clientInfo, "device.window.outerHeight"),
        ),
        device_pixel_ratio: getObjectValue(clientInfo, "device.window.devicePixelRatio"),
        device_memory_gb: getObjectValue(clientInfo, "device.deviceMemory"),
        cpu_cores: getObjectValue(clientInfo, "device.hardwareConcurrency"),
        touch_points: getObjectValue(clientInfo, "device.maxTouchPoints"),
        gpu_vendor: getObjectValue(clientInfo, "device.webgl.vendor"),
        gpu_renderer: getObjectValue(clientInfo, "device.webgl.renderer"),
        battery_percent: typeof getObjectValue(clientInfo, "device.battery.level") === "number"
            ? Math.round(Number(getObjectValue(clientInfo, "device.battery.level")) * 100)
            : "",
        battery_charging: boolText(getObjectValue(clientInfo, "device.battery.charging"), lang),
        locale: getObjectValue(clientInfo, "locale.locale"),
        timezone: getObjectValue(clientInfo, "locale.timezone"),
        timezone_offset: getObjectValue(clientInfo, "locale.timezoneOffset"),
        network_type: getObjectValue(clientInfo, "network.effectiveType"),
        network_downlink: getObjectValue(clientInfo, "network.downlink"),
        network_rtt: getObjectValue(clientInfo, "network.rtt"),
        prefers_dark_mode: boolText(getObjectValue(clientInfo, "preferences.prefersDarkMode"), lang),
        prefers_reduced_motion: boolText(getObjectValue(clientInfo, "preferences.prefersReducedMotion"), lang),
        collected_at: collectedAt,
        collected_at_formatted: collectedAtDate && !Number.isNaN(collectedAtDate.getTime())
            ? new Intl.DateTimeFormat(lang === "UZ" ? "uz-UZ" : lang === "EN" ? "en-GB" : "ru-RU", {
                timeZone: "Asia/Tashkent",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }).format(collectedAtDate)
            : "",
        local_storage_keys_count: countList(getObjectValue(clientInfo, "storage.localStorageKeys")),
        session_storage_keys_count: countList(getObjectValue(clientInfo, "storage.sessionStorageKeys")),
    }
}

type RawInfoColumnConfig = {
    /** key — поле из подготовленного объекта. Чтобы убрать столбец, поставь enabled: false. */
    key: string
    /** labelKey — ключ перевода rawInfo_* из config/translation.ts. Можно использовать тот же key. */
    labelKey?: string
    /** hideIfEmpty — не показывать столбец, если во всех строках нет значения. */
    hideIfEmpty?: boolean
    /** width — ручная ширина столбца больше не используется: ширина считается по контенту. */
    width?: number
    /** align — выравнивание значений в Excel. */
    align?: "left" | "center" | "right"
    /** enabled — false полностью убирает столбец. */
    enabled?: boolean
}

export const rawInfoExcelColumns: RawInfoColumnConfig[] = [
    { key: "id", width: 12, align: "center" },
    { key: "user_name", width: 22 },
    { key: "full_name", width: 26 },
    { key: "user_id", width: 34 },
    { key: "portal_name", width: 32 },
    { key: "portalid", width: 34 },
    { key: "portal_creator", width: 22, hideIfEmpty: true },
    { key: "country", width: 18 },
    { key: "city", width: 18 },
    { key: "ip", width: 18 },
    { key: "last_ip", width: 18, hideIfEmpty: true },

    { key: "date_first_in_int", width: 18, align: "center" },
    { key: "date_first_in_formatted", labelKey: "date_first_in", width: 22, align: "center" },
    { key: "date_first_out_int", width: 18, align: "center", hideIfEmpty: true },
    { key: "date_first_out_formatted", labelKey: "date_first_out", width: 22, align: "center", hideIfEmpty: true },
    { key: "date_last_in_int", width: 18, align: "center", hideIfEmpty: true },
    { key: "date_last_in_formatted", labelKey: "date_last_in", width: 22, align: "center", hideIfEmpty: true },
    { key: "date_last_out_int", width: 18, align: "center", hideIfEmpty: true },
    { key: "date_last_out_formatted", labelKey: "date_last_out", width: 22, align: "center", hideIfEmpty: true },

    { key: "duration", width: 16, align: "center" },
    { key: "duration_formatted", width: 20, align: "center" },
    { key: "total_visits", width: 16, align: "center", hideIfEmpty: true },
    { key: "active", width: 16, align: "center", hideIfEmpty: true },
    { key: "last_event", width: 20, hideIfEmpty: true },

    { key: "page_href", width: 42, hideIfEmpty: true },
    { key: "page_pathname", width: 32, hideIfEmpty: true },
    { key: "page_referrer", width: 42, hideIfEmpty: true },
    { key: "browser_language", width: 18, hideIfEmpty: true },
    { key: "browser_platform", width: 18, hideIfEmpty: true },
    { key: "browser_online", width: 16, align: "center", hideIfEmpty: true },
    { key: "browser_cookie_enabled", width: 16, align: "center", hideIfEmpty: true },
    { key: "browser_user_agent", width: 42, hideIfEmpty: true },
    { key: "device_screen", width: 18, align: "center", hideIfEmpty: true },
    { key: "device_viewport", width: 18, align: "center", hideIfEmpty: true },
    { key: "device_window", width: 18, align: "center", hideIfEmpty: true },
    { key: "device_pixel_ratio", width: 16, align: "center", hideIfEmpty: true },
    { key: "device_memory_gb", width: 14, align: "center", hideIfEmpty: true },
    { key: "cpu_cores", width: 14, align: "center", hideIfEmpty: true },
    { key: "touch_points", width: 14, align: "center", hideIfEmpty: true },
    { key: "gpu_vendor", width: 24, hideIfEmpty: true },
    { key: "gpu_renderer", width: 42, hideIfEmpty: true },
    { key: "battery_percent", width: 14, align: "center", hideIfEmpty: true },
    { key: "battery_charging", width: 16, align: "center", hideIfEmpty: true },
    { key: "locale", width: 14, align: "center", hideIfEmpty: true },
    { key: "timezone", width: 20, hideIfEmpty: true },
    { key: "timezone_offset", width: 18, align: "center", hideIfEmpty: true },
    { key: "network_type", width: 14, align: "center", hideIfEmpty: true },
    { key: "network_downlink", width: 16, align: "center", hideIfEmpty: true },
    { key: "network_rtt", width: 14, align: "center", hideIfEmpty: true },
    { key: "prefers_dark_mode", width: 18, align: "center", hideIfEmpty: true },
    { key: "prefers_reduced_motion", width: 18, align: "center", hideIfEmpty: true },
    { key: "collected_at_formatted", labelKey: "collected_at", width: 22, align: "center", hideIfEmpty: true },
    { key: "local_storage_keys_count", width: 18, align: "center", hideIfEmpty: true },
    { key: "session_storage_keys_count", width: 18, align: "center", hideIfEmpty: true },
]

function hasColumnValue(items: InfoItem[], key: string): boolean {
    return items.some((item) => !isEmptyFilterValue(item[key]))
}

function getRawInfoColumnConfigs(items: InfoItem[]): RawInfoColumnConfig[] {
    return rawInfoExcelColumns.filter((column) => {
        if (column.enabled === false) return false
        if (column.hideIfEmpty && !hasColumnValue(items, column.key)) return false
        return true
    })
}

function getRawInfoColumns(items: InfoItem[]): string[] {
    return getRawInfoColumnConfigs(items).map((column) => column.key)
}

function getRawInfoColumnConfig(key: string): RawInfoColumnConfig | undefined {
    return rawInfoExcelColumns.find((column) => column.key === key)
}

async function exportRawInfoCsvLarge(
    lang: string,
    downloadWindow: Window | null,
    filter: Record<string, unknown>,
    firstResponse: InfoResponse,
    authorizedFetch?: AuthorizedFetch,
): Promise<void> {
    const firstItems = Array.isArray(firstResponse.items) ? firstResponse.items : []
    const columns = getRawInfoColumns(firstItems.map((item) => getPreparedInfoItem(item, lang)))
    const downloadedAt = formatDownloadDateTime(lang)
    const csvRows: string[] = [
        [text("titleRawInfo", lang)].map(csvValue).join(";"),
        [text("downloadedAt", lang), downloadedAt].map(csvValue).join(";"),
        "",
        columns.map((column) => csvValue(rawInfoHeader(column, lang))).join(";"),
    ]

    let page = 1
    let detectedPages = getInfoPages(firstResponse)
    let currentItems = firstItems

    while (page <= RAW_INFO_MAX_PAGES) {
        const preparedItems = currentItems.map((item) => getPreparedInfoItem(item, lang))
        preparedItems.forEach((item: InfoItem) => {
            csvRows.push(columns.map((column) => csvValue(item[column])).join(";"))
        })

        if ((detectedPages > 0 && page >= detectedPages) || currentItems.length < INFO_PAGE_SIZE) {
            break
        }

        page += 1
        const response = await fetchInfoPage(filter, page, authorizedFetch)
        detectedPages = getInfoPages(response, detectedPages)
        currentItems = Array.isArray(response.items) ? response.items : []
    }

    triggerTextDownload(
        csvRows.join("\n"),
        `Monitoring_all_data_${new Date().toISOString().slice(0, 10)}.csv`,
        downloadWindow,
    )
}

async function fetchPortalMonitoringStarts(
    columns: SummaryColumn[],
    lang: string,
    authorizedFetch?: AuthorizedFetch,
): Promise<Map<string, string>> {
    const dates = new Map<string, string>()

    await Promise.all(
        columns.map(async (portal: SummaryColumn) => {
            if (!portal.portalid) {
                dates.set(portal.key, "—")
                return
            }

            const response = await readJson<InfoResponse>(
                `${API_BASE_URL}/info?${buildQuery({
                    page: 1,
                    page_size: 1,
                    sort_by: "date_first_in_int",
                    order: "asc",
                    portalid: portal.portalid,
                })}`,
                authorizedFetch,
            )

            dates.set(
                portal.key,
                formatMonitoringDate(response.items?.[0]?.date_first_in_int, lang),
            )
        }),
    )

    return dates
}

function plainCellValue(value: unknown): string | number | boolean {
    if (value === null || value === undefined) return ""
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        return value
    }

    return JSON.stringify(value)
}

function getExcelTextLength(value: unknown): number {
    if (value === null || value === undefined) return 0

    return String(value)
        .split(/\r?\n/)
        .reduce((maxLength, line) => Math.max(maxLength, line.length), 0)
}

function getRawInfoAutoColumnWidth(
    column: string,
    lang: string,
    preparedItems: InfoItem[],
): number {
    const headerLength = getExcelTextLength(rawInfoHeader(column, lang))
    const maxValueLength = preparedItems.reduce((maxLength, item) => {
        return Math.max(maxLength, getExcelTextLength(plainCellValue(item[column])))
    }, 0)

    return Math.min(Math.max(headerLength, maxValueLength) + 2, 255)
}

async function exportRawInfoTable(lang: string, downloadWindow: Window | null, filter: Record<string, unknown>, authorizedFetch?: AuthorizedFetch): Promise<void> {
    const firstResponse = await fetchInfoPage(filter, 1, authorizedFetch)
    const firstItems = Array.isArray(firstResponse.items) ? firstResponse.items : []

    if (!firstItems.length) {
        throw new Error(text("empty", lang))
    }

    const detectedPages = getInfoPages(firstResponse)
    const detectedTotal = getInfoTotal(firstResponse)
    const shouldDownloadCsv = detectedTotal > RAW_INFO_CSV_LIMIT || detectedPages * INFO_PAGE_SIZE > RAW_INFO_CSV_LIMIT

    if (shouldDownloadCsv) {
        await exportRawInfoCsvLarge(lang, downloadWindow, filter, firstResponse, authorizedFetch)
        return
    }

    let items: InfoItem[] = [...firstItems]

    if (detectedPages > 1) {
        for (let page = 2; page <= detectedPages && page <= RAW_INFO_MAX_PAGES; page += 1) {
            const response = await fetchInfoPage(filter, page, authorizedFetch)
            const pageItems = Array.isArray(response.items) ? response.items : []
            items.push(...pageItems)

            if (items.length > RAW_INFO_CSV_LIMIT) {
                await exportRawInfoCsvLarge(lang, downloadWindow, filter, firstResponse, authorizedFetch)
                return
            }
        }
    } else {
        items = await fetchAllInfoRows(filter, authorizedFetch)
    }

    const preparedItems = items.map((item: InfoItem) => getPreparedInfoItem(item, lang))
    const columns = getRawInfoColumns(preparedItems)

    const workbook = await XlsxPopulate.fromBlankAsync()
    const sheet = workbook.sheet(0).name(lang === "EN" ? "All data" : "Все данные")
    const lastColumnName = excelColumnName(columns.length)
    const headerStyle = {
        border: true,
        bold: true,
        fontSize: 11,
        fill: "D9EAF7",
        wrapText: true,
        verticalAlignment: "center",
        horizontalAlignment: "center",
    }
    const valueStyle = {
        border: true,
        fontSize: 10,
        verticalAlignment: "center",
        horizontalAlignment: "left",
    }

    sheet.range(`A1:${lastColumnName}1`)
        .merged(true)
        .value(text("titleRawInfo", lang))
        .style({ ...headerStyle, fontSize: 15, fill: "B4C7E7" })
    sheet.row(1).height(34)

    sheet.range(`A2:${lastColumnName}2`)
        .merged(true)
        .value(`${text("downloadedAt", lang)}: ${formatDownloadDateTime(lang)}`)
        .style({ ...valueStyle, bold: true, fill: "F2F2F2", horizontalAlignment: "left" })
    sheet.row(2).height(24)

    columns.forEach((column: string, index: number) => {
        const columnNumber = index + 1
        const header = rawInfoHeader(column, lang)
        sheet.cell(4, columnNumber)
            .value(header)
            .style(headerStyle)
        sheet.column(columnNumber).width(getRawInfoAutoColumnWidth(column, lang, preparedItems))
    })
    sheet.row(4).height(42)

    preparedItems.forEach((item: InfoItem, index: number) => {
        const rowNumber = index + 5

        columns.forEach((column: string, columnIndex: number) => {
            const config = getRawInfoColumnConfig(column)
            sheet.cell(rowNumber, columnIndex + 1)
                .value(plainCellValue(item[column]))
                .style({ ...valueStyle, horizontalAlignment: config?.align || "left" })
        })
    })

    sheet.freezePanes(1, 4)
    sheet.range(4, 1, preparedItems.length + 4, columns.length).autoFilter()

    const blob = await workbook.outputAsync()
    triggerDownload(
        blob,
        `Monitoring_all_data_${new Date().toISOString().slice(0, 10)}.xlsx`,
        downloadWindow,
    )
}

async function getAvailablePeriods(
    lang: string,
    authorizedFetch?: AuthorizedFetch,
    baseFilter: Record<string, unknown> = {},
): Promise<MonthPeriod[]> {
    const base = {
        page: 1,
        page_size: 1,
        sort_by: "date_first_in_int",
        ...baseFilter,
    }

    const [firstResponse, lastResponse] = await Promise.all([
        readJson<InfoResponse>(`${API_BASE_URL}/info?${buildQuery({ ...base, order: "asc" })}`, authorizedFetch),
        readJson<InfoResponse>(`${API_BASE_URL}/info?${buildQuery({ ...base, order: "desc" })}`, authorizedFetch),
    ])

    const firstValue = Number(firstResponse.items?.[0]?.date_first_in_int || 0)
    const lastValue = Number(lastResponse.items?.[0]?.date_first_in_int || 0)

    if (!firstValue || !lastValue) return []

    return buildMonthPeriods(firstValue, lastValue, lang)
}

function triggerDownload(blob: Blob, fileName: string, downloadWindow: Window | null): void {
    const url = URL.createObjectURL(blob)

    if (downloadWindow) {
        downloadWindow.document.body.innerHTML = `<p style="font-family:Arial,sans-serif;padding:18px;">Скачивание файла...</p>`
        const link = downloadWindow.document.createElement("a")
        link.href = url
        link.download = fileName
        downloadWindow.document.body.appendChild(link)
        link.click()
        downloadWindow.document.body.removeChild(link)
        window.setTimeout(() => downloadWindow.close(), 500)
    } else {
        const link = document.createElement("a")
        link.href = url
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    window.setTimeout(() => URL.revokeObjectURL(url), 5000)
}

export async function downloadSummaryExcel(mode: SummaryExportMode, options: ExportOptions): Promise<void> {
    const lang = options.lang
    const authorizedFetch = options.authorizedFetch
    const summaryFilter = normalizeExportFilter(options.filter, "summary")
    const infoFilter = normalizeExportFilter(options.filter, "info")
    const summaryFilterWithoutDates = removeDateFilter(summaryFilter)
    const infoFilterWithoutDates = removeDateFilter(infoFilter)
    const downloadWindow = window.open("", "_blank")

    if (downloadWindow) {
        downloadWindow.document.body.innerHTML = `<p style="font-family:Arial,sans-serif;padding:18px;">Формирование Excel-файла...</p>`
    }

    try {
        if (mode === "raw_info") {
            await exportRawInfoTable(lang, downloadWindow, infoFilter, authorizedFetch)
            return
        }

        let reportTitle = text("titleFull", lang)
        let fileSuffix = "full"
        let blocks: Array<{ title: string; data: SummaryResponse }> = []
        let commonColumns: SummaryColumn[] = []

        if (mode === "full") {
            // Полная сводная таблица всегда строится за всё время.
            // Остальные фильтры остаются, но date_from/date_to специально не отправляются.
            const data = await fetchSummary(undefined, undefined, authorizedFetch, summaryFilterWithoutDates)
            blocks = [{ title: text("fullPeriod", lang), data }]
            commonColumns = Array.isArray(data.columns) ? data.columns : []
        } else if (mode === "filtered") {
            // Вариант по выбранному периоду полностью уважает текущие фильтры, включая даты.
            const data = await fetchSummary(undefined, undefined, authorizedFetch, summaryFilter)
            blocks = [{ title: formatSelectedPeriodTitle(summaryFilter, lang), data }]
            commonColumns = Array.isArray(data.columns) ? data.columns : []
            reportTitle = text("titleFilteredPeriod", lang)
            fileSuffix = "filtered_period"
        } else {
            // Помесячная сводная берёт только год из выбранного фильтра дат
            // и делит его по всем существующим месяцам этого года.
            const selectedYearValue = getYearFromFilter(summaryFilter)
            const allPeriods = await getAvailablePeriods(lang, authorizedFetch, infoFilterWithoutDates)
            const periods = filterPeriodsByYear(allPeriods, selectedYearValue)

            if (!periods.length) {
                throw new Error(text("empty", lang))
            }

            const fullData = await fetchSummary(undefined, undefined, authorizedFetch, summaryFilterWithoutDates)
            commonColumns = Array.isArray(fullData.columns) ? fullData.columns : []

            const monthResults = await Promise.all(
                periods.map(async (period: MonthPeriod) => ({
                    title: period.title,
                    data: await fetchSummary(period.dateFrom, period.dateTo, authorizedFetch, summaryFilterWithoutDates),
                })),
            )

            blocks = monthResults.filter((block) => Array.isArray(block.data.rows) && block.data.rows.length > 0)
            reportTitle = `${text("titleMonthly", lang)} — ${text("selectedYear", lang)}: ${selectedYearValue}`
            fileSuffix = `monthly_${selectedYearValue}`
        }

        if (!commonColumns.length || !blocks.length) {
            throw new Error(text("empty", lang))
        }

        const portalMonitoringStarts = await fetchPortalMonitoringStarts(commonColumns, lang, authorizedFetch)

        const workbook = await XlsxPopulate.fromBlankAsync()
        const sheet = workbook.sheet(0).name(lang === "EN" ? "Summary" : "Сводная таблица")
        const firstDataColumn = 2
        const measureColumnCount = commonColumns.reduce((total: number, portal: SummaryColumn) => {
            return total + portalColumnWidth(portal)
        }, 0)
        const lastColumn = firstDataColumn + measureColumnCount - 1
        const lastColumnName = excelColumnName(lastColumn)

        const normalStyle = {
            border: true,
            fontSize: 11,
            verticalAlignment: "center",
            horizontalAlignment: "center",
        }
        const headerStyle = {
            ...normalStyle,
            bold: true,
            fill: "D9EAF7",
            wrapText: true,
        }
        const inactiveHeaderStyle = {
            ...headerStyle,
            fill: "F4CCCC",
        }
        const titleStyle = {
            ...headerStyle,
            horizontalAlignment: "left",
            verticalAlignment: "top",
            fill: "DDEBF7",
            fontSize: 12,
        }
        const totalStyle = {
            ...normalStyle,
            bold: true,
            fill: "E2F0D9",
        }
        const inactiveTotalStyle = {
            ...totalStyle,
            fill: "F4CCCC",
        }

        sheet.range(`A1:${lastColumnName}1`)
            .merged(true)
            .value(reportTitle)
            .style({ ...headerStyle, fontSize: 15, fill: "B4C7E7" })
        sheet.row(1).height(34)
        sheet.column(1).width(35)

        let nextRow = 3

        blocks.forEach((block) => {
            const rows = Array.isArray(block.data.rows) ? block.data.rows : []
            const titleRow = nextRow
            const portalHeaderRow = titleRow + 1
            const cityHeaderRow = titleRow + 2
            const metricHeaderRow = titleRow + 3
            const dataStartRow = titleRow + 4
            const totalRow = dataStartRow + rows.length

            sheet.cell(titleRow, 1)
                .value(block.title)
                .style(titleStyle)
            if (lastColumn >= 2) {
                sheet.range(titleRow, 2, titleRow, lastColumn)
                    .style({ ...titleStyle, horizontalAlignment: "left" })
            }
            sheet.row(titleRow).height(28)

            sheet.range(`A${portalHeaderRow}:A${metricHeaderRow}`)
                .merged(true)
                .value(text("user", lang))
                .style(headerStyle)

            let currentColumn = firstDataColumn

            commonColumns.forEach((portal: SummaryColumn) => {
                const cities = Array.isArray(portal.cities) ? portal.cities : []
                const cityList = cities.length
                    ? cities
                    : [{ key: portal.key, city: portal.portal_name }]
                const portalStartColumn = currentColumn
                const portalEndColumn = portalStartColumn + cityList.length * 2 + 1
                const isInactivePortal = mode === "monthly" && !portalHasData(rows, portal)
                const portalHeaderStyle = isInactivePortal ? inactiveHeaderStyle : headerStyle
                const portalTotalStyle = isInactivePortal ? inactiveTotalStyle : totalStyle

                sheet.range(portalHeaderRow, portalStartColumn, portalHeaderRow, portalEndColumn)
                    .merged(true)
                    .value(
                        `${portal.portal_name}\n${text("monitoringStart", lang)}: ${portalMonitoringStarts.get(portal.key) || "—"}`,
                    )
                    .style(portalHeaderStyle)

                cityList.forEach((city: SummaryCity) => {
                    const durationColumn = currentColumn
                    const countColumn = durationColumn + 1

                    sheet.range(cityHeaderRow, durationColumn, cityHeaderRow, countColumn)
                        .merged(true)
                        .value(city.city)
                        .style(portalHeaderStyle)

                    sheet.cell(metricHeaderRow, durationColumn)
                        .value(text("duration", lang))
                        .style(portalHeaderStyle)

                    sheet.cell(metricHeaderRow, countColumn)
                        .value(text("count", lang))
                        .style(portalHeaderStyle)

                    sheet.column(durationColumn).width(13)
                    sheet.column(countColumn).width(15)
                    currentColumn += 2
                })

                sheet.range(cityHeaderRow, currentColumn, cityHeaderRow, currentColumn + 1)
                    .merged(true)
                    .value(text("portalTotal", lang))
                    .style(portalTotalStyle)

                sheet.cell(metricHeaderRow, currentColumn)
                    .value(text("duration", lang))
                    .style(portalTotalStyle)

                sheet.cell(metricHeaderRow, currentColumn + 1)
                    .value(text("count", lang))
                    .style(portalTotalStyle)

                sheet.column(currentColumn).width(15)
                sheet.column(currentColumn + 1).width(16)
                currentColumn += 2
            })

            rows.forEach((row: SummaryRow, rowIndex: number) => {
                const targetRow = dataStartRow + rowIndex
                sheet.cell(targetRow, 1)
                    .value(row.full_name || row.user_name || "—")
                    .style({ ...normalStyle, horizontalAlignment: "left" })

                let valueColumn = firstDataColumn

                commonColumns.forEach((portal: SummaryColumn) => {
                    const cities = Array.isArray(portal.cities) ? portal.cities : []
                    const cityList = cities.length
                        ? cities
                        : [{ key: portal.key, city: portal.portal_name }]

                    const portalDurationColumns: number[] = []
                    const portalCountColumns: number[] = []

                    cityList.forEach((city: SummaryCity) => {
                        const cell = row.cells?.[city.key]

                        portalDurationColumns.push(valueColumn)
                        portalCountColumns.push(valueColumn + 1)

                        sheet.cell(targetRow, valueColumn)
                            .value(secondsToExcelDuration(cell?.total_duration))
                            .style({ ...normalStyle, numberFormat: "[h]:mm:ss" })

                        sheet.cell(targetRow, valueColumn + 1)
                            .value(Number(cell?.session_count || 0))
                            .style({ ...normalStyle, numberFormat: "0" })

                        valueColumn += 2
                    })

                    const durationCells = portalDurationColumns
                        .map((column: number) => `${excelColumnName(column)}${targetRow}`)
                        .join(",")
                    const countCells = portalCountColumns
                        .map((column: number) => `${excelColumnName(column)}${targetRow}`)
                        .join(",")

                    sheet.cell(targetRow, valueColumn)
                        .formula(`SUM(${durationCells})`)
                        .style({ ...totalStyle, numberFormat: "[h]:mm:ss" })

                    sheet.cell(targetRow, valueColumn + 1)
                        .formula(`SUM(${countCells})`)
                        .style({ ...totalStyle, numberFormat: "0" })

                    valueColumn += 2
                })
            })

            sheet.cell(totalRow, 1)
                .value(text("total", lang))
                .style({ ...totalStyle, horizontalAlignment: "left" })

            for (let column = firstDataColumn; column <= lastColumn; column += 2) {
                const durationLetter = excelColumnName(column)
                const countLetter = excelColumnName(column + 1)

                if (rows.length) {
                    sheet.cell(totalRow, column)
                        .formula(`SUM(${durationLetter}${dataStartRow}:${durationLetter}${totalRow - 1})`)
                        .style({ ...totalStyle, numberFormat: "[h]:mm:ss" })

                    sheet.cell(totalRow, column + 1)
                        .formula(`SUM(${countLetter}${dataStartRow}:${countLetter}${totalRow - 1})`)
                        .style({ ...totalStyle, numberFormat: "0" })
                } else {
                    sheet.cell(totalRow, column)
                        .value(0)
                        .style({ ...totalStyle, numberFormat: "[h]:mm:ss" })

                    sheet.cell(totalRow, column + 1)
                        .value(0)
                        .style({ ...totalStyle, numberFormat: "0" })
                }
            }

            sheet.row(portalHeaderRow).height(46)
            sheet.row(cityHeaderRow).height(28)
            sheet.row(metricHeaderRow).height(40)
            sheet.row(totalRow).height(28)
            nextRow = totalRow + 2
        })

        sheet.freezePanes(1, 4)

        const blob = await workbook.outputAsync()
        triggerDownload(blob, `Monitoring_summary_${fileSuffix}_${new Date().toISOString().slice(0, 10)}.xlsx`, downloadWindow)
    } catch (error) {
        console.error("[downloadSummaryExcel]:", error)

        if (downloadWindow) {
            downloadWindow.document.body.innerHTML = `<p style="font-family:Arial,sans-serif;padding:18px;color:#b00020;">Не удалось сформировать Excel-файл.</p>`
        }

        throw error
    }
}
