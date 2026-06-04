import XlsxPopulate from "xlsx-populate/browser/xlsx-populate"
import { API_URL, buildQuery, buildSummaryTableUrl, fetchOptions } from "../config"

export type SummaryExportMode = "full" | "monthly" | "last_month" | "raw_info"

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
    }
}

type MonthPeriod = {
    title: string
    dateFrom: string
    dateTo: string
}

const monthNames: Record<string, string[]> = {
    RU: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    UZ: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"],
    EN: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
}

const labels: Record<string, Record<string, string>> = {
    titleFull: { RU: "Сводная таблица входов пользователей по порталам и городам", UZ: "Foydalanuvchilarning portal va shaharlar bo‘yicha kirish jadvali", EN: "User login summary by portals and cities" },
    titleMonthly: { RU: "Сводная таблица по месяцам", UZ: "Oylar bo‘yicha jamlanma jadval", EN: "Monthly summary table" },
    titleLastMonth: { RU: "Сводная таблица за последний месяц", UZ: "Oxirgi oy uchun jamlanma jadval", EN: "Summary table for the latest month" },
    titleRawInfo: { RU: "Все данные мониторинга", UZ: "Monitoringning barcha ma’lumotlari", EN: "All monitoring data" },
    fullPeriod: { RU: "За всё время", UZ: "Barcha davr uchun", EN: "All time" },
    monitoringStart: { RU: "Начало мониторинга", UZ: "Monitoring boshlanishi", EN: "Monitoring started" },
    user: { RU: "Пользователь", UZ: "Foydalanuvchi", EN: "User" },
    duration: { RU: "Время, ч", UZ: "Vaqt, soat", EN: "Hours" },
    count: { RU: "Количество входов", UZ: "Kirishlar soni", EN: "Login count" },
    total: { RU: "ИТОГО", UZ: "JAMI", EN: "TOTAL" },
    empty: { RU: "Нет данных", UZ: "Ma’lumot yo‘q", EN: "No data" },
}

function text(key: string, lang: string): string {
    return labels[key]?.[lang] ?? labels[key]?.RU ?? key
}

function pad2(value: number): string {
    return String(value).padStart(2, "0")
}

