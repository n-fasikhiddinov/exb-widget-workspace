import { React } from 'jimu-core'

/* ================= TYPES ================= */

export type Direction = 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top'
export type SortOrder = 'none' | 'asc' | 'desc'
export type LegendPosition = 'top' | 'bottom' | 'left' | 'right' | 'none'

export type SeriesDef<T> = {
    key: keyof T
    label?: string
    color?: string
}

/* ================= STYLES ================= */

export type Padding = { top: number; right: number; bottom: number; left: number }
export type Gap = { labelToMark: number; markToValue: number }

export type TooltipStyle = {
    maxWidth: number
    bg: string
    color: string
    borderRadius: number
    paddingX: number
    paddingY: number
    lineHeight: number
    titleWeight: number
    shadow: string
}

export type LegendStyle = {
    maxPct: number // max 0..1
    fontSize: number
    color: string
    gap: number
    itemGap: number
    markerSize: number
    markerRadius: number
    padding: number
}

export type SelectStyle = {
    expand: number
    stroke: string
    lineWidth: number
    pieExpand: number
}

export type BarStyle = {
    thickness: number
    gap: number
    seriesGap: number
}

export type LineStyle = {
    step: number
    width: number
    pointRadius: number
}

export type PieStyle = {
    outerRadiusPct: number
    innerRadiusPct: number
    startAngleDeg: number
}

export type TextStyle = {
    font: string
    labelColor: string
    valueColor: string
    maxLabelWidth?: number // optional: clamp label area
}

export interface ChartStyles {
    padding?: Partial<Padding>
    gap?: Partial<Gap>
    backgroundColor?: string
    palette?: string[]
    text?: Partial<TextStyle>
    tooltip?: Partial<TooltipStyle>
    legend?: Partial<LegendStyle>
    select?: Partial<SelectStyle>
    bar?: Partial<BarStyle>
    line?: Partial<LineStyle>
    pie?: Partial<PieStyle>
}

const DEFAULT_PALETTE = [
    '#2563eb', '#f97316', '#22c55e', '#a855f7', '#ef4444',
    '#06b6d4', '#eab308', '#14b8a6', '#f43f5e', '#64748b',
]

const DEFAULT_STYLES: Required<Omit<ChartStyles, 'text'>> & { text: TextStyle } = {
    padding: { top: 20, right: 40, bottom: 30, left: 80 },
    gap: { labelToMark: 10, markToValue: 8 },
    backgroundColor: '#f9fafb',
    palette: DEFAULT_PALETTE,

    text: {
        font: '12px system-ui, sans-serif',
        labelColor: '#000',
        valueColor: '#000',
    },

    tooltip: {
        maxWidth: 260,
        bg: 'rgba(17,24,39,0.92)',
        color: '#fff',
        borderRadius: 8,
        paddingX: 10,
        paddingY: 8,
        lineHeight: 16,
        titleWeight: 700,
        shadow: '0 6px 24px rgba(0,0,0,0.25)',
    },

    legend: {
        maxPct: 0.35,
        fontSize: 12,
        color: '#111827',
        gap: 10,
        itemGap: 8,
        markerSize: 10,
        markerRadius: 2,
        padding: 8,
    },

    select: {
        expand: 2,
        stroke: '#111827',
        lineWidth: 2,
        pieExpand: 8,
    },

    bar: { thickness: 22, gap: 12, seriesGap: 2 },
    line: { step: 52, width: 2, pointRadius: 4 },
    pie: { outerRadiusPct: 90, innerRadiusPct: 0, startAngleDeg: -90 },
}

function isPlainObject(x: any) {
    return x && typeof x === 'object' && !Array.isArray(x)
}

function deepMerge<T extends any>(base: T, patch?: any): T {
    if (!patch) return base
    const out: any = Array.isArray(base) ? [...base] : { ...base }
    for (const k of Object.keys(patch)) {
        const pv = patch[k]
        const bv = (base as any)[k]
        if (isPlainObject(bv) && isPlainObject(pv)) out[k] = deepMerge(bv, pv)
        else if (pv !== undefined) out[k] = pv
    }
    return out
}

function resolveStyles(styles?: ChartStyles) {
    return deepMerge(DEFAULT_STYLES, styles)
}

/* ================= HELPERS ================= */

function clamp(n: number, a: number, b: number) {
    return Math.max(a, Math.min(b, n))
}
function toStr(v: any) {
    if (v === null || v === undefined) return '—'
    return String(v)
}
function getFontPx(font: string) {
    const m = /(\d+)px/.exec(font)
    return m ? Number(m[1]) : 12
}
function withAlpha(hex: string, opacity: number) {
    const h = hex.replace('#', '').trim()
    if (!(h.length === 3 || h.length === 6)) return hex
    const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h
    const r = parseInt(full.slice(0, 2), 16)
    const g = parseInt(full.slice(2, 4), 16)
    const b = parseInt(full.slice(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
function fitText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
    if (maxWidth <= 0) return ''
    if (ctx.measureText(text).width <= maxWidth) return text
    const ell = '…'
    let lo = 0
    let hi = text.length
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2)
        const s = text.slice(0, mid) + ell
        if (ctx.measureText(s).width <= maxWidth) lo = mid + 1
        else hi = mid
    }
    return text.slice(0, Math.max(0, lo - 1)) + ell
}

/* ================= HIT MAP ================= */

type Hit =
    | {
        kind: 'rect'
        x: number
        y: number
        w: number
        h: number
        title: string
        lines: string[]
        clickValue: any
        selectKey: string
    }
    | {
        kind: 'point'
        x: number
        y: number
        r: number
        title: string
        lines: string[]
        clickValue: any
        selectKey: string
    }
    | {
        kind: 'pie'
        cx: number
        cy: number
        innerR: number
        outerR: number
        a0: number
        a1: number
        title: string
        lines: string[]
        clickValue: any
        selectKey: string
    }

/* ================= SHELL ================= */

