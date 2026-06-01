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
	let isExtended = true
	let heightCount = 0
	let widthCount = 0

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

	let xCellPos = 4
	let indexPos = 2
	let namesPos = 1

	if (!props.km) {
		xCellPos = 3
		indexPos = 1
		namesPos = 0

		const yearKeys = Object.keys(props.data).sort((a, b) => Number(a) - Number(b))
		const latestYear = yearKeys[yearKeys.length - 1]
		props.data = latestYear ? { [latestYear]: props.data[latestYear] } : {}
	}

	// -----------------  Header -------------------------
	sheet.row(yCellPos).height(60)
	sheet.range(2, 2, yCellPos, xCellPos + uType.length * 5)
		.merged(true)
		.value(`2025-йилда аниқланган майдонларнинг жойга чиқиб ўтказилган мониторинг хулосалари бўйича таҳлили (${date.toLocaleDateString()} ҳолатига кўра)`)
		.style({
			bold: true,
			fontSize: 16,
			fill: "FFFFFF",
			border: true,
			horizontalAlignment: "center",
			verticalAlignment: "center"
		})

	yCellPos += 1

	sheet.range(yCellPos, xCellPos - indexPos, yCellPos + 1, xCellPos - indexPos)
		.merged(true)
		.value("№")
		.style({
			...valueStyle,
			fill: colors[0]
		})
	sheet.range(yCellPos, xCellPos - namesPos, yCellPos + 1, xCellPos - namesPos)
		.merged(true)
		.value("Худуд номи (ID)")
		.style({
			...valueStyle,
			fill: colors[0]
		})

	if (props.km) {
		sheet.column(xCellPos).width(23)
		sheet.range(yCellPos, xCellPos, yCellPos + 1, xCellPos)
			.value("Мониторинг ўтказилган ҳудуднинг майдони")
			.merged(true)
			.style({
				...valueStyle,
				wrapText: true,
				fill: colors[0]
			})
		sheet.cell(yCellPos + 2, xCellPos)
			.value("км²")
			.style({
				...valueStyle,
				fill: colors[0]
			})
	}

	sheet.row(yCellPos).height(30)

	for (let i = 1; i <= 5; i++) {
		sheet.range(yCellPos, xCellPos + i * 2 - 1, yCellPos, xCellPos + i * 2)
			.merged(true)
			.value(names[i - 1])
			.style({
				...valueStyle,
				wrapText: true,
				fill: colors[0]
			})
	}

	for (let i = 1; i <= 10; i++) {
		sheet.cell(yCellPos + 1, xCellPos + i)
			.value(i & 1 ? "сони" : "майдони (га)")
			.style({
				...valueStyle,
				wrapText: true,
				fill: colors[0]
			})
	}
	for (let i = 11; i <= 30; i++) {
		sheet.cell(yCellPos + 1, xCellPos + i)
			.value(names[(i - 1) % 5])
			.style({
				...valueStyle,
				wrapText: true,
				fill: colors[0]
			})
	}

	sheet.range(yCellPos, xCellPos + 11, yCellPos, xCellPos + 15)
		.merged(true)
		.value("Аҳоли яшаш жойларида эҳтимоли юқори бўлган ноқонуний чиқинди полигонлари сони")
		.style({
			...valueStyle,
			wrapText: true,
			fill: colors[0]
		})

	sheet.range(yCellPos, xCellPos + 16, yCellPos, xCellPos + 20)
		.merged(true)
		.value("Саноат зоналарида эҳтимоли юқори бўлган ноқонуний чиқинди полигонлари сони")
		.style({
			...valueStyle,
			wrapText: true,
			fill: colors[0]
		})

	sheet.range(yCellPos, xCellPos + 21, yCellPos, xCellPos + 25)
		.merged(true)
		.value("Дарё муҳофаза ҳудудидаги ноқонуний полигонлар сони")
		.style({
			...valueStyle,
			wrapText: true,
			fill: colors[0]
		})

	sheet.range(yCellPos, xCellPos + 26, yCellPos, xCellPos + 30)
		.merged(true)
		.value("Қонуний чиқинди полигонлари чегарасидан ташқарига чиқиш ҳолати сони")
		.style({
			...valueStyle,
			wrapText: true,
			fill: colors[0]
		})

	yCellPos += 1
	sheet.freezePanes(0, yCellPos)
	yCellPos += 1

	Object.keys(props.data).forEach((yearKey: string) => {
		const yearTotals = createTypeTotals()
		const namesForYear = Object.keys(props.data[yearKey])

		namesForYear.forEach((nameKey: string, nameIndex: number) => {
			if (isExtended) {
				sheet.column(xCellPos - namesPos).width(45)
				sheet.column(xCellPos - indexPos).width(10)
			}

			sheet.cell(yCellPos + nameIndex, xCellPos - namesPos)
				.value(nameKey)
				.style({
					...valueStyle,
					horizontalAlignment: "left",
					fill: colors[0]
				})
			sheet.cell(yCellPos + nameIndex, xCellPos - indexPos)
				.value(nameIndex + 1)
				.style({
					...valueStyle,
					fill: colors[0]
				})

			sheet.row(yCellPos + nameIndex).height(25)

			props.data[yearKey][nameKey].forEach((typeItem: any[], typeIndex: number) => {
				if (typeIndex === 0) {
					if (props.km) {
						putValue(xCellPos + typeIndex, yCellPos + nameIndex, typeItem[0].sum, colors[0])
					}
					addMetric(yearTotals[typeIndex][0], typeItem[0])
					widthCount += isExtended ? 1 : 0
				}
				else if (typeIndex === 1) {
					fillValueSum(xCellPos + typeIndex, yCellPos + nameIndex, typeItem)

					typeItem.forEach((metric: any, metricIndex: number) => {
						addMetric(yearTotals[typeIndex][metricIndex], metric)
					})
					widthCount += isExtended ? 10 : 0
				}
				else {
					fillValueCount(1 + xCellPos + typeIndex * 5, yCellPos + nameIndex, typeItem)

					typeItem.forEach((metric: any, metricIndex: number) => {
						addMetric(yearTotals[typeIndex][metricIndex], metric)
					})
					widthCount += isExtended ? 5 : 0
				}
			})

			isExtended = false
			heightCount += 1
		})

		const totalRow = yCellPos + heightCount
		const percentRow = totalRow + 1

		sheet.row(totalRow).height(25)

		sheet.range(totalRow, xCellPos - indexPos, totalRow, xCellPos - namesPos)
			.merged(true)
			.value(`Жами${props.km ? ' ' + yearKey : ''}:`)
			.style({
				...valueStyle,
				fill: colors[0]
			})
		sheet.range(percentRow, xCellPos - indexPos, percentRow, xCellPos - namesPos)
			.merged(true)
			.value(`Жами%${props.km ? ' ' + yearKey : ''}:`)
			.style({
				...valueStyle,
				fill: colors[0]
			})

		for (let i = 0; i < widthCount; i++) {
			sheet.column(xCellPos + i + (namesPos !== 0 ? namesPos : 1)).width(15)
		}

		if (props.km) {
			putValue(xCellPos, totalRow, yearTotals[0][0].sum, colors[0])
			putValue(xCellPos, percentRow, yearTotals[0][0].sum ? 100 : 0, colors[0])
		}

		fillValueSum(xCellPos + 1, totalRow, yearTotals[1])
		fillPercentSum(xCellPos + 1, percentRow, yearTotals[1])

		for (let typeIndex = 2; typeIndex < uType.length; typeIndex++) {
			const column = 1 + xCellPos + typeIndex * 5
			fillValueCount(column, totalRow, yearTotals[typeIndex])
			fillPercentCount(column, percentRow, yearTotals[typeIndex])
		}

		isExtended = false
		yCellPos += heightCount + 3
		heightCount = 0
	})

	const blob = await workbook.outputAsync()
	downloadFile(blob, `Ecologiya ${props.name}.xlsx`)
}
