/** @jsx jsx */
import { React, jsx } from "jimu-core"
import {
    ThemeType,
    filterStruct,
    escapeCql,
    Theme,
} from "../../configs/config"
import { Translations, TranslationKey } from "../../configs/translations"
import { ArrowIcon } from "../../configs/icons"
import "./LineChart.css"

interface LineChartProps {
    getLang: TranslationKey
    getTheme: ThemeType
    getFilter: filterStruct
    setFilter: (value: any) => void
}

const CHART_BASE = {
    padding: { left: 28, right: 28, top: 5, bottom: 0 },

    dotted: {
        enabled: true,
        width: 1.6,
        dashLen: 6,
        gap: 8,
    },

    dotRing: {
        enabled: false,
    },

    hover: {
        activeHoverAlpha: 0.7,

        innerScale: 1.25,
        ringScale: 1.18,
        dottedWidthScale: 1.25,
    },

    infoBox: {
        enabled: true,
        mode: "near" as "global" | "near",

        paddingX: 12,
        paddingY: 10,
        gap: 6,
        radius: 12,
        titleFont: "700 13px system-ui, -apple-system, Segoe UI, Roboto, Arial",
        itemFont: "600 12px system-ui, -apple-system, Segoe UI, Roboto, Arial",
        bg: "rgba(0,0,0,0.55)",
        maxWidthPct: 0.58,

        anchorPadding: 10,

        nearGap: 20,
        edgePad: 10,
    },

    curve: {
        smoothFactor: 1.0,
        clampControls: true,
    },

    topText: {
        enabled: true,
        font: "700 12px system-ui, -apple-system, Segoe UI, Roboto, Arial",
        yOffset: 25,
        safeTop: 22,
    },

    lineWidth: 3,

    dot: {
        innerRadius: 8,
        gap: 2,
        ringWidth: 1,
        ringRadiusHoverAdd: 1,
        centerScale: 0.5,
    },

    label: {
        font: "600 12px system-ui, -apple-system, Segoe UI, Roboto, Arial",
        yOffset: 0,
        minBottomSpace: 42,
    },

    grid: {
        rows: 5,
        lineWidth: 1,
        alpha: 0.15,
        dash: [4, 8] as number[],
    },

    hitRadius: 18,

    region: {
        lineAlpha: 0.95,
        glowAlpha: 0.55,
        dottedAlpha: 0.25,
        areaTopAlpha: 0.22,
        areaBottomAlpha: 0.0,
        labelActiveAlpha: 1.0,
        labelDimAlpha: 0.55,
    },
}

type GraphRow = { id: number; date: string; area_count: number; area_sum: number;[k: string]: any }
type ViewMode = "months" | "days"
type ParsedDate = { year?: string; month?: string; day?: string }
type Pt = { x: number; y: number }

function isNonEmpty(v: any) {
    return String(v ?? "").trim().length > 0
}
function pad2(v: string | number) {
    const s = String(v)
    return s.length >= 2 ? s : `0${s}`
}
function clamp(v: number, a: number, b: number) {
    return Math.max(a, Math.min(b, v))
}

function rgbCsvToRgba(csv: string, a: number) {
    const parts = csv.split(",").map((x) => Number(String(x).trim()))
    const r = Number.isFinite(parts[0]) ? parts[0] : 0
    const g = Number.isFinite(parts[1]) ? parts[1] : 0
    const b = Number.isFinite(parts[2]) ? parts[2] : 0
    return `rgba(${r},${g},${b},${a})`
}

function rgbCsvToRgb(csv: string) {
    const parts = csv.split(",").map((x) => Number(String(x).trim()))
    const r = Number.isFinite(parts[0]) ? parts[0] : 0
    const g = Number.isFinite(parts[1]) ? parts[1] : 0
    const b = Number.isFinite(parts[2]) ? parts[2] : 0
    return `rgb(${r},${g},${b})`
}