function formatMonthTitle(date: Date, lang: string): string {
    const names = monthNames[lang] ?? monthNames.RU
    return `${names[date.getMonth()]} ${date.getFullYear()}`
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

function secondsToHours(seconds: unknown): number {
    return Number(seconds || 0) / 3600
}

function portalColumnWidth(portal: SummaryColumn): number {
    const cities = Array.isArray(portal.cities) ? portal.cities : []
    return Math.max(cities.length, 1) * 2
}

async function readJson<T>(url: string): Promise<T> {
    const response = await fetch(url, fetchOptions)

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`)
    }

    return response.json() as Promise<T>
}

async function fetchSummary(dateFrom?: string, dateTo?: string): Promise<SummaryResponse> {
    const filter = dateFrom && dateTo ? { date_from: dateFrom, date_to: dateTo } : {}
    const first = await readJson<SummaryResponse>(buildSummaryTableUrl(filter, 1))
    const rows: SummaryRow[] = Array.isArray(first.rows) ? [...first.rows] : []
    const pages = Number(first.pages || 1)

    if (pages > 1) {
        const remaining = await Promise.all(
            Array.from({ length: pages - 1 }, (_: unknown, index: number) => {
                return readJson<SummaryResponse>(buildSummaryTableUrl(filter, index + 2))
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

async function fetchAllInfoRows(): Promise<InfoItem[]> {
    const result: InfoItem[] = []
    const pageSize = 200
    let page = 1
    let detectedPages = 0

    while (page <= 10000) {
        const response = await readJson<InfoResponse>(
            `${API_URL}/info?${buildQuery({
                page,
                page_size: pageSize,
                sort_by: "id",
                order: "desc",
            })}`,
        )

        const items = Array.isArray(response.items) ? response.items : []
        result.push(...items)

        detectedPages = Number(
            response.meta?.pages ||
            response.meta?.total_pages ||
            response.meta?.page_count ||
            detectedPages ||
            0,
        )

        if ((detectedPages > 0 && page >= detectedPages) || items.length < pageSize) {
            break
        }

        page += 1
    }

    return result
}

async function fetchPortalMonitoringStarts(
    columns: SummaryColumn[],
    lang: string,
): Promise<Map<string, string>> {
    const dates = new Map<string, string>()

    await Promise.all(
        columns.map(async (portal: SummaryColumn) => {
            if (!portal.portalid) {
                dates.set(portal.key, "—")
                return
            }

            const response = await readJson<InfoResponse>(
                `${API_URL}/info?${buildQuery({
                    page: 1,
                    page_size: 1,
                    sort_by: "date_first_in_int",
                    order: "asc",
                    portalid: portal.portalid,
                })}`,
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

async function exportRawInfoTable(lang: string, downloadWindow: Window | null): Promise<void> {
    const items = await fetchAllInfoRows()

    if (!items.length) {
        throw new Error(text("empty", lang))
    }

    const preferredColumns = [
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
        "date_first_in_str",
        "date_last_in_int",
        "date_last_in_str",
        "total_time_sec",
        "total_visits",
        "active",
        "last_event",
        "device",
        "browser",
        "os",
        "user_agent",
    ]

    const allKeys: string[] = []
    items.forEach((item: InfoItem) => {
        Object.keys(item).forEach((key: string) => {
            if (!allKeys.includes(key)) allKeys.push(key)
        })
    })

    const columns = [
        ...preferredColumns.filter((key: string) => allKeys.includes(key)),
        ...allKeys.filter((key: string) => !preferredColumns.includes(key)),
    ]

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

    columns.forEach((column: string, index: number) => {
        const columnNumber = index + 1
        sheet.cell(3, columnNumber)
            .value(column)
            .style(headerStyle)
        sheet.column(columnNumber).width(Math.min(Math.max(column.length + 4, 16), 28))
    })
    sheet.row(3).height(40)

    items.forEach((item: InfoItem, index: number) => {
        const rowNumber = index + 4

        columns.forEach((column: string, columnIndex: number) => {
            sheet.cell(rowNumber, columnIndex + 1)
                .value(plainCellValue(item[column]))
                .style(valueStyle)
        })
    })

    sheet.freezePanes(1, 3)

    const blob = await workbook.outputAsync()
    triggerDownload(
        blob,
        `Monitoring_all_data_${new Date().toISOString().slice(0, 10)}.xlsx`,
        downloadWindow,
    )
}

async function getAvailablePeriods(lang: string): Promise<MonthPeriod[]> {
    const base = {
        page: 1,
        page_size: 1,
        sort_by: "date_first_in_int",
    }

    const [firstResponse, lastResponse] = await Promise.all([
        readJson<InfoResponse>(`${API_URL}/info?${buildQuery({ ...base, order: "asc" })}`),
        readJson<InfoResponse>(`${API_URL}/info?${buildQuery({ ...base, order: "desc" })}`),
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

export async function downloadSummaryExcel(mode: SummaryExportMode, lang: string): Promise<void> {
    const downloadWindow = window.open("", "_blank")

    if (downloadWindow) {
        downloadWindow.document.body.innerHTML = `<p style="font-family:Arial,sans-serif;padding:18px;">Формирование Excel-файла...</p>`
    }

    try {
        if (mode === "raw_info") {
            await exportRawInfoTable(lang, downloadWindow)
            return
        }

        let reportTitle = text("titleFull", lang)
        let fileSuffix = "full"
        let blocks: Array<{ title: string; data: SummaryResponse }> = []
        let commonColumns: SummaryColumn[] = []

        if (mode === "full") {
            const data = await fetchSummary()
            blocks = [{ title: text("fullPeriod", lang), data }]
            commonColumns = Array.isArray(data.columns) ? data.columns : []
        } else {
            const periods = await getAvailablePeriods(lang)

            if (!periods.length) {
                throw new Error(text("empty", lang))
            }

            if (mode === "last_month") {
                const period = periods[periods.length - 1]
                const data = await fetchSummary(period.dateFrom, period.dateTo)
                blocks = [{ title: period.title, data }]
                commonColumns = Array.isArray(data.columns) ? data.columns : []
                reportTitle = text("titleLastMonth", lang)
                fileSuffix = "last_month"
            } else {
                const fullData = await fetchSummary()
                commonColumns = Array.isArray(fullData.columns) ? fullData.columns : []

                const monthResults = await Promise.all(
                    periods.map(async (period: MonthPeriod) => ({
                        title: period.title,
                        data: await fetchSummary(period.dateFrom, period.dateTo),
                    })),
                )

                blocks = monthResults.filter((block) => Array.isArray(block.data.rows) && block.data.rows.length > 0)
                reportTitle = text("titleMonthly", lang)
                fileSuffix = "monthly"
            }
        }

        if (!commonColumns.length || !blocks.length) {
            throw new Error(text("empty", lang))
        }

        const portalMonitoringStarts = await fetchPortalMonitoringStarts(commonColumns, lang)

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
        const totalStyle = {
            ...normalStyle,
            bold: true,
            fill: "E2F0D9",
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

            sheet.range(`A${titleRow}:${lastColumnName}${titleRow}`)
                .merged(true)
                .value(block.title)
                .style({ ...headerStyle, fill: "DDEBF7", fontSize: 12 })
            sheet.row(titleRow).height(26)

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
                const portalEndColumn = portalStartColumn + cityList.length * 2 - 1

                sheet.range(portalHeaderRow, portalStartColumn, portalHeaderRow, portalEndColumn)
                    .merged(true)
                    .value(
                        `${portal.portal_name}\n${text("monitoringStart", lang)}: ${portalMonitoringStarts.get(portal.key) || "—"}`,
                    )
                    .style(headerStyle)

                cityList.forEach((city: SummaryCity) => {
                    const durationColumn = currentColumn
                    const countColumn = durationColumn + 1

                    sheet.range(cityHeaderRow, durationColumn, cityHeaderRow, countColumn)
                        .merged(true)
                        .value(city.city)
                        .style(headerStyle)

                    sheet.cell(metricHeaderRow, durationColumn)
                        .value(text("duration", lang))
                        .style(headerStyle)

                    sheet.cell(metricHeaderRow, countColumn)
                        .value(text("count", lang))
                        .style(headerStyle)

                    sheet.column(durationColumn).width(13)
                    sheet.column(countColumn).width(15)
                    currentColumn += 2
                })
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

                    cityList.forEach((city: SummaryCity) => {
                        const cell = row.cells?.[city.key]

                        sheet.cell(targetRow, valueColumn)
                            .value(secondsToHours(cell?.total_duration))
                            .style({ ...normalStyle, numberFormat: "0.0" })

                        sheet.cell(targetRow, valueColumn + 1)
                            .value(Number(cell?.session_count || 0))
                            .style({ ...normalStyle, numberFormat: "0" })

                        valueColumn += 2
                    })
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
                        .style({ ...totalStyle, numberFormat: "0.0" })

                    sheet.cell(totalRow, column + 1)
                        .formula(`SUM(${countLetter}${dataStartRow}:${countLetter}${totalRow - 1})`)
                        .style({ ...totalStyle, numberFormat: "0" })
                } else {
                    sheet.cell(totalRow, column)
                        .value(0)
                        .style({ ...totalStyle, numberFormat: "0.0" })

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
