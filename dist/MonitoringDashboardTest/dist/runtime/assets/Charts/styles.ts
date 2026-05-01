import type { ChartStyles, TextStyle } from './types'
import { deepMerge } from './utils'

export const DEFAULT_PALETTE = [
    '#2563eb', '#f97316', '#22c55e', '#a855f7', '#ef4444',
    '#06b6d4', '#eab308', '#14b8a6', '#f43f5e', '#64748b',
]

export const DEFAULT_STYLES: Required<Omit<ChartStyles, 'text'>> & { text: TextStyle } = {
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
        columnMinWidth: 180,
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

export function resolveStyles(styles?: ChartStyles) {
    return deepMerge(DEFAULT_STYLES, styles)
}