function withAlpha(color: string, a: number) {
    const s = String(color).replace(/\s+/g, "")
    const m = s.match(/^rgb\((\d+),(\d+),(\d+)\)$/i)
    if (m) return `rgba(${m[1]},${m[2]},${m[3]},${a})`
    const m2 = s.match(/^rgba\((\d+),(\d+),(\d+),([0-9.]+)\)$/i)
    if (m2) return `rgba(${m2[1]},${m2[2]},${m2[3]},${a})`
    return color
}

function parseThemeRegionBar(themeVal: string) {
    const s = String(themeVal ?? "").trim().replace(/\s+/g, " ")
    const parts = s.split(" ")
    const h = parts[0] ?? "194"
    const sat = parts[1] ?? "84.9%"
    const light = "50%"
    return { h, sat, light }
}

function regionHsla(themeVal: string, alpha: number) {
    const { h, sat, light } = parseThemeRegionBar(themeVal)
    return `hsla(${themeVal}, ${light}, ${alpha})`
}

function parseRowDate(raw: string): ParsedDate {
    const s = String(raw ?? "").trim()
    if (!s) return {}
    if (s.includes(".")) {
        const parts = s.split(".").map((p) => p.trim()).filter(Boolean)
        const out: ParsedDate = {}
        if (parts[0] && /^\d{4}$/.test(parts[0])) out.year = parts[0]
        if (parts[1] && /^\d{1,2}$/.test(parts[1])) out.month = pad2(parts[1])
        if (parts[2] && /^\d{1,2}$/.test(parts[2])) out.day = pad2(parts[2])
        return out
    }
    if (/^\d{1,2}$/.test(s)) return { month: pad2(s) }
    return {}
}

const MONTHS_RU_SHORT: Record<string, string> = {
    "01": "Янв", "02": "Фев", "03": "Мар", "04": "Апр", "05": "Май", "06": "Июн",
    "07": "Июл", "08": "Авг", "09": "Сен", "10": "Окт", "11": "Ноя", "12": "Дек",
}

function getViewMode(getFilter: filterStruct): ViewMode {
    return isNonEmpty((getFilter as any)?.month) ? "days" : "months"
}

function formatXLabelForMode(p: ParsedDate, mode: ViewMode): string {
    if (mode === "months") {
        const mm = p.month ?? "01"
        return MONTHS_RU_SHORT[mm] ?? mm
    }
    const dd = p.day ?? p.month ?? "01"
    const n = Number(dd)
    return Number.isFinite(n) ? String(n) : dd
}

function buildFullDateText(p: ParsedDate, mode: ViewMode, getFilter: filterStruct) {
    const fy = String((getFilter as any)?.year ?? "").trim()
    const fm = String((getFilter as any)?.month ?? "").trim()
    const y = fy || p.year || ""
    if (mode === "months") {
        const mm = p.month ?? "01"
        const name = MONTHS_RU_SHORT[mm] ?? mm
        return y ? `${y}-${mm} (${name})` : `${mm} (${name})`
    }
    const mm = pad2(fm || p.month || "01")
    const dd = p.day ?? p.month ?? "01"
    return y ? `${y}-${mm}-${dd}` : `${mm}-${dd}`
}

function buildInfoItems(row: GraphRow) {
    const items: Array<{ label: string; value: string }> = []
    const keys = Object.keys(row).filter((k) => !/id/i.test(k)).filter((k) => k !== "date")
    const prefer = ["area_count", "area_sum"]
    const ordered = [...prefer.filter((k) => keys.includes(k)), ...keys.filter((k) => !prefer.includes(k))]

    for (const k of ordered) {
        const v = row[k]
        if (v == null || typeof v === "object") continue
        let label = k
        if (k === "area_count") label = "Количество"
        else if (k === "area_sum") label = "Площадь"

        let value = String(v)
        if (typeof v === "number") {
            value =
                k === "area_sum"
                    ? v.toLocaleString(undefined, { maximumFractionDigits: 2 })
                    : v.toLocaleString()
        }
        items.push({ label, value })
    }
    return items
}

