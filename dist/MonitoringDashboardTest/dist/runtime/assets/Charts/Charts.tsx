import { React } from "jimu-core"
import { BarChart as MuiBarChart } from "@mui/x-charts/BarChart"
import { LineChart as MuiLineChart } from "@mui/x-charts/LineChart"
import { PieChart as MuiPieChart } from "@mui/x-charts/PieChart"

const MuiBarChartAny = MuiBarChart as any
const MuiLineChartAny = MuiLineChart as any
const MuiPieChartAny = MuiPieChart as any

export type SortOrder = "asc" | "desc" | "none"

interface BaseChartProps<T> {
    data: T[] | false | null | undefined
    xKey: keyof T & string
    yKey: keyof T & string
    height?: number
    onItemClick?: (value: string, row: T) => void
    sortOrder?: SortOrder
    selectedValue?: string | null
}

interface BarChartProps<T> extends BaseChartProps<T> {
    direction?: "left-to-right" | "bottom-to-top"
    valueBoost?: number
    showTooltip?: boolean
    styles?: any
}

interface PieChartProps<T> extends BaseChartProps<T> {
    outerRadiusPct?: number
    innerRadiusPct?: number
    startAngleDeg?: number
    legendPosition?: "top" | "bottom" | "left" | "right" | "none"
    showTooltip?: boolean
    styles?: any
}

interface LineChartProps<T> extends BaseChartProps<T> {
    type?: "line"
    direction?: "bottom-to-top" | "left-to-right"
    smooth?: boolean
    area?: { show?: boolean; opacity?: number }
    showTooltip?: boolean
    styles?: any
}

export type ChartProps<T> = LineChartProps<T> | (BarChartProps<T> & { type: "bar" }) | (PieChartProps<T> & { type: "pie" })

const toNumber = (value: unknown): number => {
    const numberValue = Number(value)
    return Number.isFinite(numberValue) ? numberValue : 0
}

const primaryChartColor = "#38bdf8"

const chartColors = [
    primaryChartColor,
    "#22d3ee",
    "#22c55e",
    "#a855f7",
    "#f97316",
    "#ef4444",
    "#eab308",
    "#14b8a6",
]

const chartSx = {
    "& text": {
        fill: "rgb(var(--text-color)) !important",
        color: "rgb(var(--text-color)) !important",
        fontWeight: 700,
    },
    "& .MuiChartsAxis-tickLabel, & .MuiChartsAxis-label": {
        fill: "rgb(var(--text-muted)) !important",
        color: "rgb(var(--text-muted)) !important",
        fontSize: "11px",
        fontWeight: 800,
    },
    "& .MuiChartsAxis-line": {
        stroke: "rgba(var(--border-color), 0.9)",
    },
    "& .MuiChartsAxis-tick": {
        stroke: "rgba(var(--border-color), 0.9)",
    },
    "& .MuiChartsGrid-line": {
        stroke: "rgba(var(--border-color), 0.5)",
    },
    "& .MuiChartsLegend-label": {
        fill: "rgb(var(--text-color)) !important",
        color: "rgb(var(--text-color)) !important",
        fontSize: "12px",
        fontWeight: 800,
    },
    "& .MuiChartsTooltip-root": {
        color: "rgb(var(--text-color))",
    },
    "& .MuiBarElement-root, & .MuiPieArc-root, & .MuiLineElement-root, & .MuiMarkElement-root": {
        cursor: "pointer",
        transition: "filter 0.15s ease, opacity 0.15s ease, stroke-width 0.15s ease",
    },
    "& .MuiBarElement-root[data-highlighted='true']": {
        filter: "drop-shadow(0 0 5px rgba(56, 189, 248, 0.36))",
        stroke: "#0ea5e9 !important",
        strokeWidth: "2px !important",
    },
    "& .MuiBarElement-root[data-faded='true']": {
        opacity: "0.34 !important",
    },
    "& .MuiPieArc-root[data-highlighted='true']": {
        filter: "drop-shadow(0 0 5px rgba(56, 189, 248, 0.34))",
        stroke: "#0ea5e9 !important",
        strokeWidth: "2px !important",
    },
    "& .MuiPieArc-root[data-faded='true']": {
        opacity: "0.38 !important",
    },
    "& .MuiMarkElement-root[data-highlighted='true']": {
        r: "5px",
        fill: "#0ea5e9 !important",
        stroke: "#075985 !important",
        strokeWidth: "2px !important",
        filter: "drop-shadow(0 0 5px rgba(14, 165, 233, 0.42))",
    },
    "& .MuiLineElement-root[data-highlighted='true']": {
        filter: "drop-shadow(0 0 5px rgba(56, 189, 248, 0.38))",
    },
    "& .MuiPieArc-root": {
        stroke: "transparent !important",
        strokeWidth: "0px !important",
    },
    "& .MuiLineElement-root": {
        strokeWidth: "3px !important",
        filter: "none",
    },
    "& .MuiAreaElement-root": {
        fill: "rgba(56, 189, 248, 0.14) !important",
        fillOpacity: "1 !important",
    },
    "& .MuiMarkElement-root": {
        fill: primaryChartColor + " !important",
        stroke: primaryChartColor + " !important",
        strokeWidth: "1px !important",
        opacity: "0.95",
    },
}

