import XlsxPopulate from 'xlsx-populate/browser/xlsx-populate'
import {
	uType, downloadFile
} from '../../config'


export const exportHandler = async (props: {
	data: any,
	name: string,
	km: boolean
}) => {
	const date = new Date()

	function NumsFormat(num: any) {
		return Math.round(Number(num || 0) * 100) / 100
	}

	function createMetric() {
		return { count: 0, sum: 0 }
	}

	function createTypeTotals() {
		return uType.map((_: string, index: number) => {
			if (index === 0) return [createMetric()]
			return [createMetric(), createMetric(), createMetric()]
		})
	}

	function addMetric(target: any, source: any) {
		target.count += Number(source?.count || 0)
		target.sum += Number(source?.sum || 0)
	}

	function addValuesToTotals(target: any[][], values: any[][]) {
		values.forEach((typeItem: any[], typeIndex: number) => {
			typeItem.forEach((metric: any, metricIndex: number) => {
				addMetric(target[typeIndex][metricIndex], metric)
			})
		})
	}

	function countAll(value: any[]) {
		return Number(value[0]?.count || 0) + Number(value[1]?.count || 0) + Number(value[2]?.count || 0)
	}

	function sumAll(value: any[]) {
		return Number(value[0]?.sum || 0) + Number(value[1]?.sum || 0) + Number(value[2]?.sum || 0)
	}

	function countChecked(value: any[]) {
		return Number(value[0]?.count || 0) + Number(value[1]?.count || 0)
	}

	function sumChecked(value: any[]) {
		return Number(value[0]?.sum || 0) + Number(value[1]?.sum || 0)
	}

	function percent(value: number, total: number) {
		return total ? NumsFormat(value / total * 100) : 0
	}

	const valueStyle = {
		border: true,
		bold: true,
		fontSize: 12,
		horizontalAlignment: "center",
		verticalAlignment: "center"
	}

	const colors = [
		'ffffff',
		'C6E0B4',
		'FFD966',
		'92D050',
		'F4B084'
	]
	const names = [
		'Аниқланган объектлар',
		'Текширилган',
		'Текширилмаган',
		'Тасдиқланган',
		'Тасдиқланмаган'
	]

	const workbook = await XlsxPopulate.fromBlankAsync()
	const sheet = workbook.sheet(0)

	function putValue(x: number, y: number, value: number, fill: string) {
		sheet.cell(y, x).value(NumsFormat(value))
			.style({
				...valueStyle,
				fill: fill
			})
	}

	/*
	 * Все итоговые значения записываются готовыми числами.
	 * XlsxPopulate сохраняет формулы, но сам не пересчитывает их перед выгрузкой.
	 */
	function fillValueCount(x: number, y: number, value: any[]) {
		putValue(x, y, countAll(value), colors[0])
		putValue(x + 1, y, countChecked(value), colors[1])
		putValue(x + 2, y, value[2].count, colors[2])
		putValue(x + 3, y, value[0].count, colors[3])
		putValue(x + 4, y, value[1].count, colors[4])
	}

	function fillValueSum(x: number, y: number, value: any[]) {
		putValue(x, y, countAll(value), colors[0])
		putValue(x + 1, y, sumAll(value), colors[0])
		putValue(x + 2, y, countChecked(value), colors[1])
		putValue(x + 3, y, sumChecked(value), colors[1])
		putValue(x + 4, y, value[2].count, colors[2])
		putValue(x + 5, y, value[2].sum, colors[2])
		putValue(x + 6, y, value[0].count, colors[3])
		putValue(x + 7, y, value[0].sum, colors[3])
		putValue(x + 8, y, value[1].count, colors[4])
		putValue(x + 9, y, value[1].sum, colors[4])
	}

	function fillPercentCount(x: number, y: number, value: any[]) {
		const total = countAll(value)

		putValue(x, y, total ? 100 : 0, colors[0])
		putValue(x + 1, y, percent(countChecked(value), total), colors[1])
		putValue(x + 2, y, percent(Number(value[2].count || 0), total), colors[2])
		putValue(x + 3, y, percent(Number(value[0].count || 0), total), colors[3])
		putValue(x + 4, y, percent(Number(value[1].count || 0), total), colors[4])
	}

	function fillPercentSum(x: number, y: number, value: any[]) {
		const totalCount = countAll(value)
		const totalSum = sumAll(value)

		putValue(x, y, totalCount ? 100 : 0, colors[0])
		putValue(x + 1, y, totalSum ? 100 : 0, colors[0])
		putValue(x + 2, y, percent(countChecked(value), totalCount), colors[1])
		putValue(x + 3, y, percent(sumChecked(value), totalSum), colors[1])
		putValue(x + 4, y, percent(Number(value[2].count || 0), totalCount), colors[2])
		putValue(x + 5, y, percent(Number(value[2].sum || 0), totalSum), colors[2])
		putValue(x + 6, y, percent(Number(value[0].count || 0), totalCount), colors[3])
		putValue(x + 7, y, percent(Number(value[0].sum || 0), totalSum), colors[3])
		putValue(x + 8, y, percent(Number(value[1].count || 0), totalCount), colors[4])
		putValue(x + 9, y, percent(Number(value[1].sum || 0), totalSum), colors[4])
	}

	let yCellPos = 2

	/*
	 * В обоих вариантах выгрузки оставляем отдельный столбец
	 * для площади мониторинга региона в км².
	 * props.km теперь влияет только на то, выгружать все годы или последний год.
	 */
	let xCellPos = 4
	let indexPos = 2
	let namesPos = 1
	const metricsPerType = 10
	const lastColumn = xCellPos + (uType.length - 1) * metricsPerType

	if (!props.km) {
		const yearKeys = Object.keys(props.data).sort((a, b) => Number(a) - Number(b))
		const latestYear = yearKeys[yearKeys.length - 1]
		props.data = latestYear ? { [latestYear]: props.data[latestYear] } : {}
	}
	const yearKeys = Object.keys(props.data).sort((a, b) => Number(a) - Number(b))
	const yearTitle = yearKeys.length > 1
		? `${yearKeys[0]}–${yearKeys[yearKeys.length - 1]}-йилларда`
		: `${yearKeys[0] || date.getFullYear()}-йилда`

	// -----------------  Header -------------------------
	sheet.row(yCellPos).height(60)
	sheet.range(2, 2, yCellPos, lastColumn)
		.merged(true)
		.value(`${yearTitle} аниқланган майдонларнинг жойга чиқиб ўтказилган мониторинг хулосалари бўйича таҳлили (${date.toLocaleDateString()} ҳолатига кўра)`)
		.style({
			bold: true,
			fontSize: 16,
			fill: "FFFFFF",
			border: true,
			horizontalAlignment: "center",
			verticalAlignment: "center"
		})

	yCellPos += 1

	const headerTopRow = yCellPos
	const headerStatusRow = yCellPos + 1
	const headerMetricRow = yCellPos + 2

	sheet.range(headerTopRow, xCellPos - indexPos, headerMetricRow, xCellPos - indexPos)
		.merged(true)
		.value("№")
		.style({
			...valueStyle,
			fill: colors[0]
		})
	sheet.range(headerTopRow, xCellPos - namesPos, headerMetricRow, xCellPos - namesPos)
		.merged(true)
		.value("Худуд номи (ID)")
		.style({
			...valueStyle,
			fill: colors[0]
		})

	sheet.column(xCellPos).width(23)
	sheet.range(headerTopRow, xCellPos, headerStatusRow, xCellPos)
		.value("Мониторинг ўтказилган ҳудуднинг майдони")
		.merged(true)
		.style({
			...valueStyle,
			wrapText: true,
			fill: colors[0]
		})
	sheet.cell(headerMetricRow, xCellPos)
		.value("км²")
		.style({
			...valueStyle,
			fill: colors[0]
		})

	sheet.row(headerTopRow).height(42)
	sheet.row(headerStatusRow).height(34)
	sheet.row(headerMetricRow).height(30)

	for (let typeIndex = 1; typeIndex < uType.length; typeIndex++) {
		const startColumn = xCellPos + 1 + (typeIndex - 1) * metricsPerType
		const endColumn = startColumn + metricsPerType - 1

		sheet.range(headerTopRow, startColumn, headerTopRow, endColumn)
			.merged(true)
			.value(uType[typeIndex])
			.style({
				...valueStyle,
				wrapText: true,
				fill: colors[0]
			})

		for (let statusIndex = 0; statusIndex < names.length; statusIndex++) {
			const statusColumn = startColumn + statusIndex * 2
			sheet.range(headerStatusRow, statusColumn, headerStatusRow, statusColumn + 1)
				.merged(true)
				.value(names[statusIndex])
				.style({
					...valueStyle,
					wrapText: true,
					fill: colors[0]
				})

			sheet.cell(headerMetricRow, statusColumn)
				.value("сони")
				.style({
					...valueStyle,
					wrapText: true,
					fill: colors[0]
				})

			sheet.cell(headerMetricRow, statusColumn + 1)
				.value("майдони (га)")
				.style({
					...valueStyle,
					wrapText: true,
					fill: colors[0]
				})
		}
	}

	sheet.freezePanes(0, headerMetricRow)
	yCellPos = headerMetricRow + 1

	sheet.column(xCellPos - namesPos).width(45)
	sheet.column(xCellPos - indexPos).width(10)
	for (let column = xCellPos + 1; column <= lastColumn; column++) {
		sheet.column(column).width(15)
	}

	function fillTotalsRows(label: string, percentLabel: string, totals: any[][], fill = colors[0]) {
		const totalRow = yCellPos
		const percentRow = yCellPos + 1

		sheet.row(totalRow).height(25)
		sheet.row(percentRow).height(25)
		sheet.range(totalRow, xCellPos - indexPos, totalRow, xCellPos - namesPos)
			.merged(true)
			.value(label)
			.style({ ...valueStyle, fill })
		sheet.range(percentRow, xCellPos - indexPos, percentRow, xCellPos - namesPos)
			.merged(true)
			.value(percentLabel)
			.style({ ...valueStyle, fill })

		putValue(xCellPos, totalRow, totals[0][0].sum, fill)
		putValue(xCellPos, percentRow, totals[0][0].sum ? 100 : 0, fill)
		fillValueSum(xCellPos + 1, totalRow, totals[1])
		fillPercentSum(xCellPos + 1, percentRow, totals[1])

		for (let typeIndex = 2; typeIndex < uType.length; typeIndex++) {
			const column = xCellPos + 1 + (typeIndex - 1) * metricsPerType
			fillValueSum(column, totalRow, totals[typeIndex])
			fillPercentSum(column, percentRow, totals[typeIndex])
		}

		yCellPos += 2
	}

	const allYearsTotals = createTypeTotals()

	yearKeys.forEach((yearKey: string) => {
		const yearTotals = createTypeTotals()
		const monitoringKeys = Object.keys(props.data[yearKey]).sort((a, b) => a.localeCompare(b))

		monitoringKeys.forEach((monitoringKey: string, monitoringIndex: number) => {
			const monitoringTotals = createTypeTotals()
			const monitoringData = props.data[yearKey][monitoringKey]
			const regionNames = Object.keys(monitoringData).sort((a, b) => a.localeCompare(b))

			sheet.range(yCellPos, xCellPos - indexPos, yCellPos, lastColumn)
				.merged(true)
				.value(`Мониторинг: ${monitoringKey}`)
				.style({
					...valueStyle,
					fontSize: 13,
					horizontalAlignment: "left",
					fill: "E7E6E6"
				})
			sheet.row(yCellPos).height(26)
			yCellPos += 1

			regionNames.forEach((nameKey: string, nameIndex: number) => {
				const region = monitoringData[nameKey]
				const values = region.values

				sheet.cell(yCellPos, xCellPos - namesPos)
					.value(nameKey)
					.style({ ...valueStyle, horizontalAlignment: "left", fill: colors[0] })
				sheet.cell(yCellPos, xCellPos - indexPos)
					.value(nameIndex + 1)
					.style({ ...valueStyle, fill: colors[0] })
				sheet.row(yCellPos).height(25)

				values.forEach((typeItem: any[], typeIndex: number) => {
					if (typeIndex === 0) {
						putValue(xCellPos, yCellPos, typeItem[0].sum, colors[0])
					} else if (typeIndex === 1) {
						fillValueSum(xCellPos + 1, yCellPos, typeItem)
					} else {
						fillValueSum(xCellPos + 1 + (typeIndex - 1) * metricsPerType, yCellPos, typeItem)
					}
				})

				addValuesToTotals(monitoringTotals, values)
				addValuesToTotals(yearTotals, values)
				addValuesToTotals(allYearsTotals, values)
				yCellPos += 1
			})

			fillTotalsRows(
				`Жами ${monitoringKey}${props.km ? ' ' + yearKey : ''}:`,
				`Жами% ${monitoringKey}${props.km ? ' ' + yearKey : ''}:`,
				monitoringTotals
			)
			if (monitoringIndex === monitoringKeys.length - 1 && monitoringKeys.length === 1) {
				yCellPos += 1
			}
		})

		if (monitoringKeys.length > 1) {
			fillTotalsRows(
				`Умумий жами${props.km ? ' ' + yearKey : ''}:`,
				`Умумий жами%${props.km ? ' ' + yearKey : ''}:`,
				yearTotals,
				"D9EAD3"
			)
			yCellPos += 1
		}
	})

	if (props.km && yearKeys.length > 1) {
		fillTotalsRows(
			"Барча йиллар бўйича умумий жами:",
			"Барча йиллар бўйича умумий жами%:",
			allYearsTotals,
			"BDD7EE"
		)
	}

	const blob = await workbook.outputAsync()
	downloadFile(blob, `Ecologiya ${props.name}.xlsx`)
}
