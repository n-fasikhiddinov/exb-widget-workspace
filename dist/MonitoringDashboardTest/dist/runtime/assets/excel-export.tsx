import XlsxPopulate from "xlsx-populate/browser/xlsx-populate"
import { API_URL, buildQuery, buildSummaryTableUrl, fetchOptions } from "../config"

export type SummaryExportMode = "full" | "monthly" | "last_month"

type SummaryColumn = {
    key: string
    portalid?: string | null
    portal_name: string
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

type InfoResponse = {
    items?: Array<{ date_first_in_int?: number }>
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
    titleFull: { RU: "Сводная таблица входов пользователей по порталам", UZ: "Foydalanuvchilarning portallarga kirishi bo‘yicha jamlanma jadval", EN: "User portal login summary table" },
    titleMonthly: { RU: "Сводная таблица по месяцам", UZ: "Oylar bo‘yicha jamlanma jadval", EN: "Monthly summary table" },
    titleLastMonth: { RU: "Сводная таблица за последний месяц", UZ: "Oxirgi oy uchun jamlanma jadval", EN: "Summary table for the latest month" },
    fullPeriod: { RU: "За всё время", UZ: "Barcha davr uchun", EN: "All time" },
    user: { RU: "Пользователь", UZ: "Foydalanuvchi", EN: "User" },
    duration: { RU: "Общее время", UZ: "Umumiy vaqt", EN: "Total duration" },
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

function secondsToExcelTime(seconds: unknown): number {
    return Number(seconds || 0) / 86400
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

        const workbook = await XlsxPopulate.fromBlankAsync()
        const sheet = workbook.sheet(0).name(lang === "EN" ? "Summary" : "Сводная таблица")
        const firstPortalColumn = 2
        const lastColumn = firstPortalColumn + commonColumns.length * 2 - 1
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
            const headerRow = titleRow + 1
            const subHeaderRow = titleRow + 2
            const dataStartRow = titleRow + 3
            const totalRow = dataStartRow + rows.length

            sheet.range(`A${titleRow}:${lastColumnName}${titleRow}`)
                .merged(true)
                .value(block.title)
                .style({ ...headerStyle, fill: "DDEBF7", fontSize: 12 })
            sheet.row(titleRow).height(26)

            sheet.range(`A${headerRow}:A${subHeaderRow}`)
                .merged(true)
                .value(text("user", lang))
                .style(headerStyle)

            commonColumns.forEach((portal: SummaryColumn, portalIndex: number) => {
                const durationColumn = firstPortalColumn + portalIndex * 2
                const countColumn = durationColumn + 1

                sheet.range(headerRow, durationColumn, headerRow, countColumn)
                    .merged(true)
                    .value(portal.portal_name)
                    .style(headerStyle)
                sheet.cell(subHeaderRow, durationColumn).value(text("duration", lang)).style(headerStyle)
                sheet.cell(subHeaderRow, countColumn).value(text("count", lang)).style(headerStyle)
                sheet.column(durationColumn).width(18)
                sheet.column(countColumn).width(18)
            })

            rows.forEach((row: SummaryRow, rowIndex: number) => {
                const targetRow = dataStartRow + rowIndex
                sheet.cell(targetRow, 1)
                    .value(row.full_name || row.user_name || "—")
                    .style({ ...normalStyle, horizontalAlignment: "left" })

                commonColumns.forEach((portal: SummaryColumn, portalIndex: number) => {
                    const durationColumn = firstPortalColumn + portalIndex * 2
                    const countColumn = durationColumn + 1
                    const cell = row.cells?.[portal.key]

                    sheet.cell(targetRow, durationColumn)
                        .value(secondsToExcelTime(cell?.total_duration))
                        .style({ ...normalStyle, numberFormat: "[h]:mm:ss" })
                    sheet.cell(targetRow, countColumn)
                        .value(Number(cell?.session_count || 0))
                        .style(normalStyle)
                })
            })

            sheet.cell(totalRow, 1).value(text("total", lang)).style({ ...totalStyle, horizontalAlignment: "left" })

            commonColumns.forEach((_: SummaryColumn, portalIndex: number) => {
                const durationColumn = firstPortalColumn + portalIndex * 2
                const countColumn = durationColumn + 1
                const durationLetter = excelColumnName(durationColumn)
                const countLetter = excelColumnName(countColumn)

                if (rows.length) {
                    sheet.cell(totalRow, durationColumn)
                        .formula(`SUM(${durationLetter}${dataStartRow}:${durationLetter}${totalRow - 1})`)
                        .style({ ...totalStyle, numberFormat: "[h]:mm:ss" })
                    sheet.cell(totalRow, countColumn)
                        .formula(`SUM(${countLetter}${dataStartRow}:${countLetter}${totalRow - 1})`)
                        .style(totalStyle)
                } else {
                    sheet.cell(totalRow, durationColumn).value(0).style({ ...totalStyle, numberFormat: "[h]:mm:ss" })
                    sheet.cell(totalRow, countColumn).value(0).style(totalStyle)
                }
            })

            sheet.row(headerRow).height(30)
            sheet.row(subHeaderRow).height(40)
            sheet.row(totalRow).height(28)
            nextRow = totalRow + 2
        })

        sheet.freezePanes(1, 2)

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