function daysInMonth(year: number, month1to12: number) {
    return new Date(year, month1to12, 0).getDate()
}

function addMonotoneCurvePath(
    ctx: CanvasRenderingContext2D,
    pts: Pt[],
    smoothFactor: number,
    clampY?: { top: number; bottom: number }
) {
    if (pts.length < 2) return
    const n = pts.length
    const sf = clamp(smoothFactor, 0, 1)

    const d: number[] = new Array(n - 1)
    for (let i = 0; i < n - 1; i++) {
        const dx = pts[i + 1].x - pts[i].x
        d[i] = dx !== 0 ? (pts[i + 1].y - pts[i].y) / dx : 0
    }

    const m: number[] = new Array(n)
    m[0] = d[0]
    m[n - 1] = d[n - 2]
    for (let i = 1; i < n - 1; i++) {
        if (d[i - 1] === 0 || d[i] === 0 || (d[i - 1] > 0) !== (d[i] > 0)) m[i] = 0
        else m[i] = (d[i - 1] + d[i]) / 2
    }

    for (let i = 0; i < n - 1; i++) {
        if (d[i] === 0) {
            m[i] = 0
            m[i + 1] = 0
            continue
        }
        const a = m[i] / d[i]
        const b = m[i + 1] / d[i]
        const s = a * a + b * b
        if (s > 9) {
            const t = 3 / Math.sqrt(s)
            m[i] = t * a * d[i]
            m[i + 1] = t * b * d[i]
        }
    }

    for (let i = 0; i < n; i++) m[i] *= sf

    ctx.beginPath()
    ctx.moveTo(pts[0].x, pts[0].y)

    for (let i = 0; i < n - 1; i++) {
        const p1 = pts[i]
        const p2 = pts[i + 1]
        const dx = p2.x - p1.x

        const cp1x = p1.x + dx / 3
        const cp1y = p1.y + (m[i] * dx) / 3
        const cp2x = p2.x - dx / 3
        const cp2y = p2.y - (m[i + 1] * dx) / 3

        const c1y = clampY ? clamp(cp1y, clampY.top, clampY.bottom) : cp1y
        const c2y = clampY ? clamp(cp2y, clampY.top, clampY.bottom) : cp2y

        ctx.bezierCurveTo(cp1x, c1y, cp2x, c2y, p2.x, p2.y)
    }
}

function computeNearBoxXY(args: {
    px: number
    py: number
    boxW: number
    boxH: number
    canvasW: number
    canvasH: number
    plotTop: number
    plotBottom: number
    edgePad: number
    gap: number
}) {
    const { px, py, boxW, boxH, canvasW, canvasH, plotTop, plotBottom, edgePad, gap } = args
    let bx = px - boxW / 2
    let by = py - gap - boxH

    if (by < plotTop + 8) by = py + gap
    if (bx < edgePad) bx = px + gap
    if (bx + boxW > canvasW - edgePad) bx = px - gap - boxW

    bx = clamp(bx, edgePad, canvasW - boxW - edgePad)
    by = clamp(by, edgePad, canvasH - boxH - edgePad)
    by = clamp(by, edgePad, plotBottom - 6)

    return { bx, by }
}