const useAutoChartHeight = (fallback: number) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const [height, setHeight] = React.useState<number>(fallback)

    React.useEffect(() => {
        const node = ref.current
        if (!node || typeof ResizeObserver === "undefined") return

        const update = () => {
            const rect = node.getBoundingClientRect()
            setHeight(Math.max(180, Math.floor(rect.height || fallback)))
        }

        update()
        const observer = new ResizeObserver(update)
        observer.observe(node)

        return () => observer.disconnect()
    }, [fallback])

    return { ref, height }
}

const normalizeData = <T,>(data: T[] | false | null | undefined, yKey: keyof T & string, sortOrder: SortOrder = "none"): T[] => {
    const items = Array.isArray(data) ? [...data] : []

    if (sortOrder === "none") return items

    return items.sort((a: T, b: T) => {
        const diff = toNumber(a[yKey]) - toNumber(b[yKey])
        return sortOrder === "asc" ? diff : -diff
    })
}

const getSelectedIndex = <T,>(items: T[], xKey: keyof T & string, selectedValue?: string | null): number => {
    if (!selectedValue) return -1
    const selectedText = String(selectedValue).trim()
    if (!selectedText) return -1

    return items.findIndex((item: T) => String((item as any)[xKey] ?? "").trim() === selectedText)
}

const getChartSx = (styles: any = {}) => ({
    width: "100%",
    height: "100%",
    minHeight: 0,
    backgroundColor: styles.backgroundColor ?? "transparent",
    borderRadius: "0",
    padding: 0,
    overflow: "hidden",
})

export function BarChart<T>({
    data,
    xKey,
    yKey,
    height = 280,
    onItemClick,
    sortOrder = "none",
    valueBoost = 0,
    styles = {},
    selectedValue = null,
}: BarChartProps<T>) {
    const chartData = normalizeData(data, yKey, sortOrder).map((item: T) => ({
        ...item,
        [yKey]: toNumber(item[yKey]) + valueBoost,
    }))

    const selectedIndex = getSelectedIndex(chartData, xKey, selectedValue)
    const highlightedItem = selectedIndex >= 0 ? { seriesId: "main", dataIndex: selectedIndex } : undefined
    const auto = useAutoChartHeight(height)

    return (
        <div ref={auto.ref} style={getChartSx(styles)}>
            <MuiBarChartAny
                dataset={chartData as any[]}
                yAxis={[{
                    scaleType: "band",
                    dataKey: xKey,
                    tickLabelStyle: { fontSize: 11 },
                }]}
                xAxis={[{
                    tickLabelStyle: { fontSize: 11 },
                }]}
                series={[{
                    id: "main",
                    dataKey: yKey,
                    color: primaryChartColor,
                    highlightScope: { highlighted: "item", faded: "global" },
                    valueFormatter: (value: number | null) => String(value ?? 0),
                }]}
                layout="horizontal"
                highlightedItem={highlightedItem}
                height={auto.height}
                margin={{ left: 122, right: 28, top: 22, bottom: 34 }}
                grid={{ vertical: false, horizontal: false }}
                sx={chartSx}
                onItemClick={(_: any, item: any) => {
                    const row = chartData[item.dataIndex]
                    if (!row || !onItemClick) return
                    onItemClick(String((row as any)[xKey]), row)
                }}
            />
        </div>
    )
}

