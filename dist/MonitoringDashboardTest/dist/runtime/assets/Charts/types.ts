import type { ReactNode } from 'react'

export type Direction =
    | 'left-to-right'
    | 'right-to-left'
    | 'top-to-bottom'
    | 'bottom-to-top'

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
    maxPct: number // 0..1
    fontSize: number
    color: string
    gap: number
    itemGap: number
    markerSize: number
    markerRadius: number
    padding: number

    // top/bottom: минимальная ширина колонки (px)
    columnMinWidth: number
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
    maxLabelWidth?: number
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

/* ================= COMMON PROPS ================= */

export type CommonProps<T> = {
    data: T[]
    xKey: keyof T
    sortOrder?: SortOrder
    showTooltip?: boolean
    styles?: ChartStyles
    onItemClick?: (xValue: T[keyof T]) => void
}

export type MultiYProps<T> =
    | { yKey: keyof T; series?: never }
    | { yKey?: never; series: SeriesDef<T>[] }

/* ================= HIT MAP ================= */

export type Hit =
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
