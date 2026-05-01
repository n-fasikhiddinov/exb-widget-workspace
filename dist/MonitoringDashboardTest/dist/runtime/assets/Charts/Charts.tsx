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

const chartColors = [
    "#2f73ff",
    "#ff7a1a",
    "#22c55e",
    "#a855f7",
    "#ef4444",
    "#06b6d4",
    "#eab308",
    "#0f4da3",
]

const chartSx = {
    "& .MuiChartsAxis-tickLabel": {
        fill: "#25324a",
        fontSize: "11px",
        fontWeight: 600,
    },
    "& .MuiChartsAxis-line": {
        stroke: "#d9e2ef",
    },
    "& .MuiChartsAxis-tick": {
        stroke: "#d9e2ef",
    },
    "& .MuiChartsGrid-line": {
        stroke: "#e8eef7",
    },
    "& .MuiBarElement-root, & .MuiPieArc-root, & .MuiLineElement-root, & .MuiMarkElement-root": {
        cursor: "pointer",
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

const getChartSx = (styles: any = {}) => ({
    width: "100%",
    height: "100%",
    minHeight: 0,
    backgroundColor: styles.backgroundColor ?? "#fff",
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
}: BarChartProps<T>) {
    const chartData = normalizeData(data, yKey, sortOrder).map((item: T) => ({
        ...item,
        [yKey]: toNumber(item[yKey]) + valueBoost,
    }))

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
                    dataKey: yKey,
                    color: "#2f73ff",
                    valueFormatter: (value: number | null) => String(value ?? 0),
                }]}
                layout="horizontal"
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
}: PieChartProps<T>) {
    const chartData = normalizeData(data, yKey, sortOrder)
    const auto = useAutoChartHeight(height)
    const radiusBase = Math.max(20, auto.height / 2 - 35)
    const pieData = chartData.map((item: T, index: number) => ({
        id: index,
        label: String(item[xKey] ?? "—"),
        value: toNumber(item[yKey]),
    }))

    return (
        <div ref={auto.ref} style={getChartSx(styles)}>
            <MuiPieChartAny
                colors={chartColors}
                series={[{
                    data: pieData,
                    innerRadius: Math.round(radiusBase * (innerRadiusPct / 100)),
                    outerRadius: Math.round(radiusBase * (outerRadiusPct / 100)),
                    startAngle: startAngleDeg,
                    endAngle: startAngleDeg + 360,
                    paddingAngle: 1.5,
                    cornerRadius: 4,
                    highlightScope: { faded: "global", highlighted: "item" },
                    faded: { innerRadius: Math.round(radiusBase * (innerRadiusPct / 100)), additionalRadius: -4, color: "gray" },
                }]}
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
}: LineChartProps<T>) {
    const chartData = normalizeData(data, yKey, "none")
    const labels = chartData.map((item: T) => String(item[xKey] ?? "—"))
    const values = chartData.map((item: T) => toNumber(item[yKey]))

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
                    data: values,
                    area: true,
                    curve: "monotoneX",
                    color: "#2f73ff",
                    valueFormatter: (value: number | null) => String(value ?? 0),
                }]}
                height={auto.height}
                margin={{ left: 58, right: 24, top: 22, bottom: 42 }}
                grid={{ horizontal: true }}
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

export function Chart<T>(props: ChartProps<T>) {
    if ((props as any).type === "bar") return <BarChart {...(props as any)} />
    if ((props as any).type === "pie") return <PieChart {...(props as any)} />
    return <LineChart {...(props as any)} />
}
