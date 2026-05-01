import { React } from 'jimu-core'

export * from './types'
export * from './publicTypes'

export { BarChart } from './BarChartCanvas'
export { LineChart } from './LineChartCanvas'
export { PieChart } from './PieChartCanvas'

import type { ChartProps } from './publicTypes'
import { BarChart } from './BarChartCanvas'
import { LineChart } from './LineChartCanvas'
import { PieChart } from './PieChartCanvas'

export function Chart<T>(props: ChartProps<T>) {
    if (props.type === 'bar') return <BarChart {...(props as any)} />
    if (props.type === 'line') return <LineChart {...(props as any)} />
    return <PieChart {...(props as any)} />
}