function ChartShell({
    legendVisible,
    legendPosition,
    legendItems,
    styles,
    plotRef,
    children,
}: {
    legendVisible: boolean
    legendPosition: LegendPosition
    legendItems: { label: string; color: string }[]
    styles: ReturnType<typeof resolveStyles>
    plotRef: React.RefObject<HTMLDivElement>
    children: React.ReactNode
}) {
    const L = styles.legend
    const hasLegend = legendVisible && legendPosition !== 'none'

    const grid = (() => {
        if (!hasLegend) {
            return {
                areas: `"plot"`,
                rows: '1fr',
                cols: '1fr',
            }
        }
        const maxPct = Math.round(L.maxPct * 100)
        if (legendPosition === 'top') return { areas: `"legend" "plot"`, rows: `minmax(0, ${maxPct}%) 1fr`, cols: '1fr' }
        if (legendPosition === 'bottom') return { areas: `"plot" "legend"`, rows: `1fr minmax(0, ${maxPct}%)`, cols: '1fr' }
        if (legendPosition === 'left') return { areas: `"legend plot"`, rows: '1fr', cols: `minmax(0, ${maxPct}%) 1fr` }
        if (legendPosition === 'right') return { areas: `"plot legend"`, rows: '1fr', cols: `1fr minmax(0, ${maxPct}%)` }
        return { areas: `"plot"`, rows: '1fr', cols: '1fr' }
    })()

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'grid',
                gridTemplateAreas: grid.areas,
                gridTemplateRows: grid.rows,
                gridTemplateColumns: grid.cols,
                minWidth: 0,
                minHeight: 0,
            }}
        >
            {hasLegend && (
                <div style={{ gridArea: 'legend', minWidth: 0, minHeight: 0, overflow: 'auto' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: L.gap, padding: L.padding, alignItems: 'center' }}>
                        {legendItems.map((it, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: L.itemGap }}>
                                <span
                                    style={{
                                        width: L.markerSize,
                                        height: L.markerSize,
                                        borderRadius: L.markerRadius,
                                        background: it.color,
                                        display: 'inline-block',
                                    }}
                                />
                                <span style={{ fontSize: L.fontSize, color: L.color }}>{it.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div
                ref={plotRef}
                style={{
                    gridArea: 'plot',
                    position: 'relative',
                    minWidth: 0,
                    minHeight: 0,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                }}
            >
                {children}
            </div>
        </div>
    )
}

/* ================= TOOLTIP POSITION (DIAGONAL) ================= */

function computeTooltipPos(args: {
    mouseX: number
    mouseY: number
    plotW: number
    plotH: number
    tooltipW: number
    tooltipH: number
    offset: number
}) {
    const { mouseX, mouseY, plotW, plotH, tooltipW, tooltipH, offset } = args

    // nearest corner
    const dTL = mouseX * mouseX + mouseY * mouseY
    const dTR = (plotW - mouseX) * (plotW - mouseX) + mouseY * mouseY
    const dBL = mouseX * mouseX + (plotH - mouseY) * (plotH - mouseY)
    const dBR = (plotW - mouseX) * (plotW - mouseX) + (plotH - mouseY) * (plotH - mouseY)

    const min = Math.min(dTL, dTR, dBL, dBR)

    let left = mouseX
    let top = mouseY

    // show toward opposite diagonal
    if (min === dTL) {
        left = mouseX + offset
        top = mouseY + offset
    } else if (min === dTR) {
        left = mouseX - offset - tooltipW
        top = mouseY + offset
    } else if (min === dBL) {
        left = mouseX + offset
        top = mouseY - offset - tooltipH
    } else {
        left = mouseX - offset - tooltipW
        top = mouseY - offset - tooltipH
    }

    // clamp inside plot
    left = clamp(left, 6, plotW - tooltipW - 6)
    top = clamp(top, 6, plotH - tooltipH - 6)

    return { left, top }
}

/* ================= COMMON PROPS ================= */

type CommonProps<T> = {
    data: T[]
    xKey: keyof T
    sortOrder?: SortOrder
    showTooltip?: boolean
    styles?: ChartStyles
    onItemClick?: (xValue: T[keyof T]) => void
}

type MultiYProps<T> =
    | { yKey: keyof T; series?: never }
    | { yKey?: never; series: SeriesDef<T>[] }

/* ================= BAR CHART ================= */

export type BarChartProps<T> = CommonProps<T> &
    MultiYProps<T> & {
        direction?: Direction
        showLegend?: boolean
        legendPosition?: LegendPosition
        enableSelection?: boolean
        valueBoost?: number
    }

export function BarChart<T>(props: BarChartProps<T>) {
    const {
        data,
        xKey,
        sortOrder = 'none',
        direction = 'left-to-right',
        showTooltip = false,
        styles: stylesInput,
        onItemClick,
        showLegend,
        legendPosition = 'top',
        enableSelection = true,
        valueBoost = 0,
    } = props

    const styles = resolveStyles(stylesInput)
    const pad = styles.padding
    const gp = styles.gap
    const palette = styles.palette
    const text = styles.text
    const barStyle = styles.bar

    const seriesList: SeriesDef<T>[] = ('series' in props && props.series?.length)
        ? props.series
        : [{ key: (props as any).yKey }]

    const legendVisible =
        typeof showLegend === 'boolean' ? showLegend : seriesList.length > 1

    const legendItems = seriesList.map((s, i) => ({
        label: s.label ?? String(s.key),
        color: s.color ?? palette[i % palette.length],
    }))

    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const plotRef = React.useRef<HTMLDivElement>(null)
    const hitRef = React.useRef<Hit[]>([])
    const [selectedKey, setSelectedKey] = React.useState<string | null>(null)

    const [tooltip, setTooltip] = React.useState({
        visible: false,
        x: 0,
        y: 0,
        title: '',
        lines: [] as string[],
    })

    const isLR = direction === 'left-to-right'
    const isRL = direction === 'right-to-left'
    const isTB = direction === 'top-to-bottom'
    const isBT = direction === 'bottom-to-top'

    // per your rule:
    // LTR/RL => scrollY, TB/BT => scrollX
    const scrollAxis = (isLR || isRL) ? 'y' : 'x'

    React.useEffect(() => {
        const canvas = canvasRef.current
        const plot = plotRef.current
        if (!canvas || !plot) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return
        ctx.font = text.font

        const rows = Array.isArray(data) ? data : []
        const sortedRows = [...rows].sort((a, b) => {
            if (sortOrder === 'none') return 0
            const sumA = seriesList.reduce((s, sr) => s + Number((a as any)[sr.key] ?? 0), 0)
            const sumB = seriesList.reduce((s, sr) => s + Number((b as any)[sr.key] ?? 0), 0)
            return sortOrder === 'asc' ? sumA - sumB : sumB - sumA
        })

        const maxScaled = (() => {
            const vals: number[] = []
            for (const r of sortedRows) {
                for (const sr of seriesList) vals.push(Number((r as any)[sr.key] ?? 0) + valueBoost)
            }
            return Math.max(0, ...vals)
        })()

        const fontPx = getFontPx(text.font)
        const totalThickness = barStyle.thickness
        const step = totalThickness + barStyle.gap

        const layoutAndDraw = () => {
            const vw = Math.floor(plot.clientWidth)
            const vh = Math.floor(plot.clientHeight)

            // content along category axis
            let contentW = vw
            let contentH = vh

            if (scrollAxis === 'y') {
                const needed = pad.top + pad.bottom + sortedRows.length * totalThickness + Math.max(0, sortedRows.length - 1) * barStyle.gap
                contentH = needed > vh ? Math.ceil(needed) : vh
            } else {
                const needed = pad.left + pad.right + sortedRows.length * totalThickness + Math.max(0, sortedRows.length - 1) * barStyle.gap
                contentW = needed > vw ? Math.ceil(needed) : vw
            }

            canvas.width = contentW * devicePixelRatio
            canvas.height = contentH * devicePixelRatio
            canvas.style.width = `${contentW}px`
            canvas.style.height = `${contentH}px`

            ctx.setTransform(1, 0, 0, 1, 0, 0)
            ctx.scale(devicePixelRatio, devicePixelRatio)

            draw(contentW, contentH)

            // enable scroll only if needed
            const needX = contentW > vw + 1
            const needY = contentH > vh + 1

            plot.style.overflowX = needX ? 'auto' : 'hidden'
            plot.style.overflowY = needY ? 'auto' : 'hidden'
        }

        const clear = (w: number, h: number) => {
            ctx.clearRect(0, 0, w, h)
            ctx.fillStyle = styles.backgroundColor
            ctx.fillRect(0, 0, w, h)
            ctx.font = text.font
            ctx.textBaseline = 'middle'
            hitRef.current = []
        }

        const draw = (w: number, h: number) => {
            clear(w, h)

            const seriesCount = Math.max(1, seriesList.length)

            // label width
            const labels = sortedRows.map(r => toStr((r as any)[xKey]))
            const rawLabelMaxW = Math.max(0, ...labels.map(t => ctx.measureText(t).width))
            const labelMaxW = text.maxLabelWidth ? Math.min(rawLabelMaxW, text.maxLabelWidth) : rawLabelMaxW

            // value width reserve
            const valueMaxW = (() => {
                const widths: number[] = []
                for (const r of sortedRows) {
                    for (const sr of seriesList) {
                        const raw = Number((r as any)[sr.key] ?? 0)
                        widths.push(ctx.measureText(raw.toLocaleString()).width)
                    }
                }
                return Math.max(0, ...widths)
            })()

            const seriesGap = barStyle.seriesGap
            const subThickness = (totalThickness - (seriesCount - 1) * seriesGap) / seriesCount

            // value axis available
            let baseX = 0
            let baseY = 0
            let available = 0
            const labelAreaH = fontPx * 2

            if (isLR) {
                baseX = pad.left + labelMaxW + gp.labelToMark
                available = w - pad.right - baseX - (gp.markToValue + valueMaxW)
            } else if (isRL) {
                baseX = w - pad.right - labelMaxW - gp.labelToMark
                available = baseX - pad.left - (gp.markToValue + valueMaxW)
            } else if (isTB) {
                baseY = pad.top + labelAreaH + gp.labelToMark
                available = h - pad.bottom - baseY - (gp.markToValue + fontPx)
            } else {
                baseY = h - pad.bottom - labelAreaH - gp.labelToMark
                available = baseY - pad.top - (gp.markToValue + fontPx)
            }
            available = Math.max(0, available)

            for (let i = 0; i < sortedRows.length; i++) {
                const r = sortedRows[i]
                const fullLabel = labels[i]
                const label = fitText(ctx, fullLabel, labelMaxW)

                if (isLR || isRL) {
                    const rowY = pad.top + i * step

                    // label
                    ctx.fillStyle = text.labelColor
                    if (isLR) {
                        ctx.textAlign = 'right'
                        ctx.fillText(label, pad.left + labelMaxW, rowY + totalThickness / 2)
                    } else {
                        ctx.textAlign = 'left'
                        ctx.fillText(label, w - pad.right - labelMaxW, rowY + totalThickness / 2)
                    }

                    // bars per series
                    for (let s = 0; s < seriesCount; s++) {
                        const sr = seriesList[s]
                        const raw = Number((r as any)[sr.key] ?? 0)
                        const scaled = raw + valueBoost
                        const len = maxScaled > 0 ? (scaled / maxScaled) * available : 0
                        const barW = Math.min(len, available)

                        const color = sr.color ?? palette[s % palette.length]
                        const subY = rowY + s * (subThickness + seriesGap)

                        const selectKey = `bar:${i}:${s}`
                        const isSelected = enableSelection && selectedKey === selectKey
                        const expand = isSelected ? styles.select.expand : 0

                        const bh = subThickness + expand
                        const by = subY - expand / 2
                        const bx = isLR ? baseX : (baseX - barW)

                        ctx.fillStyle = color
                        ctx.fillRect(bx, by, barW, bh)

                        if (isSelected) {
                            ctx.strokeStyle = styles.select.stroke
                            ctx.lineWidth = styles.select.lineWidth
                            ctx.strokeRect(bx, by, barW, bh)
                        }

                        // value
                        const valueText = raw.toLocaleString()
                        const tw = ctx.measureText(valueText).width

                        ctx.fillStyle = text.valueColor
                        ctx.textAlign = 'left'
                        const vx = isLR
                            ? (baseX + barW + gp.markToValue)
                            : (baseX - barW - gp.markToValue - tw)

                        ctx.fillText(valueText, vx, by + bh / 2)

                        hitRef.current.push({
                            kind: 'rect',
                            x: bx,
                            y: by,
                            w: barW,
                            h: bh,
                            title: fullLabel,
                            lines: [`${sr.label ?? String(sr.key)}: ${valueText}`],
                            clickValue: (r as any)[xKey],
                            selectKey,
                        })
                    }
                } else {
                    // TB/BT categories along X
                    const colX = pad.left + i * step
                    const labelTop = isTB ? pad.top : (h - pad.bottom - labelAreaH)
                    const altY = labelTop + (i % 2 === 0 ? fontPx * 0.7 : fontPx * 1.7)

                    const tw = ctx.measureText(label).width
                    const cx = colX + totalThickness / 2
                    const clampedX = clamp(cx, pad.left + tw / 2, w - pad.right - tw / 2)

                    ctx.fillStyle = text.labelColor
                    ctx.textAlign = 'center'
                    ctx.fillText(label, clampedX, altY)

                    for (let s = 0; s < seriesCount; s++) {
                        const sr = seriesList[s]
                        const raw = Number((r as any)[sr.key] ?? 0)
                        const scaled = raw + valueBoost
                        const len = maxScaled > 0 ? (scaled / maxScaled) * available : 0
                        const barH = Math.min(len, available)

                        const color = sr.color ?? palette[s % palette.length]
                        const subX = colX + s * (subThickness + seriesGap)

                        const selectKey = `bar:${i}:${s}`
                        const isSelected = enableSelection && selectedKey === selectKey
                        const expand = isSelected ? styles.select.expand : 0

                        const bw = subThickness + expand
                        const bx = subX - expand / 2
                        const by = isTB ? baseY : (baseY - barH)

                        ctx.fillStyle = color
                        ctx.fillRect(bx, by, bw, barH)

                        if (isSelected) {
                            ctx.strokeStyle = styles.select.stroke
                            ctx.lineWidth = styles.select.lineWidth
                            ctx.strokeRect(bx, by, bw, barH)
                        }

                        const valueText = raw.toLocaleString()
                        ctx.fillStyle = text.valueColor
                        ctx.textAlign = 'center'
                        const vx = bx + bw / 2
                        const vy = isTB
                            ? (baseY + barH + gp.markToValue + fontPx * 0.7)
                            : (baseY - barH - gp.markToValue - fontPx * 0.7)

                        ctx.fillText(valueText, vx, vy)

                        hitRef.current.push({
                            kind: 'rect',
                            x: bx,
                            y: by,
                            w: bw,
                            h: barH,
                            title: fullLabel,
                            lines: [`${sr.label ?? String(sr.key)}: ${valueText}`],
                            clickValue: (r as any)[xKey],
                            selectKey,
                        })
                    }
                }
            }
        }

        const findHit = (px: number, py: number): Hit | null => {
            const hits = hitRef.current
            for (let i = hits.length - 1; i >= 0; i--) {
                const h = hits[i]
                if (h.kind === 'rect') {
                    if (px >= h.x && px <= h.x + h.w && py >= h.y && py <= h.y + h.h) return h
                }
            }
            return null
        }

        const onMove = (e: MouseEvent) => {
            if (!showTooltip) return
            const plotEl = plotRef.current
            const canvasEl = canvasRef.current
            if (!plotEl || !canvasEl) return

            const canvasRect = canvasEl.getBoundingClientRect()
            const px = e.clientX - canvasRect.left
            const py = e.clientY - canvasRect.top
            const hit = findHit(px, py)

            if (!hit) {
                setTooltip(t => (t.visible ? { ...t, visible: false } : t))
                return
            }

            const plotRect = plotEl.getBoundingClientRect()
            const mx = e.clientX - plotRect.left
            const my = e.clientY - plotRect.top

            const t = styles.tooltip
            const estW = t.maxWidth
            const estH =
                t.paddingY * 2 +
                t.lineHeight * (1 + hit.lines.length) // title + lines

            const pos = computeTooltipPos({
                mouseX: mx,
                mouseY: my,
                plotW: plotEl.clientWidth,
                plotH: plotEl.clientHeight,
                tooltipW: estW,
                tooltipH: estH,
                offset: 12,
            })

            setTooltip({
                visible: true,
                x: pos.left,
                y: pos.top,
                title: hit.title,
                lines: hit.lines,
            })
        }

        const onLeave = () => {
            if (!showTooltip) return
            setTooltip(t => (t.visible ? { ...t, visible: false } : t))
        }

        const onClick = (e: MouseEvent) => {
            const canvasEl = canvasRef.current
            if (!canvasEl) return

            const rect = canvasEl.getBoundingClientRect()
            const px = e.clientX - rect.left
            const py = e.clientY - rect.top
            const hit = findHit(px, py)
            if (!hit) return

            if (enableSelection) {
                const willUnselect = selectedKey === hit.selectKey
                setSelectedKey(prev => (prev === hit.selectKey ? null : hit.selectKey))
                if (willUnselect) return // снять выбор -> ничего не возвращаем
            }

            onItemClick?.(hit.clickValue)
        }

        const ro = new ResizeObserver(() => layoutAndDraw())
        ro.observe(plot)

        canvas.addEventListener('mousemove', onMove)
        canvas.addEventListener('mouseleave', onLeave)
        canvas.addEventListener('click', onClick)

        layoutAndDraw()

        return () => {
            ro.disconnect()
            canvas.removeEventListener('mousemove', onMove)
            canvas.removeEventListener('mouseleave', onLeave)
            canvas.removeEventListener('click', onClick)
        }
    }, [
        data,
        xKey,
        seriesList,
        sortOrder,
        direction,
        showTooltip,
        stylesInput,
        selectedKey,
        enableSelection,
        valueBoost,
        onItemClick,
    ])

    return (
        <ChartShell
            legendVisible={legendVisible}
            legendPosition={legendPosition}
            legendItems={legendItems}
            styles={styles}
            plotRef={plotRef}
        >
            <canvas ref={canvasRef} />

            {showTooltip && tooltip.visible && (
                <div
                    style={{
                        position: 'absolute',
                        left: tooltip.x,
                        top: tooltip.y,
                        maxWidth: styles.tooltip.maxWidth,
                        background: styles.tooltip.bg,
                        color: styles.tooltip.color,
                        borderRadius: styles.tooltip.borderRadius,
                        padding: `${styles.tooltip.paddingY}px ${styles.tooltip.paddingX}px`,
                        fontSize: styles.legend.fontSize,
                        boxShadow: styles.tooltip.shadow,
                        pointerEvents: 'none',
                        zIndex: 10,
                    }}
                >
                    <div style={{ fontWeight: styles.tooltip.titleWeight, marginBottom: 6 }}>
                        {tooltip.title}
                    </div>
                    {tooltip.lines.map((l, i) => (
                        <div key={i} style={{ lineHeight: `${styles.tooltip.lineHeight}px` }}>
                            {l}
                        </div>
                    ))}
                </div>
            )}
        </ChartShell>
    )
}

/* ================= LINE CHART ================= */

export type LineChartProps<T> = CommonProps<T> &
    MultiYProps<T> & {
        direction?: Direction
        showLegend?: boolean
        legendPosition?: LegendPosition
        valueBoost?: number
        smooth?: boolean
        area?: { show?: boolean; color?: string; opacity?: number }
    }

export function LineChart<T>(props: LineChartProps<T>) {
    const {
        data,
        xKey,
        sortOrder = 'none',
        direction = 'left-to-right',
        showTooltip = false,
        styles: stylesInput,
        onItemClick,
        showLegend,
        legendPosition = 'top',
        valueBoost = 0,
        smooth = false,
        area = { show: false, opacity: 0.18 },
    } = props

    const styles = resolveStyles(stylesInput)
    const pad = styles.padding
    const gp = styles.gap
    const palette = styles.palette
    const text = styles.text
    const lineStyle = styles.line

    const seriesList: SeriesDef<T>[] = ('series' in props && props.series?.length)
        ? props.series
        : [{ key: (props as any).yKey }]

    const legendVisible =
        typeof showLegend === 'boolean' ? showLegend : seriesList.length > 1

    const legendItems = seriesList.map((s, i) => ({
        label: s.label ?? String(s.key),
        color: s.color ?? palette[i % palette.length],
    }))

    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const plotRef = React.useRef<HTMLDivElement>(null)
    const hitRef = React.useRef<Hit[]>([])

    const [tooltip, setTooltip] = React.useState({
        visible: false,
        x: 0,
        y: 0,
        title: '',
        lines: [] as string[],
    })

    const isLR = direction === 'left-to-right'
    const isRL = direction === 'right-to-left'
    const isTB = direction === 'top-to-bottom'
    const isBT = direction === 'bottom-to-top'
    const scrollAxis = (isLR || isRL) ? 'y' : 'x'

    React.useEffect(() => {
        const canvas = canvasRef.current
        const plot = plotRef.current
        if (!canvas || !plot) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return
        ctx.font = text.font

        const rows = Array.isArray(data) ? data : []
        const sortedRows = [...rows].sort((a, b) => {
            if (sortOrder === 'none') return 0
            const sumA = seriesList.reduce((s, sr) => s + Number((a as any)[sr.key] ?? 0), 0)
            const sumB = seriesList.reduce((s, sr) => s + Number((b as any)[sr.key] ?? 0), 0)
            return sortOrder === 'asc' ? sumA - sumB : sumB - sumA
        })

        const maxScaled = (() => {
            const vals: number[] = []
            for (const r of sortedRows) {
                for (const sr of seriesList) vals.push(Number((r as any)[sr.key] ?? 0) + valueBoost)
            }
            return Math.max(0, ...vals)
        })()

        const fontPx = getFontPx(text.font)

        const layoutAndDraw = () => {
            const vw = Math.floor(plot.clientWidth)
            const vh = Math.floor(plot.clientHeight)

            let contentW = vw
            let contentH = vh

            const n = sortedRows.length
            if (n > 1) {
                if (scrollAxis === 'y') {
                    const needed = pad.top + pad.bottom + (n - 1) * lineStyle.step
                    contentH = needed > vh ? Math.ceil(needed) : vh
                } else {
                    const needed = pad.left + pad.right + (n - 1) * lineStyle.step
                    contentW = needed > vw ? Math.ceil(needed) : vw
                }
            }

            canvas.width = contentW * devicePixelRatio
            canvas.height = contentH * devicePixelRatio
            canvas.style.width = `${contentW}px`
            canvas.style.height = `${contentH}px`

            ctx.setTransform(1, 0, 0, 1, 0, 0)
            ctx.scale(devicePixelRatio, devicePixelRatio)

            draw(contentW, contentH, vw, vh)

            const needX = contentW > vw + 1
            const needY = contentH > vh + 1
            plot.style.overflowX = needX ? 'auto' : 'hidden'
            plot.style.overflowY = needY ? 'auto' : 'hidden'
        }

        const clear = (w: number, h: number) => {
            ctx.clearRect(0, 0, w, h)
            ctx.fillStyle = styles.backgroundColor
            ctx.fillRect(0, 0, w, h)
            ctx.font = text.font
            ctx.textBaseline = 'middle'
            hitRef.current = []
        }

        const draw = (w: number, h: number, vw: number, vh: number) => {
            clear(w, h)

            const n = sortedRows.length
            const labels = sortedRows.map(r => toStr((r as any)[xKey]))
            const rawLabelMaxW = Math.max(0, ...labels.map(t => ctx.measureText(t).width))
            const labelMaxW = text.maxLabelWidth ? Math.min(rawLabelMaxW, text.maxLabelWidth) : rawLabelMaxW

            // category step: if no overflow -> fill space
            const overflowNeeded = scrollAxis === 'y' ? (h > vh + 1) : (w > vw + 1)
            const catLen = scrollAxis === 'y' ? (h - pad.top - pad.bottom) : (w - pad.left - pad.right)
            const step = (n <= 1) ? 0 : (overflowNeeded ? lineStyle.step : (catLen / (n - 1)))

            const labelAreaH = fontPx * 2

            // value axis base & available
            let baseX = 0
            let baseY = 0
            let available = 0

            if (isLR) {
                baseX = pad.left + labelMaxW + gp.labelToMark
                available = w - pad.right - baseX
            } else if (isRL) {
                baseX = w - pad.right - labelMaxW - gp.labelToMark
                available = baseX - pad.left
            } else if (isTB) {
                baseY = pad.top + labelAreaH + gp.labelToMark
                available = h - pad.bottom - baseY
            } else {
                baseY = h - pad.bottom - labelAreaH - gp.labelToMark
                available = baseY - pad.top
            }
            available = Math.max(0, available)

            // draw labels (alternate for TB/BT)
            for (let i = 0; i < n; i++) {
                const full = labels[i]
                const label = fitText(ctx, full, labelMaxW)

                if (isLR || isRL) {
                    const y = pad.top + i * step
                    ctx.fillStyle = text.labelColor
                    ctx.textAlign = isLR ? 'right' : 'left'
                    const x = isLR ? (pad.left + labelMaxW) : (w - pad.right - labelMaxW)
                    ctx.fillText(label, x, y)
                } else {
                    const x = pad.left + i * step
                    const labelTop = isTB ? pad.top : (h - pad.bottom - labelAreaH)
                    const altY = labelTop + (i % 2 === 0 ? fontPx * 0.7 : fontPx * 1.7)

                    const tw = ctx.measureText(label).width
                    const clampedX = clamp(x, pad.left + tw / 2, w - pad.right - tw / 2)

                    ctx.fillStyle = text.labelColor
                    ctx.textAlign = 'center'
                    ctx.fillText(label, clampedX, altY)
                }
            }

            // draw series
            for (let s = 0; s < seriesList.length; s++) {
                const sr = seriesList[s]
                const color = sr.color ?? palette[s % palette.length]

                const points = sortedRows.map((r, i) => {
                    const raw = Number((r as any)[sr.key] ?? 0)
                    const scaled = raw + valueBoost
                    const t = maxScaled > 0 ? (scaled / maxScaled) : 0

                    if (isLR || isRL) {
                        const y = pad.top + i * step
                        const dx = t * available
                        const x = isLR ? (baseX + dx) : (baseX - dx)
                        return { x, y, raw, label: labels[i] }
                    } else {
                        const x = pad.left + i * step
                        const dy = t * available
                        const y = isTB ? (baseY + dy) : (baseY - dy)
                        return { x, y, raw, label: labels[i] }
                    }
                })

                // area fill
                if (area?.show) {
                    const opacity = area.opacity ?? 0.18
                    const fill = area.color ? area.color : withAlpha(color, opacity)

                    ctx.beginPath()
                    if (points.length) {
                        ctx.moveTo(points[0].x, points[0].y)
                        if (smooth) smoothPath(ctx, points)
                        else for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y)

                        const first = points[0]
                        const last = points[points.length - 1]
                        if (isLR || isRL) {
                            ctx.lineTo(baseX, last.y)
                            ctx.lineTo(baseX, first.y)
                        } else {
                            ctx.lineTo(last.x, baseY)
                            ctx.lineTo(first.x, baseY)
                        }
                    }
                    ctx.closePath()
                    ctx.fillStyle = fill
                    ctx.fill()
                }

                // line
                ctx.strokeStyle = color
                ctx.lineWidth = lineStyle.width
                ctx.beginPath()
                if (points.length) {
                    ctx.moveTo(points[0].x, points[0].y)
                    if (smooth) smoothPath(ctx, points)
                    else for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y)
                }
                ctx.stroke()

                // points + hits
                const pr = lineStyle.pointRadius
                for (let i = 0; i < points.length; i++) {
                    const p = points[i]
                    ctx.beginPath()
                    ctx.arc(p.x, p.y, pr, 0, Math.PI * 2)
                    ctx.fillStyle = color
                    ctx.fill()

                    hitRef.current.push({
                        kind: 'point',
                        x: p.x,
                        y: p.y,
                        r: pr + 6,
                        title: p.label,
                        lines: [`${sr.label ?? String(sr.key)}: ${p.raw.toLocaleString()}`],
                        clickValue: (sortedRows[i] as any)[xKey],
                        selectKey: `line:${i}:${s}`,
                    })
                }
            }

            function smoothPath(ctx2: CanvasRenderingContext2D, pts: { x: number; y: number }[]) {
                for (let i = 0; i < pts.length - 1; i++) {
                    const p0 = pts[i - 1] ?? pts[i]
                    const p1 = pts[i]
                    const p2 = pts[i + 1]
                    const p3 = pts[i + 2] ?? p2

                    const cp1x = p1.x + (p2.x - p0.x) / 6
                    const cp1y = p1.y + (p2.y - p0.y) / 6
                    const cp2x = p2.x - (p3.x - p1.x) / 6
                    const cp2y = p2.y - (p3.y - p1.y) / 6

                    ctx2.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y)
                }
            }
        }

        const findHit = (px: number, py: number): Hit | null => {
            const hits = hitRef.current
            for (let i = hits.length - 1; i >= 0; i--) {
                const h = hits[i]
                if (h.kind === 'point') {
                    if (Math.hypot(px - h.x, py - h.y) <= h.r) return h
                }
            }
            return null
        }

        const onMove = (e: MouseEvent) => {
            if (!showTooltip) return
            const plotEl = plotRef.current
            const canvasEl = canvasRef.current
            if (!plotEl || !canvasEl) return

            const canvasRect = canvasEl.getBoundingClientRect()
            const px = e.clientX - canvasRect.left
            const py = e.clientY - canvasRect.top
            const hit = findHit(px, py)

            if (!hit) {
                setTooltip(t => (t.visible ? { ...t, visible: false } : t))
                return
            }

            const plotRect = plotEl.getBoundingClientRect()
            const mx = e.clientX - plotRect.left
            const my = e.clientY - plotRect.top

            const t = styles.tooltip
            const estW = t.maxWidth
            const estH = t.paddingY * 2 + t.lineHeight * (1 + hit.lines.length)

            const pos = computeTooltipPos({
                mouseX: mx,
                mouseY: my,
                plotW: plotEl.clientWidth,
                plotH: plotEl.clientHeight,
                tooltipW: estW,
                tooltipH: estH,
                offset: 12,
            })

            setTooltip({ visible: true, x: pos.left, y: pos.top, title: hit.title, lines: hit.lines })
        }

        const onLeave = () => {
            if (!showTooltip) return
            setTooltip(t => (t.visible ? { ...t, visible: false } : t))
        }

        const onClick = (e: MouseEvent) => {
            const canvasEl = canvasRef.current
            if (!canvasEl) return
            const rect = canvasEl.getBoundingClientRect()
            const px = e.clientX - rect.left
            const py = e.clientY - rect.top
            const hit = findHit(px, py)
            if (!hit) return
            onItemClick?.(hit.clickValue)
        }

        const ro = new ResizeObserver(() => layoutAndDraw())
        ro.observe(plot)

        canvas.addEventListener('mousemove', onMove)
        canvas.addEventListener('mouseleave', onLeave)
        canvas.addEventListener('click', onClick)

        layoutAndDraw()

        return () => {
            ro.disconnect()
            canvas.removeEventListener('mousemove', onMove)
            canvas.removeEventListener('mouseleave', onLeave)
            canvas.removeEventListener('click', onClick)
        }
    }, [data, xKey, seriesList, sortOrder, direction, showTooltip, stylesInput, valueBoost, smooth, area?.show, area?.color, area?.opacity, onItemClick])

    return (
        <ChartShell
            legendVisible={legendVisible}
            legendPosition={legendPosition}
            legendItems={legendItems}
            styles={styles}
            plotRef={plotRef}
        >
            <canvas ref={canvasRef} />

            {showTooltip && tooltip.visible && (
                <div
                    style={{
                        position: 'absolute',
                        left: tooltip.x,
                        top: tooltip.y,
                        maxWidth: styles.tooltip.maxWidth,
                        background: styles.tooltip.bg,
                        color: styles.tooltip.color,
                        borderRadius: styles.tooltip.borderRadius,
                        padding: `${styles.tooltip.paddingY}px ${styles.tooltip.paddingX}px`,
                        fontSize: styles.legend.fontSize,
                        boxShadow: styles.tooltip.shadow,
                        pointerEvents: 'none',
                        zIndex: 10,
                    }}
                >
                    <div style={{ fontWeight: styles.tooltip.titleWeight, marginBottom: 6 }}>
                        {tooltip.title}
                    </div>
                    {tooltip.lines.map((l, i) => (
                        <div key={i} style={{ lineHeight: `${styles.tooltip.lineHeight}px` }}>
                            {l}
                        </div>
                    ))}
                </div>
            )}
        </ChartShell>
    )
}

