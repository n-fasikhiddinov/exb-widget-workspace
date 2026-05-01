import { React } from 'jimu-core'
import type { BarChartProps } from './publicTypes'
import type { Hit, SeriesDef } from './types'
import { resolveStyles } from './styles'
import { ChartShell } from './ChartShell'
import { clamp, computeTooltipPos, fitText, getFontPx, toStr, estimateTooltipSize } from './utils'

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

    // rule: LTR/RL => scrollY, TB/BT => scrollX
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
        const totalThickness = barStyle.thickness
        const step = totalThickness + barStyle.gap

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

            const labels = sortedRows.map(r => toStr((r as any)[xKey]))
            const rawLabelMaxW = Math.max(0, ...labels.map(t => ctx.measureText(t).width))
            const labelMaxW = text.maxLabelWidth ? Math.min(rawLabelMaxW, text.maxLabelWidth) : rawLabelMaxW

            const valueMaxW = (() => {
                const widths: number[] = []
                for (const r of sortedRows) for (const sr of seriesList) {
                    const raw = Number((r as any)[sr.key] ?? 0)
                    widths.push(ctx.measureText(raw.toLocaleString()).width)
                }
                return Math.max(0, ...widths)
            })()

            const seriesGap = barStyle.seriesGap
            const subThickness = (totalThickness - (seriesCount - 1) * seriesGap) / seriesCount

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

                    ctx.fillStyle = text.labelColor
                    if (isLR) {
                        ctx.textAlign = 'right'
                        ctx.fillText(label, pad.left + labelMaxW, rowY + totalThickness / 2)
                    } else {
                        ctx.textAlign = 'left'
                        ctx.fillText(label, w - pad.right - labelMaxW, rowY + totalThickness / 2)
                    }

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

        const layoutAndDraw = () => {
            const vw = Math.floor(plot.clientWidth)
            const vh = Math.floor(plot.clientHeight)

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

            const needX = contentW > vw + 1
            const needY = contentH > vh + 1
            plot.style.overflowX = needX ? 'auto' : 'hidden'
            plot.style.overflowY = needY ? 'auto' : 'hidden'
        }

        const findHit = (px: number, py: number) => {
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
    }, [
        data,
        xKey,
        sortOrder,
        direction,
        showTooltip,
        stylesInput,
        selectedKey,
        enableSelection,
        valueBoost,
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
