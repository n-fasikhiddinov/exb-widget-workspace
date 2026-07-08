import type { AuthorizedFetchOptions } from "../../config/AuthApi"
import { API_BASE_URL, API_INFO_FILTER_KEYS, type filterInterface, type langsTypes } from "../../config/config"
import { tr } from "../../config/translation"

type AuthorizedFetch = (url: RequestInfo | URL, options?: AuthorizedFetchOptions) => Promise<Response>

type DownloadOptions = {
    filter: filterInterface
    lang: langsTypes
    authorizedFetch?: AuthorizedFetch
}


function pad2(value: number): string {
    return String(value).padStart(2, "0")
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

function toApiDate(value: unknown, endOfDay = false): string | null {
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
    const apiMatch = normalized.match(/^(\d{4})\.(\d{1,2})\.(\d{1,2})/)
    const ruMatch = normalized.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})/)
    const match = apiMatch || ruMatch

    if (!match) return null

    const year = apiMatch ? Number(match[1]) : Number(match[3])
    const month = Number(match[2]) - 1
    const day = apiMatch ? Number(match[3]) : Number(match[1])

    return unixSecondsFromDateParts(year, month, day, endOfDay)
}

function isEmptyFilterValue(value: unknown): boolean {
    if (value === null || value === undefined || value === "") return true
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

const infoFilterKeys = API_INFO_FILTER_KEYS

function normalizeInfoFilter(filter: filterInterface): Record<string, unknown> {
    const result: Record<string, unknown> = {}

    infoFilterKeys.forEach((key) => {
        const value = filter[key]

        if (Array.isArray(value)) {
            const list = value.map((item) => String(item).trim()).filter(Boolean)
            if (list.length) result[key] = list
            return
        }

        if (typeof value === "string") {
            const trimmed = value.trim()
            if (trimmed) result[key] = trimmed
            return
        }

        if (!isEmptyFilterValue(value)) result[key] = value
    })

    return result
}

function csvValue(value: unknown): string {
    if (value === null || value === undefined) return ""
    const str = typeof value === "object" ? JSON.stringify(value) : String(value)
    return `"${str.replace(/"/g, '""')}"`
}
function formatMonitoringDateTime(value: unknown, lang: langsTypes): string {
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

function prepareInfoRow(row: Record<string, unknown>, lang: langsTypes): Record<string, unknown> {
    return {
        ...row,
        date_first_in_formatted: formatMonitoringDateTime(row.date_first_in_int, lang),
        date_first_out_formatted: formatMonitoringDateTime(row.date_first_out_int, lang),
        date_last_in_formatted: formatMonitoringDateTime(row.date_last_in_int, lang),
        date_last_out_formatted: formatMonitoringDateTime(row.date_last_out_int, lang),
    }
}


function triggerDownload(content: string, filename: string): void {
    const blob = new Blob(["\uFEFF" + content], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")

    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    window.setTimeout(() => URL.revokeObjectURL(url), 3000)
}

export async function downloadMonitoringData({
    filter,
    lang,
    authorizedFetch,
}: DownloadOptions): Promise<void> {
    const request = authorizedFetch || fetch
    const rows: Record<string, unknown>[] = []
    const pageSize = 200
    let page = 1
    let pages = 1

    while (page <= pages && page <= 10000) {
        const query = buildQuery({
            page,
            page_size: pageSize,
            date_from: toApiDate(filter.date_from),
            date_to: toApiDate(filter.date_to, true),
            ...normalizeInfoFilter(filter),
            sort_by: "id",
            order: "desc",
        })

        const response = await request(`${API_BASE_URL}/info?${query}`)

        if (!response.ok) {
            throw new Error(tr("downloadFailed", lang))
        }

        const data = await response.json()
        const items = Array.isArray(data?.items) ? data.items : []
        rows.push(...items.map((item: Record<string, unknown>) => prepareInfoRow(item, lang)))

        pages = Number(data?.meta?.pages || data?.meta?.total_pages || data?.meta?.page_count || pages || 1)
        if (items.length < pageSize) break
        page += 1
    }

    const preferredKeys = [
        "id",
        "user_id",
        "user_name",
        "full_name",
        "portalid",
        "portal_name",
        "country",
        "city",
        "last_ip",
        "date_first_in_int",
        "date_first_in_formatted",
        "date_first_in_str",
        "date_first_out_int",
        "date_first_out_formatted",
        "date_first_out_str",
        "date_last_in_int",
        "date_last_in_formatted",
        "date_last_in_str",
        "date_last_out_int",
        "date_last_out_formatted",
        "date_last_out_str",
    ]
    const allKeys: string[] = []
    rows.forEach((row) => {
        Object.keys(row).forEach((key) => {
            if (!allKeys.includes(key)) allKeys.push(key)
        })
    })
    const keys = [
        ...preferredKeys.filter((key) => allKeys.includes(key)),
        ...allKeys.filter((key) => !preferredKeys.includes(key)),
    ]

    const csv = [
        keys.map(csvValue).join(";"),
        ...rows.map((row) => keys.map((key) => csvValue(row[key])).join(";")),
    ].join("\n")

    triggerDownload(csv, `monitoring_data_${new Date().toISOString().slice(0, 10)}.csv`)
}