export default function LineChart({ getLang, getTheme, getFilter, setFilter }: LineChartProps) {
    const wrapRef = React.useRef<HTMLDivElement | null>(null)
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null)

    const lastMouseRef = React.useRef<{ x: number; y: number } | null>(null)

    const [rows, setRows] = React.useState<GraphRow[]>([])
    const [size, setSize] = React.useState({ w: 0, h: 0 })
    const [hoverIdx, setHoverIdx] = React.useState<number>(-1)

    const mode = getViewMode(getFilter)
    const chart = React.useMemo(() => {
        const t = Theme[getTheme]

        const activeCsv = String(t["--active-color"] ?? "54, 96, 231")
        const textCsv = String(t["--color"] ?? "255, 255, 255")
        const regionVal = String(t["--main-color-hsl"] ?? "194 84.9%")

        const activeSolid = rgbCsvToRgb(activeCsv)
        const activeHover = rgbCsvToRgba(activeCsv, CHART_BASE.hover.activeHoverAlpha)

        const line = regionHsla(regionVal, CHART_BASE.region.lineAlpha)
        const glow = regionHsla(regionVal, CHART_BASE.region.glowAlpha)
        const dotted = regionHsla(regionVal, CHART_BASE.region.dottedAlpha)
        const areaTop = regionHsla(regionVal, CHART_BASE.region.areaTopAlpha)
        const areaBottom = regionHsla(regionVal, CHART_BASE.region.areaBottomAlpha)

        const text = rgbCsvToRgb(textCsv)
        const textDim = rgbCsvToRgba(textCsv, CHART_BASE.region.labelDimAlpha)

        return {
            ...CHART_BASE,
            colors: {
                activeSolid,
                activeHover,
                line,
                lineGlow: glow,
                dotted,

                text,
                textDim,

                dotCenter: rgbCsvToRgba(textCsv, 0.85),
                dotCenterHover: rgbCsvToRgba(textCsv, 0.95),

                areaTop,
                areaBottom,

                bg: "rgba(0,0,0,0)",
            },
        }
    }, [getTheme])

    React.useEffect(() => {
        if (!wrapRef.current) return
        const ro = new ResizeObserver((entries) => {
            const cr = entries[0]?.contentRect
            if (!cr) return
            setSize({ w: Math.max(0, Math.floor(cr.width)), h: Math.max(0, Math.floor(cr.height)) })
        })
        ro.observe(wrapRef.current)
        return () => ro.disconnect()
    }, [])

    React.useEffect(() => {
        ; (async () => {
            const viewparams = Object.entries(getFilter)
                .map(([key, value]) => `${key}:${escapeCql(String(value ?? ""))}`)
                .join(";")

            const url =
                "http://localhost:8080/geoserver/Test/ows?" +
                "service=WFS&version=2.0.0&request=GetFeature" +
                "&typeNames=Test:graph_data" +
                "&outputFormat=application/json" +
                `&viewparams=${viewparams}`

            const json = await fetch(url).then((r) => r.json())
            let list: GraphRow[] = (json?.features ?? []).map((f: any) => f.properties)
            const parsed = list.map((r) => ({ r, p: parseRowDate(r.date) }))

            if (mode === "months") {
                const map = new Map<string, GraphRow>()
                for (const it of parsed) {
                    const mm = it.p.month ?? pad2(String(it.r.date))
                    map.set(mm, { ...it.r, date: mm })
                }
                const filled: GraphRow[] = []
                for (let m = 1; m <= 12; m++) {
                    const key = pad2(m)
                    filled.push(map.get(key) ?? { id: -m, date: key, area_count: 0, area_sum: 0 })
                }
                list = filled.sort((a, b) => Number(a.date) - Number(b.date))
            } else {
                const fy = String((getFilter as any)?.year ?? "").trim()
                const fm = String((getFilter as any)?.month ?? "").trim()
                const yearNum = Number(fy || new Date().getFullYear())
                const monthNum = Number(fm || 1)

                const dim = daysInMonth(
                    Number.isFinite(yearNum) ? yearNum : new Date().getFullYear(),
                    Number.isFinite(monthNum) ? monthNum : 1
                )

                const map = new Map<string, GraphRow>()
                for (const it of parsed) {
                    const dd = it.p.day ?? it.p.month ?? pad2(String(it.r.date))
                    const key = pad2(dd)
                    map.set(key, { ...it.r, date: key })
                }

                const filled: GraphRow[] = []
                for (let d = 1; d <= dim; d++) {
                    const key = pad2(d)
                    filled.push(map.get(key) ?? { id: -d, date: key, area_count: 0, area_sum: 0 })
                }
                list = filled.sort((a, b) => Number(a.date) - Number(b.date))
            }

            setRows(list)

            if (mode === "months") setHoverIdx(-1)
        })().catch((e) => {
            console.error("LineChart fetch error:", e)
            setRows([])
            setHoverIdx(-1)
        })
    }, [getFilter, mode])

    const points = React.useMemo(() => {
        const w = size.w
        const h0 = size.h
        const n = rows.length

        if (w <= 2 || h0 <= 2 || n <= 0) {
            return {
                real: [] as Array<{ x: number; y: number; row: GraphRow; i: number; p: ParsedDate }>,
                curvePts: [] as Pt[],
                plot: { left: 0, right: 0, top: 0, bottom: 0, pw: 0, ph: 0 },
                labelY: 0,
                maxY: 0,
            }
        }

        const pad = chart.padding
        const bottomPad = Math.max(pad.bottom, chart.label.minBottomSpace)
        const left = pad.left
        const right = w - pad.right
        const top = pad.top + (chart.topText.enabled ? chart.topText.safeTop : 0)
        const bottomPlot = h0 - bottomPad
        const pw = Math.max(1, right - left)
        const ph = Math.max(1, bottomPlot - top)
        const step = pw / n

        const vals = rows.map((r) => Number(r.area_count ?? 0))
        let yMin = Math.min(...vals)
        let yMax = Math.max(...vals)
        if (!Number.isFinite(yMin)) yMin = 0
        if (!Number.isFinite(yMax)) yMax = 1
        if (yMin === yMax) {
            yMin -= 1
            yMax += 1
        }
        const yPad = (yMax - yMin) * 0.08
        yMin -= yPad
        yMax += yPad

        const yScale = (v: number) => {
            const t = (v - yMin) / (yMax - yMin)
            return bottomPlot - t * ph
        }

        const real = rows.map((row, i) => {
            const x = left + (i + 0.5) * step
            const y = yScale(Number(row.area_count ?? 0))
            const p = parseRowDate(row.date)
            if (mode === "days") p.day = pad2(row.date)
            else p.month = pad2(row.date)
            return { x, y, row, i, p }
        })

        const curvePts: Pt[] = []
        curvePts.push({ x: left, y: real[0].y })
        for (const rp of real) curvePts.push({ x: rp.x, y: rp.y })
        curvePts.push({ x: left + n * step, y: real[real.length - 1].y })

        const maxY = Math.min(...real.map((p) => p.y))

        return {
            real,
            curvePts,
            plot: { left, right, top, bottom: bottomPlot, pw, ph },
            labelY: bottomPlot + chart.label.yOffset,
            maxY,
        }
    }, [rows, size, mode, chart])

    const pickPoint = React.useCallback(
        (mx: number, my: number) => {
            const real = points.real
            if (!real.length) return -1
            let best = -1
            let bestD = Infinity
            for (let i = 0; i < real.length; i++) {
                const p = real[i]
                const dx = p.x - mx
                const dy = p.y - my
                const d = Math.sqrt(dx * dx + dy * dy)
                if (d < bestD) {
                    bestD = d
                    best = i
                }
            }
            return bestD <= chart.hitRadius ? best : -1
        },
        [points.real, chart.hitRadius]
    )

    React.useEffect(() => {
        if (!lastMouseRef.current) return
        const { x, y } = lastMouseRef.current
        setHoverIdx(pickPoint(x, y))
    }, [points.real, pickPoint])

    React.useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const w = size.w
        const h = size.h
        if (w <= 2 || h <= 2) return

        const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1))
        canvas.width = w * dpr
        canvas.height = h * dpr
        canvas.style.width = `${w}px`
        canvas.style.height = `${h}px`
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

        const C = chart.colors

        ctx.clearRect(0, 0, w, h)
        ctx.fillStyle = C.bg
        ctx.fillRect(0, 0, w, h)

        const { real, curvePts, plot, labelY, maxY } = points
        const n = real.length
        if (!n || curvePts.length < 2) return

        ctx.save()
        ctx.lineWidth = chart.grid.lineWidth
        ctx.setLineDash(chart.grid.dash)
        ctx.strokeStyle = withAlpha(C.text, chart.grid.alpha)
        for (let r = 0; r <= chart.grid.rows; r++) {
            const y = plot.top + (plot.ph * r) / chart.grid.rows
            ctx.beginPath()
            ctx.moveTo(plot.left, y)
            ctx.lineTo(plot.right, y)
            ctx.stroke()
        }
        ctx.restore()

        const areaGrad = ctx.createLinearGradient(0, maxY, 0, plot.bottom)
        
        areaGrad.addColorStop(0, C.areaTop)
        areaGrad.addColorStop(1, C.areaBottom)

        ctx.save()
        addMonotoneCurvePath(
            ctx,
            curvePts,
            chart.curve.smoothFactor,
            chart.curve.clampControls ? { top: plot.top, bottom: plot.bottom } : undefined
        )
        ctx.lineTo(curvePts[curvePts.length - 1].x, plot.bottom)
        ctx.lineTo(curvePts[0].x, plot.bottom)
        ctx.closePath()
        ctx.clip()
        ctx.fillStyle = areaGrad
        ctx.fillRect(plot.left, plot.top, plot.pw, plot.ph)
        ctx.restore()

        ctx.save()
        ctx.lineWidth = chart.lineWidth
        ctx.lineJoin = "round"
        ctx.lineCap = "round"
        ctx.strokeStyle = C.line
        addMonotoneCurvePath(
            ctx,
            curvePts,
            chart.curve.smoothFactor,
            chart.curve.clampControls ? { top: plot.top, bottom: plot.bottom } : undefined
        )
        ctx.stroke()
        ctx.restore()

        ctx.save()
        ctx.globalAlpha = 0.55
        ctx.lineWidth = Math.max(1, chart.lineWidth + 2)
        ctx.strokeStyle = C.lineGlow
        ctx.lineJoin = "round"
        ctx.lineCap = "round"
        addMonotoneCurvePath(
            ctx,
            curvePts,
            chart.curve.smoothFactor,
            chart.curve.clampControls ? { top: plot.top, bottom: plot.bottom } : undefined
        )
        ctx.stroke()
        ctx.restore()

        const dottedLine = (x: number, y1: number, y2: number, color: string, width: number) => {
            let y = y1
            ctx.save()
            ctx.strokeStyle = color
            ctx.lineWidth = width
            while (y < y2) {
                const yNext = y + chart.dotted.dashLen
                ctx.beginPath()
                ctx.moveTo(x, y)
                ctx.lineTo(x, Math.min(yNext, y2))
                ctx.stroke()
                y += chart.dotted.dashLen + chart.dotted.gap
            }
            ctx.restore()
        }

        if (chart.dotted.enabled) {
            for (let i = 0; i < n; i++) {
                const p = real[i]
                const isHover = i === hoverIdx
                dottedLine(
                    p.x,
                    p.y + 1,
                    plot.bottom,
                    isHover ? C.activeHover : C.dotted,
                    chart.dotted.width * (isHover ? chart.hover.dottedWidthScale : 1)
                )
            }
        }

        const drawPoint = (x: number, y: number, isHover: boolean) => {
            const innerR = chart.dot.innerRadius * (isHover ? chart.hover.innerScale : 1)
            const ringExtra = isHover ? chart.dot.ringRadiusHoverAdd : 0
            const ringRBase = innerR + chart.dot.gap + chart.dot.ringWidth + ringExtra
            const ringR = ringRBase * (isHover ? chart.hover.ringScale : 1)

            const ringColor = isHover ? C.activeHover : C.line
            const innerColor = isHover ? C.activeHover : C.line

            ctx.save()

            if (chart.dotRing.enabled) {
                ctx.beginPath()
                ctx.arc(x, y, ringR, 0, Math.PI * 2)
                ctx.strokeStyle = ringColor
                ctx.lineWidth = chart.dot.ringWidth * (isHover ? 1.05 : 1)
                ctx.stroke()

                ctx.globalCompositeOperation = "destination-out"
                ctx.beginPath()
                ctx.arc(x, y, innerR + chart.dot.gap, 0, Math.PI * 2)
                ctx.fill()
                ctx.globalCompositeOperation = "source-over"
            }

            ctx.beginPath()
            ctx.arc(x, y, innerR, 0, Math.PI * 2)
            ctx.fillStyle = innerColor
            ctx.fill()

            ctx.beginPath()
            ctx.arc(x, y, Math.max(1.8, innerR * chart.dot.centerScale), 0, Math.PI * 2)
            ctx.fillStyle = isHover ? C.dotCenterHover : C.dotCenter
            ctx.fill()

            ctx.restore()
        }

        for (let i = 0; i < n; i++) drawPoint(real[i].x, real[i].y, i === hoverIdx)

        if (chart.topText.enabled) {
            ctx.save()
            ctx.font = chart.topText.font
            ctx.textAlign = "center"
            ctx.textBaseline = "middle"

            const selectedDay = String((getFilter as any)?.day ?? "").trim()

            for (let i = 0; i < n; i++) {
                const p = real[i]
                const txt = Number(p.row.area_count ?? 0).toLocaleString()

                let fill = C.text
                if (i === hoverIdx) fill = C.activeHover
                else {
                    let dim = false
                    if (mode === "days" && selectedDay) dim = pad2(selectedDay) !== pad2(p.row.date)
                    fill = dim ? C.textDim : C.text
                }

                ctx.fillStyle = fill
                const y = clamp(p.y - chart.topText.yOffset, 10, plot.bottom - 10)
                ctx.fillText(txt, p.x, y)
            }
            ctx.restore()
        }

        ctx.save()
        ctx.font = chart.label.font
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        const selectedMonth = String((getFilter as any)?.month ?? "").trim()
        const selectedDay = String((getFilter as any)?.day ?? "").trim()

        for (let i = 0; i < n; i++) {
            const p = real[i]
            const lbl = formatXLabelForMode(p.p, mode)

            let fill = C.text
            if (i === hoverIdx) fill = C.activeHover
            else {
                let dim = false
                if (mode === "months" && selectedMonth) dim = pad2(selectedMonth) !== pad2(p.row.date)
                if (mode === "days" && selectedDay) dim = pad2(selectedDay) !== pad2(p.row.date)
                fill = dim ? C.textDim : C.text
            }

            ctx.fillStyle = fill
            const y = clamp(labelY, plot.bottom + 10, h - 10)
            ctx.fillText(lbl, p.x, y)
        }
        ctx.restore()

        if (chart.infoBox.enabled && hoverIdx >= 0 && hoverIdx < n) {
            const hp = real[hoverIdx]
            const title = buildFullDateText(hp.p, mode, getFilter)
            const items = buildInfoItems(hp.row)

            ctx.save()

            const maxW = Math.floor(w * chart.infoBox.maxWidthPct)

            ctx.font = chart.infoBox.titleFont
            let contentW = Math.min(maxW, Math.ceil(ctx.measureText(title).width))

            ctx.font = chart.infoBox.itemFont
            for (const it of items) {
                const s = `${it.label}: ${it.value}`
                contentW = Math.min(maxW, Math.max(contentW, Math.ceil(ctx.measureText(s).width)))
            }

            const padX = chart.infoBox.paddingX
            const padY = chart.infoBox.paddingY
            const gap = chart.infoBox.gap
            const titleH = 18
            const itemH = 16
            const boxH = padY * 2 + titleH + (items.length ? gap + items.length * itemH : 0)
            const boxW = padX * 2 + contentW

            let bx = 0
            let by = 0

            if (chart.infoBox.mode === "global") {
                const anchor = chart.infoBox.anchorPadding
                bx = plot.right - boxW - anchor
                by = plot.top - (chart.topText.enabled ? chart.topText.safeTop : 0)
                bx = clamp(bx, 8, w - boxW - 8)
                by = clamp(by, 8, h - boxH - 8)
            } else {
                const near = computeNearBoxXY({
                    px: hp.x,
                    py: hp.y,
                    boxW,
                    boxH,
                    canvasW: w,
                    canvasH: h,
                    plotTop: plot.top,
                    plotBottom: plot.bottom,
                    edgePad: chart.infoBox.edgePad,
                    gap: chart.infoBox.nearGap,
                })
                bx = near.bx
                by = near.by
            }

            const r = chart.infoBox.radius
            ctx.fillStyle = chart.infoBox.bg
            ctx.beginPath()
            ctx.moveTo(bx + r, by)
            ctx.arcTo(bx + boxW, by, bx + boxW, by + boxH, r)
            ctx.arcTo(bx + boxW, by + boxH, bx, by + boxH, r)
            ctx.arcTo(bx, by + boxH, bx, by, r)
            ctx.arcTo(bx, by, bx + boxW, by, r)
            ctx.closePath()
            ctx.fill()

            let ty = by + padY + 9
            ctx.textAlign = "left"
            ctx.textBaseline = "middle"

            ctx.font = chart.infoBox.titleFont
            ctx.fillStyle = "rgba(255,255,255,0.95)"
            ctx.fillText(title, bx + padX, ty)

            ty += titleH + (items.length ? gap : 0)
            ctx.font = chart.infoBox.itemFont
            ctx.fillStyle = "rgba(255,255,255,0.9)"
            for (const it of items) {
                ctx.fillText(`${it.label}: ${it.value}`, bx + padX, ty)
                ty += itemH
            }

            ctx.restore()
        }

        void getLang
    }, [points, size, hoverIdx, getFilter, mode, chart, getLang])

    const onMouseMove = React.useCallback(
        (e: React.MouseEvent) => {
            const rect = (e.currentTarget as HTMLCanvasElement).getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            lastMouseRef.current = { x, y }
            setHoverIdx(pickPoint(x, y))
        },
        [pickPoint]
    )

    const onMouseLeave = React.useCallback(() => setHoverIdx(-1), [])

    const onClick = React.useCallback(
        (e: React.MouseEvent) => {
            const canvas = e.currentTarget as HTMLCanvasElement
            const rect = canvas.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            lastMouseRef.current = { x, y }

            const idx = pickPoint(x, y)
            if (idx < 0 || idx >= points.real.length) return

            setHoverIdx(idx)

            const row = points.real[idx].row

            if (mode === "months") {
                const mm = pad2(row.date)
                setFilter((prev: filterStruct) => {
                    const cur = String((prev as any).month ?? "").trim()
                    if (pad2(cur || "") === mm) return { ...(prev as any), month: "", day: "" }
                    return { ...(prev as any), month: String(Number(mm)), day: "" }
                })
            } else {
                const dd = pad2(row.date)
                setFilter((prev: filterStruct) => {
                    const cur = String((prev as any).day ?? "").trim()
                    if (pad2(cur || "") === dd) return { ...(prev as any), day: "" }
                    return { ...(prev as any), day: String(Number(dd)) }
                })
            }
        },
        [pickPoint, points.real, mode, setFilter]
    )

    return (
        <div className="lineChartArea">
            <div className="lineChartHeader">
                {<div className={`lineChartTitlePrevBtn ${getFilter["month"] !== "" && "enter"}`}
                    onClick={() => {
                        setFilter((prev: filterStruct) => ({
                            ...prev,
                            month: ""
                        } as filterStruct))
                    }}>
                    <ArrowIcon
                        size="20px"
                        color={`rgb(${Theme[getTheme]["--color"]})`}
                    />
                </div>}
                <div className="lineChartTitle">{Translations["graphicTitle"][getLang as TranslationKey]}</div>
            </div>
            <div ref={wrapRef} className="lineChartCanvasArea">
                <canvas
                    ref={canvasRef}
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    onClick={onClick}
                    style={{ cursor: hoverIdx >= 0 ? "pointer" : "default" }}
                    className="lineChartBlock"
                />
            </div>
        </div>
    )
}