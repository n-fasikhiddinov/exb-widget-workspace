import { React } from 'jimu-core'
import type { LegendPosition } from './types'
import type { resolveStyles } from './styles'

export function ChartShell({
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
    styles: ReturnType<typeof import('./styles').resolveStyles>
    plotRef: React.RefObject<HTMLDivElement>
    children: React.ReactNode
}) {
    const L = styles.legend
    const hasLegend = legendVisible && legendPosition !== 'none'

    const grid = (() => {
        if (!hasLegend) return { areas: `"plot"`, rows: '1fr', cols: '1fr' }
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
                background: styles.backgroundColor,
            }}
        >
            {hasLegend && (
                <div style={{ gridArea: 'legend', minWidth: 0, minHeight: 0, overflow: 'auto', background: styles.backgroundColor }}>
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
                    background: styles.backgroundColor,
                }}
            >
                {children}
            </div>
        </div>
    )
}
