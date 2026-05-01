import { React } from 'jimu-core'
import type { LineChartProps } from './publicTypes'
import type { Hit, SeriesDef } from './types'
import { resolveStyles } from './styles'
import { ChartShell } from './ChartShell'
import { clamp, computeTooltipPos, fitText, getFontPx, toStr, estimateTooltipSize, withAlpha } from './utils'

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

    const seriesInput = (props as any).series as SeriesDef<T>[] | undefined
    const yKeySingle = (props as any).yKey as keyof T | undefined

    const seriesList = React.useMemo<SeriesDef<T>[]>(() => {
        if (Array.isArray(seriesInput) && seriesInput.length) return seriesInput
        return [{ key: yKeySingle as keyof T }]
    }, [seriesInput, yKeySingle])

    const legendVisible =
        typeof showLegend === 'boolean' ? showLegend : seriesList.length > 1

    const legendItems = React.useMemo(
        () =>
            seriesList.map((s, i) => ({
                label: s.label ?? String(s.key),
                color: s.color ?? palette[i % palette.length],
            })),
        [seriesList, palette]
    )

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
            for (const r of sortedRows) for (const sr of seriesList) vals.push(Number((r as any)[sr.key] ?? 0) + valueBoost)
            return Math.max(0, ...vals)
        })()

        const fontPx = getFontPx(text.font)

        const clear = (w: number, h: number) => {
            ctx.clearRect(0, 0, w, h)
            ctx.fillStyle = styles.backgroundColor
            ctx.fillRect(0, 0, w, h)
            ctx.font = text.font
            ctx.textBaseline = 'middle'
            hitRef.current = []
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

        const draw = (w: number, h: number, vw: number, vh: number) => {
            clear(w, h)

            const n = sortedRows.length
            const labels = sortedRows.map(r => toStr((r as any)[xKey]))
            const rawLabelMaxW = Math.max(0, ...labels.map(t => ctx.measureText(t).width))
            const labelMaxW = text.maxLabelWidth ? Math.min(rawLabelMaxW, text.maxLabelWidth) : rawLabelMaxW

            const overflowNeeded = scrollAxis === 'y' ? (h > vh + 1) : (w > vw + 1)
            const catLen = scrollAxis === 'y' ? (h - pad.top - pad.bottom) : (w - pad.left - pad.right)
            const step = (n <= 1) ? 0 : (overflowNeeded ? lineStyle.step : (catLen / (n - 1)))

            const labelAreaH = fontPx * 2

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

            // labels
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

            // series
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

                // area
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
        }

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

        const findHit = (px: number, py: number) => {
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
            const { w: tipW, h: tipH } = estimateTooltipSize(ctx, t, hit.title, hit.lines)

            const pos = computeTooltipPos({
                mouseX: mx,
                mouseY: my,
                plotW: plotEl.clientWidth,
                plotH: plotEl.clientHeight,
                tooltipW: tipW,
                tooltipH: tipH,
                offset: 12,
            })

            // ВАЖНО: учитываем скролл контейнера.
            // tooltip стоит absolute внутри plot, а plot может скроллиться
            const x = pos.left + plotEl.scrollLeft
            const y = pos.top + plotEl.scrollTop

            setTooltip({
                visible: true,
                x,
                y,
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
        sortOrder,
        direction,
        showTooltip,
        stylesInput,
        valueBoost,
        smooth,
        area?.show,
        area?.color,
        area?.opacity,
        onItemClick,
        seriesList,
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