/* ================= PIE CHART ================= */

export type PieChartProps<T> = CommonProps<T> &
    MultiYProps<T> & {
        showLegend?: boolean
        legendPosition?: LegendPosition
        enableSelection?: boolean
        outerRadiusPct?: number
        innerRadiusPct?: number
        startAngleDeg?: number
    }

export function PieChart<T>(props: PieChartProps<T>) {
    const {
        data,
        xKey,
        sortOrder = 'none',
        showTooltip = false,
        styles: stylesInput,
        onItemClick,
        showLegend,
        legendPosition = 'right',
        enableSelection = true,
        outerRadiusPct,
        innerRadiusPct,
        startAngleDeg,
    } = props

    const styles = resolveStyles(stylesInput)
    const palette = styles.palette
    const text = styles.text

    const seriesList: SeriesDef<T>[] = ('series' in props && props.series?.length)
        ? props.series
        : [{ key: (props as any).yKey }]

    const legendVisible =
        typeof showLegend === 'boolean' ? showLegend : (legendPosition !== 'none')

    const legendItems = React.useMemo(() => {
        if (!legendVisible || legendPosition === 'none') return []
        if (seriesList.length > 1) {
            return seriesList.map((s, i) => ({
                label: s.label ?? String(s.key),
                color: s.color ?? palette[i % palette.length],
            }))
        }
        return (Array.isArray(data) ? data : []).map((d, i) => ({
            label: toStr((d as any)[xKey]),
            color: palette[i % palette.length],
        }))
    }, [legendVisible, legendPosition, seriesList, data, xKey, palette])

    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const plotRef = React.useRef<HTMLDivElement>(null)
    const hitRef = React.useRef<Hit[]>([])
    const [selectedKey, setSelectedKey] = React.useState<string | null>(null)

    const [tooltip, setTooltip] = React.useState({
        visible: false,
        x: 0,
        y: 0,
        title: '',
        lines: [] as string[],
    })

    React.useEffect(() => {
        const canvas = canvasRef.current
        const plot = plotRef.current
        if (!canvas || !plot) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return
        ctx.font = text.font

        const rows = Array.isArray(data) ? data : []
        const sortedRows = [...rows].sort((a, b) => {
            if (sortOrder === 'none') return 0
            const av = seriesList.reduce((s, sr) => s + Number((a as any)[sr.key] ?? 0), 0)
            const bv = seriesList.reduce((s, sr) => s + Number((b as any)[sr.key] ?? 0), 0)
            return sortOrder === 'asc' ? av - bv : bv - av
        })

        const pie = {
            outer: outerRadiusPct ?? styles.pie.outerRadiusPct,
            inner: innerRadiusPct ?? styles.pie.innerRadiusPct,
            start: startAngleDeg ?? styles.pie.startAngleDeg,
        }

        const layoutAndDraw = () => {
            const vw = Math.floor(plot.clientWidth)
            const vh = Math.floor(plot.clientHeight)

            // no scroll
            plot.style.overflowX = 'hidden'
            plot.style.overflowY = 'hidden'

            canvas.width = vw * devicePixelRatio
            canvas.height = vh * devicePixelRatio
            canvas.style.width = `${vw}px`
            canvas.style.height = `${vh}px`

            ctx.setTransform(1, 0, 0, 1, 0, 0)
            ctx.scale(devicePixelRatio, devicePixelRatio)

            draw(vw, vh)
        }

        const clear = (w: number, h: number) => {
            ctx.clearRect(0, 0, w, h)
            ctx.fillStyle = styles.backgroundColor
            ctx.fillRect(0, 0, w, h)
            ctx.font = text.font
            ctx.textBaseline = 'middle'
            hitRef.current = []
        }

        const draw = (w: number, h: number) => {
            clear(w, h)

            const cx = w / 2
            const cy = h / 2
            const outerR = (Math.min(w, h) / 2) * clamp(pie.outer, 0, 100) / 100
            const innerR = outerR * clamp(pie.inner, 0, 100) / 100
            const start0 = (pie.start * Math.PI) / 180

            const slices = (() => {
                if (seriesList.length > 1) {
                    return seriesList.map((sr, i) => {
                        const sum = sortedRows.reduce((s, r) => s + Number((r as any)[sr.key] ?? 0), 0)
                        return {
                            label: sr.label ?? String(sr.key),
                            value: sum,
                            color: sr.color ?? palette[i % palette.length],
                            clickValue: sr.key,
                            selectKey: `pie:s:${i}`,
                        }
                    })
                }
                const sr = seriesList[0]
                return sortedRows.map((r, i) => ({
                    label: toStr((r as any)[xKey]),
                    value: Number((r as any)[sr.key] ?? 0),
                    color: palette[i % palette.length],
                    clickValue: (r as any)[xKey],
                    selectKey: `pie:i:${i}`,
                }))
            })()

            const total = slices.reduce((s, it) => s + it.value, 0)
            if (total <= 0) {
                ctx.fillStyle = text.labelColor
                ctx.textAlign = 'center'
                ctx.fillText('No data', cx, cy)
                return
            }

            let a = start0

            for (let i = 0; i < slices.length; i++) {
                const sl = slices[i]
                const da = (sl.value / total) * Math.PI * 2
                const a0 = a
                const a1 = a + da

                const isSelected = enableSelection && selectedKey === sl.selectKey
                const rOut = outerR + (isSelected ? styles.select.pieExpand : 0)

                ctx.beginPath()
                ctx.arc(cx, cy, rOut, a0, a1)
                if (innerR > 0) ctx.arc(cx, cy, innerR, a1, a0, true)
                else ctx.lineTo(cx, cy)
                ctx.closePath()

                ctx.fillStyle = sl.color
                ctx.fill()

                if (isSelected) {
                    ctx.strokeStyle = styles.select.stroke
                    ctx.lineWidth = styles.select.lineWidth
                    ctx.stroke()
                }

                hitRef.current.push({
                    kind: 'pie',
                    cx,
                    cy,
                    innerR,
                    outerR: rOut,
                    a0,
                    a1,
                    title: sl.label,
                    lines: [sl.value.toLocaleString()],
                    clickValue: (seriesList.length > 1 ? sl.label : sl.clickValue),
                    selectKey: sl.selectKey,
                })

                a = a1
            }
        }

        const findHit = (px: number, py: number): Hit | null => {
            const hits = hitRef.current
            for (let i = hits.length - 1; i >= 0; i--) {
                const h = hits[i]
                if (h.kind !== 'pie') continue

                const dx = px - h.cx
                const dy = py - h.cy
                const rr = Math.hypot(dx, dy)
                if (rr < h.innerR || rr > h.outerR) continue

                let ang = Math.atan2(dy, dx)
                if (ang < 0) ang += Math.PI * 2

                let b0 = h.a0 % (Math.PI * 2)
                let b1 = h.a1 % (Math.PI * 2)
                if (b0 < 0) b0 += Math.PI * 2
                if (b1 < 0) b1 += Math.PI * 2

                if (b0 <= b1) {
                    if (ang >= b0 && ang <= b1) return h
                } else {
                    if (ang >= b0 || ang <= b1) return h
                }
            }
            return null
        }

        const onMove = (e: MouseEvent) => {
            if (!showTooltip) return
            const plotEl = plotRef.current
            const canvasEl = canvasRef.current
            if (!plotEl || !canvasEl) return

            const canvasRect = canvasEl.getBoundingClientRect()
            const px = e.clientX - canvasRect.left
            const py = e.clientY - canvasRect.top
            const hit = findHit(px, py)

            if (!hit) {
                setTooltip(t => (t.visible ? { ...t, visible: false } : t))
                return
            }

            const plotRect = plotEl.getBoundingClientRect()
            const mx = e.clientX - plotRect.left
            const my = e.clientY - plotRect.top

            const t = styles.tooltip
            const estW = t.maxWidth
            const estH = t.paddingY * 2 + t.lineHeight * (1 + hit.lines.length)

            const pos = computeTooltipPos({
                mouseX: mx,
                mouseY: my,
                plotW: plotEl.clientWidth,
                plotH: plotEl.clientHeight,
                tooltipW: estW,
                tooltipH: estH,
                offset: 12,
            })

            setTooltip({ visible: true, x: pos.left, y: pos.top, title: hit.title, lines: hit.lines })
        }

        const onLeave = () => {
            if (!showTooltip) return
            setTooltip(t => (t.visible ? { ...t, visible: false } : t))
        }

        const onClick = (e: MouseEvent) => {
            const canvasEl = canvasRef.current
            if (!canvasEl) return

            const rect = canvasEl.getBoundingClientRect()
            const px = e.clientX - rect.left
            const py = e.clientY - rect.top
            const hit = findHit(px, py)
            if (!hit) return

            if (enableSelection) {
                const willUnselect = selectedKey === hit.selectKey
                setSelectedKey(prev => (prev === hit.selectKey ? null : hit.selectKey))
                if (willUnselect) return
            }

            onItemClick?.(hit.clickValue)
        }

        const ro = new ResizeObserver(() => layoutAndDraw())
        ro.observe(plot)

        canvas.addEventListener('mousemove', onMove)
        canvas.addEventListener('mouseleave', onLeave)
        canvas.addEventListener('click', onClick)

        layoutAndDraw()

        return () => {
            ro.disconnect()
            canvas.removeEventListener('mousemove', onMove)
            canvas.removeEventListener('mouseleave', onLeave)
            canvas.removeEventListener('click', onClick)
        }
    }, [data, xKey, seriesList, sortOrder, showTooltip, stylesInput, selectedKey, enableSelection, outerRadiusPct, innerRadiusPct, startAngleDeg, onItemClick])

    return (
        <ChartShell
            legendVisible={legendVisible}
            legendPosition={legendPosition}
            legendItems={legendItems}
            styles={styles}
            plotRef={plotRef}
        >
            <canvas ref={canvasRef} />

            {showTooltip && tooltip.visible && (
                <div
                    style={{
                        position: 'absolute',
                        left: tooltip.x,
                        top: tooltip.y,
                        maxWidth: styles.tooltip.maxWidth,
                        background: styles.tooltip.bg,
                        color: styles.tooltip.color,
                        borderRadius: styles.tooltip.borderRadius,
                        padding: `${styles.tooltip.paddingY}px ${styles.tooltip.paddingX}px`,
                        fontSize: styles.legend.fontSize,
                        boxShadow: styles.tooltip.shadow,
                        pointerEvents: 'none',
                        zIndex: 10,
                    }}
                >
                    <div style={{ fontWeight: styles.tooltip.titleWeight, marginBottom: 6 }}>
                        {tooltip.title}
                    </div>
                    {tooltip.lines.map((l, i) => (
                        <div key={i} style={{ lineHeight: `${styles.tooltip.lineHeight}px` }}>
                            {l}
                        </div>
                    ))}
                </div>
            )}
        </ChartShell>
    )
}

/* ================= WRAPPER CHART (TYPE HINTS) ================= */

export type ChartProps<T> =
    | ({ type: 'bar' } & BarChartProps<T>)
    | ({ type: 'line' } & LineChartProps<T>)
    | ({ type: 'pie' } & PieChartProps<T>)

export function Chart<T>(props: ChartProps<T>) {
    if (props.type === 'bar') return <BarChart {...(props as any)} />
    if (props.type === 'line') return <LineChart {...(props as any)} />
    return <PieChart {...(props as any)} />
}