export function PieChart<T>({
    data,
    xKey,
    yKey,
    height = 280,
    onItemClick,
    sortOrder = "none",
    outerRadiusPct = 100,
    innerRadiusPct = 50,
    startAngleDeg = -90,
    legendPosition = "left",
    styles = {},
    selectedValue = null,
}: PieChartProps<T>) {
    const chartData = normalizeData(data, yKey, sortOrder)
    const auto = useAutoChartHeight(height)
    const radiusBase = Math.max(20, auto.height / 2 - 35)
    const pieData = chartData.map((item: T, index: number) => ({
        id: index,
        label: String(item[xKey] ?? "—"),
        value: toNumber(item[yKey]),
    }))
    const selectedIndex = getSelectedIndex(chartData, xKey, selectedValue)
    const highlightedItem = selectedIndex >= 0 ? { seriesId: "main", dataIndex: selectedIndex } : undefined

    return (
        <div ref={auto.ref} style={getChartSx(styles)}>
            <MuiPieChartAny
                colors={chartColors}
                series={[{
                    id: "main",
                    data: pieData,
                    innerRadius: Math.round(radiusBase * (innerRadiusPct / 100)),
                    outerRadius: Math.round(radiusBase * (outerRadiusPct / 100)),
                    startAngle: startAngleDeg,
                    endAngle: startAngleDeg + 360,
                    paddingAngle: 2,
                    cornerRadius: 10,
                    highlightScope: { faded: "global", highlighted: "item" },
                    faded: { innerRadius: Math.round(radiusBase * (innerRadiusPct / 100)), additionalRadius: -4, color: "gray" },
                }]}
                highlightedItem={highlightedItem}
                height={auto.height}
                margin={{ left: legendPosition === "left" ? 152 : 20, right: 18, top: 18, bottom: 18 }}
                sx={chartSx}
                slotProps={{
                    legend: {
                        hidden: legendPosition === "none",
                        direction: legendPosition === "top" || legendPosition === "bottom" ? "row" : "column",
                        position: {
                            vertical: legendPosition === "bottom" ? "bottom" : legendPosition === "top" ? "top" : "middle",
                            horizontal: legendPosition === "right" ? "right" : "left",
                        },
                        labelStyle: { fontSize: styles?.legend?.fontSize ?? 12 },
                    },
                }}
                onItemClick={(_: any, item: any) => {
                    const row = chartData[item.dataIndex]
                    if (!row || !onItemClick) return
                    onItemClick(String((row as any)[xKey]), row)
                }}
            />
        </div>
    )
}

export function LineChart<T>({
    data,
    xKey,
    yKey,
    height = 280,
    onItemClick,
    styles = {},
    selectedValue = null,
}: LineChartProps<T>) {
    const chartData = normalizeData(data, yKey, "none")
    const labels = chartData.map((item: T) => String(item[xKey] ?? "—"))
    const values = chartData.map((item: T) => toNumber(item[yKey]))
    const selectedIndex = getSelectedIndex(chartData, xKey, selectedValue)
    const highlightedItem = selectedIndex >= 0 ? { seriesId: "main", dataIndex: selectedIndex } : undefined

    const auto = useAutoChartHeight(height)

    return (
        <div ref={auto.ref} style={getChartSx(styles)}>
            <MuiLineChartAny
                xAxis={[{
                    scaleType: "point",
                    data: labels,
                    tickLabelStyle: { fontSize: 11 },
                }]}
                yAxis={[{
                    tickLabelStyle: { fontSize: 11 },
                }]}
                series={[{
                    id: "main",
                    data: values,
                    area: true,
                    showMark: true,
                    curve: "monotoneX",
                    color: primaryChartColor,
                    highlightScope: { highlighted: "item", faded: "global" },
                    valueFormatter: (value: number | null) => String(value ?? 0),
                }]}
                highlightedItem={highlightedItem}
                height={auto.height}
                margin={{ left: 58, right: 24, top: 22, bottom: 42 }}
                grid={{ horizontal: true }}
                sx={chartSx}
                onItemClick={(_: any, item: any) => {
                    const row = chartData[item.dataIndex]
                    if (!row || !onItemClick) return
                    onItemClick(String((row as any)[xKey]), row)
                }}
                onAxisClick={(_: any, item: any) => {
                    const axisValue = item?.axisValue ?? item?.x?.value ?? item?.dataIndex
                    if (axisValue === undefined || axisValue === null || !onItemClick) return

                    const row = chartData.find((chartItem: T) => String((chartItem as any)[xKey]) === String(axisValue))
                    if (!row) return
                    onItemClick(String((row as any)[xKey]), row)
                }}
            />
        </div>
    )
}

export function Chart<T>(props: ChartProps<T>) {
    if ((props as any).type === "bar") return <BarChart {...(props as any)} />
    if ((props as any).type === "pie") return <PieChart {...(props as any)} />
    return <LineChart {...(props as any)} />
}
