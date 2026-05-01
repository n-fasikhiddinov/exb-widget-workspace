import type { CommonProps, Direction, LegendPosition, MultiYProps, SortOrder } from './types'

export type BarChartProps<T> = CommonProps<T> &
    MultiYProps<T> & {
        direction?: Direction
        showLegend?: boolean
        legendPosition?: LegendPosition
        enableSelection?: boolean
        valueBoost?: number
    }

export type LineChartProps<T> = CommonProps<T> &
    MultiYProps<T> & {
        direction?: Direction
        showLegend?: boolean
        legendPosition?: LegendPosition
        valueBoost?: number
        smooth?: boolean
        area?: { show?: boolean; color?: string; opacity?: number }
    }

export type PieChartProps<T> = CommonProps<T> &
    MultiYProps<T> & {
        showLegend?: boolean
        legendPosition?: LegendPosition
        enableSelection?: boolean
        outerRadiusPct?: number
        innerRadiusPct?: number
        startAngleDeg?: number
    }

export type ChartProps<T> =
    | ({ type: 'bar' } & BarChartProps<T>)
    | ({ type: 'line' } & LineChartProps<T>)
    | ({ type: 'pie' } & PieChartProps<T>)
