import { React } from 'jimu-core'
import type { PieChartProps } from './publicTypes'
import type { Hit, SeriesDef } from './types'
import { resolveStyles } from './styles'
import { clamp, computeTooltipPos, toStr } from './utils'

type Slice = {
    label: string
    value: number
    color: string
    clickValue: any
    selectKey: string
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
    const pad = styles.padding

    const seriesInput = (props as any).series as SeriesDef<T>[] | undefined
    const yKeySingle = (props as any).yKey as keyof T | undefined

    const seriesList = React.useMemo<SeriesDef<T>[]>(() => {
        if (Array.isArray(seriesInput) && seriesInput.length) return seriesInput
        return [{ key: yKeySingle as keyof T }]
    }, [seriesInput, yKeySingle])

    const legendVisible =
        typeof showLegend === 'boolean' ? showLegend : (legendPosition !== 'none')

    const rows = React.useMemo(() => (Array.isArray(data) ? data : []), [data])

    // сортируем по сумме (как раньше), но теперь это будет влиять и на легенду
    const sortedRows = React.useMemo(() => {
        const arr = [...rows]
        arr.sort((a, b) => {
            if (sortOrder === 'none') return 0
            const av = seriesList.reduce((s, sr) => s + Number((a as any)[sr.key] ?? 0), 0)
            const bv = seriesList.reduce((s, sr) => s + Number((b as any)[sr.key] ?? 0), 0)
            return sortOrder === 'asc' ? av - bv : bv - av
        })
        return arr
    }, [rows, sortOrder, seriesList])

    // ЕДИНЫЙ источник правды: и для рисования, и для легенды
    const slices = React.useMemo<Slice[]>(() => {
        // если несколько Y -> делаем “pie по сериям”
        if (seriesList.length > 1) {
            let arr: Slice[] = seriesList.map((sr, i) => {
                const sum = sortedRows.reduce((s, r) => s + Number((r as any)[sr.key] ?? 0), 0)
                return {
                    label: sr.label ?? String(sr.key),
                    value: sum,
                    color: sr.color ?? palette[i % palette.length],
                    clickValue: sr.key, // вернём key серии
                    selectKey: `pie:s:${i}`,
                }
            })

            if (sortOrder !== 'none') {
                arr = [...arr].sort((a, b) => (sortOrder === 'asc' ? a.value - b.value : b.value - a.value))
            }

            return arr
        }

        // один Y -> pie по элементам
        const sr = seriesList[0]
        return sortedRows.map((r, i) => ({
            label: toStr((r as any)[xKey]),
            value: Number((r as any)[sr.key] ?? 0),
            color: palette[i % palette.length],
            clickValue: (r as any)[xKey],
            selectKey: `pie:i:${i}`,
        }))
    }, [seriesList, sortedRows, palette, xKey, sortOrder])

    const legendItems = React.useMemo(() => {
        if (!legendVisible || legendPosition === 'none') return []
        return slices.map(s => ({ label: s.label, color: s.color, value: s.value }))
    }, [legendVisible, legendPosition, slices])

    const outerRef = React.useRef<HTMLDivElement>(null)
    const plotRef = React.useRef<HTMLDivElement>(null)
    const legendRef = React.useRef<HTMLDivElement>(null)
    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    const hitRef = React.useRef<Hit[]>([])
    const [selectedKey, setSelectedKey] = React.useState<string | null>(null)

    const [tooltip, setTooltip] = React.useState({
        visible: false,
        x: 0,
        y: 0,
        title: '',
        lines: [] as string[],
    })

    const [legendCols, setLegendCols] = React.useState(1)

    React.useEffect(() => {
        const outer = outerRef.current
        const plot = plotRef.current
        const legend = legendRef.current
        const canvas = canvasRef.current
        if (!outer || !plot || !canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return
        ctx.font = text.font

        const pie = {
            outer: outerRadiusPct ?? styles.pie.outerRadiusPct,
            inner: innerRadiusPct ?? styles.pie.innerRadiusPct,
            start: startAngleDeg ?? styles.pie.startAngleDeg,
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

            const iw = Math.max(0, w - pad.left - pad.right)
            const ih = Math.max(0, h - pad.top - pad.bottom)
            const ox = pad.left
            const oy = pad.top

            const cx = ox + iw / 2
            const cy = oy + ih / 2

            const outerR = (Math.min(iw, ih) / 2) * clamp(pie.outer, 0, 100) / 100
            const innerR = outerR * clamp(pie.inner, 0, 100) / 100
            const start0 = (pie.start * Math.PI) / 180

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
                    clickValue: sl.clickValue,
                    selectKey: sl.selectKey,
                })

                a = a1
            }
        }

        const layoutAndDraw = () => {
            const W = Math.floor(outer.clientWidth)
            const H = Math.floor(outer.clientHeight)

            outer.style.background = styles.backgroundColor

            const hasLegend = legendVisible && legendPosition !== 'none' && legendItems.length > 0
            const maxPct = styles.legend.maxPct

            let legendX = 0, legendY = 0, legendW = 0, legendH = 0
            let plotX = 0, plotY = 0, plotW = W, plotH = H

            if (hasLegend && legend) {
                if (legendPosition === 'left' || legendPosition === 'right') {
                    legendW = Math.max(140, Math.floor(W * maxPct))
                    legendH = H
                    legendX = legendPosition === 'left' ? 0 : (W - legendW)
                    legendY = 0

                    plotW = W - legendW
                    plotH = H
                    plotX = legendPosition === 'left' ? legendW : 0
                    plotY = 0
                } else {
                    legendH = Math.max(70, Math.floor(H * maxPct))
                    legendW = W
                    legendX = 0
                    legendY = legendPosition === 'top' ? 0 : (H - legendH)

                    plotW = W
                    plotH = H - legendH
                    plotX = 0
                    plotY = legendPosition === 'top' ? legendH : 0
                }

                legend.style.display = 'block'
                legend.style.position = 'absolute'
                legend.style.left = `${legendX}px`
                legend.style.top = `${legendY}px`
                legend.style.width = `${legendW}px`
                legend.style.height = `${legendH}px`
                legend.style.overflowY = 'auto'
                legend.style.overflowX = 'hidden'
                legend.style.background = styles.backgroundColor

                if (legendPosition === 'top' || legendPosition === 'bottom') {
                    const innerW = Math.max(0, legendW - styles.legend.padding * 2)
                    const minCol = Math.max(80, styles.legend.columnMinWidth)
                    const cols = Math.max(1, Math.floor(innerW / minCol))
                    setLegendCols(prev => (prev === cols ? prev : cols))
                } else {
                    setLegendCols(prev => (prev === 1 ? prev : 1))
                }
            } else {
                if (legend) legend.style.display = 'none'
                setLegendCols(prev => (prev === 1 ? prev : 1))
            }

            plot.style.position = 'absolute'
            plot.style.left = `${plotX}px`
            plot.style.top = `${plotY}px`
            plot.style.width = `${plotW}px`
            plot.style.height = `${plotH}px`
            plot.style.overflow = 'hidden'
            plot.style.background = styles.backgroundColor

            canvas.width = plotW * devicePixelRatio
            canvas.height = plotH * devicePixelRatio
            canvas.style.width = `${plotW}px`
            canvas.style.height = `${plotH}px`

            ctx.setTransform(1, 0, 0, 1, 0, 0)
            ctx.scale(devicePixelRatio, devicePixelRatio)

            draw(plotW, plotH)
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
        ro.observe(outer)

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
        legendVisible,
        legendPosition,
        legendItems.length,
        slices,
        selectedKey,
        enableSelection,
        outerRadiusPct,
        innerRadiusPct,
        startAngleDeg,
        showTooltip,
        stylesInput,
        onItemClick,
        pad.left,
        pad.right,
        pad.top,
        pad.bottom,
    ])

    const isTopBottom = legendPosition === 'top' || legendPosition === 'bottom'
    const cols = (!legendVisible || legendPosition === 'none') ? 0 : (isTopBottom ? legendCols : 1)

    const columns = React.useMemo(() => {
        if (cols <= 1) return [legendItems]
        const arr: typeof legendItems[] = Array.from({ length: cols }, () => [])
        for (let i = 0; i < legendItems.length; i++) arr[i % cols].push(legendItems[i])
        return arr
    }, [legendItems, cols])

    return (
        <div
            ref={outerRef}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                background: styles.backgroundColor,
                overflow: 'hidden',
            }}
        >
            {legendVisible && legendPosition !== 'none' && legendItems.length > 0 && (
                <div
                    ref={legendRef}
                    style={{
                        boxSizing: 'border-box',
                        padding: styles.legend.padding,
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        background: styles.backgroundColor,
                    }}
                >
                    {/* LEFT/RIGHT: строго одна колонка + скролл */}
                    {!isTopBottom && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: styles.legend.itemGap }}>
                            {legendItems.map((it, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: styles.legend.itemGap,
                                        minWidth: 0,
                                    }}
                                >
                                    <span
                                        style={{
                                            width: styles.legend.markerSize,
                                            height: styles.legend.markerSize,
                                            borderRadius: styles.legend.markerRadius,
                                            background: it.color,
                                            display: 'inline-block',
                                            flex: '0 0 auto',
                                        }}
                                    />

                                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, width: '100%', minWidth: 0 }}>
                                        <span
                                            style={{
                                                fontSize: styles.legend.fontSize,
                                                color: styles.legend.color,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                minWidth: 0,
                                            }}
                                            title={it.label}
                                        >
                                            {it.label}
                                        </span>

                                        <span style={{ fontSize: styles.legend.fontSize, color: styles.legend.color, flex: '0 0 auto' }}>
                                            {it.value.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* TOP/BOTTOM: делим на равные колонки + скролл */}
                    {isTopBottom && (
                        <div style={{ display: 'flex', gap: styles.legend.gap, alignItems: 'flex-start' }}>
                            {columns.map((col, cIdx) => (
                                <div
                                    key={cIdx}
                                    style={{
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: styles.legend.itemGap,
                                        minWidth: 0,
                                    }}
                                >
                                    {col.map((it, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: styles.legend.itemGap, minWidth: 0 }}>
                                            <span
                                                style={{
                                                    width: styles.legend.markerSize,
                                                    height: styles.legend.markerSize,
                                                    borderRadius: styles.legend.markerRadius,
                                                    background: it.color,
                                                    display: 'inline-block',
                                                    flex: '0 0 auto',
                                                }}
                                            />

                                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, width: '100%', minWidth: 0 }}>
                                                <span
                                                    style={{
                                                        fontSize: styles.legend.fontSize,
                                                        color: styles.legend.color,
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'nowrap',
                                                        minWidth: 0,
                                                    }}
                                                    title={it.label}
                                                >
                                                    {it.label}
                                                </span>

                                                <span style={{ fontSize: styles.legend.fontSize, color: styles.legend.color, flex: '0 0 auto' }}>
                                                    {it.value.toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            <div ref={plotRef} style={{ position: 'absolute', overflow: 'hidden' }}>
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
            </div>
        </div>
    )
}
