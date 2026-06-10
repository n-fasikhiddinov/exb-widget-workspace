import XlsxPopulate from 'xlsx-populate/browser/xlsx-populate'
import {
	uName, uType, otherValue, downloadFile, getRegionKm
} from '../../config'

export const exportHandler = async (records: any, name: string, availableIndex: number = -1) => {
	if (Object.keys(records).length === 0) {
		console.log("IsEmpty")
		return
	}

	function NumsFormat(num: any) {
		const n = Number(num || 0)
		const rounded = Math.round(n * 100) / 100
		const parts = rounded.toString().split('.')
		return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + (parts[1] ? ',' + parts[1] : '')
	}

	function CountFormat(count: number) {
		return Number(count || 0) ? NumsFormat(count) : '-'
	}

	function AreaFormat(area: number) {
		return Number(area || 0) ? NumsFormat(area) : '-'
	}

	const cDate = new Date()
	function isJami(val: number) {
		return val === uName.indexOf("Жами")
	}

	if (name === "Excel ( Кунлик )") {
		const currentYear = String(cDate.getFullYear())
		const currentYearKey = records[currentYear] ? currentYear : `${currentYear} йил`
		if (records[currentYearKey]) {
			records = { [currentYearKey]: records[currentYearKey] }
		}
	}

	const workbook = await XlsxPopulate.fromBlankAsync()
	const sheet = workbook.sheet(0)

	const mainStyle = {
		bold: true,
		border: true,
		horizontalAlignment: "center",
		verticalAlignment: "center",
		fill: 'F2F2F2'
	}
	const headerStyle = {
		...mainStyle,
		fontSize: 12,
		wrapText: true,
		fill: 'B4C6E7'
	}

	const startXcell = 2
	let startYcell = 2
	const regionAreaCol = startXcell + 1
	const typeStartCol = startXcell + 2
	const lastCol = typeStartCol + (uType.length * 2) - 1

	sheet.row(startYcell).height(72)
	sheet.range(startYcell, startXcell, startYcell, lastCol)
		.merged(true)
		.value("Ўзбекистон Республикаси Президентининг 2024 йил 14 октябрдаги\nПФ-155-сон Фармони 1-иловаси 2-банди ижроси бўйича кунлик\nТАҲЛИЛИЙ ЖАДВАЛ")
		.style({
			...mainStyle,
			wrapText: true,
			fontSize: 16,
			fill: 'ffffff'
		})
	startYcell += 1

	sheet.row(startYcell).height(15)
	sheet.range(startYcell, startXcell, startYcell, lastCol)
		.merged(true)
		.value(`${cDate.toLocaleDateString()} йил холатига`)
		.style({
			...mainStyle,
			horizontalAlignment: 'right',
			fontSize: 12
		})
	startYcell += 1

	sheet.row(startYcell).height(42)
	sheet.row(startYcell + 1).height(38)
	sheet.column(startXcell).width(38)
	sheet.column(regionAreaCol).width(24)

	sheet.range(startYcell, startXcell, startYcell + 1, startXcell)
		.merged(true)
		.value(availableIndex < 0 ? "Ҳудуд номи" : uName[availableIndex])
		.style(headerStyle)

	sheet.range(startYcell, regionAreaCol, startYcell + 1, regionAreaCol)
		.merged(true)
		.value("Мониторинг ўтказилган ҳудуднинг майдони\n(км²)")
		.style(headerStyle)

	uType.forEach((type: any, index: number) => {
		const col = typeStartCol + (index * 2)
		sheet.column(col).width(14)
		sheet.column(col + 1).width(16)
		sheet.range(startYcell, col, startYcell, col + 1)
			.merged(true)
			.value(type)
			.style(headerStyle)
		sheet.cell(startYcell + 1, col)
			.value("сони")
			.style(headerStyle)
		sheet.cell(startYcell + 1, col + 1)
			.value("майдони (га)")
			.style(headerStyle)
	})
	startYcell += 1
	sheet.freezePanes(0, startYcell)

	const writeBaseCell = (row: number, col: number, value: any, fill: string, bold: boolean, align: string = 'center') => {
		sheet.cell(row, col).value(value).style({
			border: true,
			bold,
			horizontalAlignment: align,
			verticalAlignment: "center",
			fontSize: 12,
			fill
		})
	}

	const writeTypePair = (row: number, xIndex: number, item: any, fill: string, bold: boolean) => {
		const col = typeStartCol + (xIndex * 2)
		writeBaseCell(row, col, CountFormat(item?.count), fill, bold)
		writeBaseCell(row, col + 1, AreaFormat(item?.sum), fill, bold)
	}

	if (availableIndex < 0) {
		Object.keys(records).forEach((yearKey: any) => {
			records[yearKey].forEach((montKey: any, montIndex: number) => {
				if (montKey.length != 0) {
					uName.forEach((regionName: any, index: number) => {
						const row = startYcell + index + 1
						const fill = isJami(index) ? 'FFFF00' : index & 1 ? 'DDEBF7' : 'FFFFFF'
						sheet.row(row).height(22)
						writeBaseCell(
							row,
							startXcell,
							"  " + regionName + (isJami(index) ? `${Object.keys(records).length !== 1 ? ' ' + yearKey : ''} (${montIndex + 1}-мониторинг)` : ''),
							fill,
							isJami(index),
							isJami(index) ? 'center' : 'left'
						)

						const km = isJami(index) ? null : getRegionKm(regionName)
						writeBaseCell(row, regionAreaCol, km === null ? '-' : NumsFormat(km), fill, isJami(index))
					})

					montKey.forEach((rows: any, yIndex: number) => {
						const fill = isJami(yIndex) ? 'FFFF00' : yIndex & 1 ? 'DDEBF7' : 'FFFFFF'
						rows.forEach((item: any, xIndex: number) => {
							writeTypePair(yIndex + startYcell + 1, xIndex, item, fill, isJami(yIndex))
						})
					})
					startYcell += uName.length
				}
			})
		})
	}
	else {
		Object.keys(records).forEach((yearKey: any, yearIndex: number) => {
			records[yearKey].forEach((montKey: any, montIndex: number) => {
				if (montKey.length != 0 && montKey[availableIndex]) {
					const row = startYcell + 1
					const fill = yearIndex & 1 ? 'DDEBF7' : 'FFFFFF'
					sheet.row(row).height(22)
					writeBaseCell(row, startXcell, `  ${yearKey} (${montIndex + 1}-мониторинг)`, fill, true)
					const km = getRegionKm(uName[availableIndex])
					writeBaseCell(row, regionAreaCol, km === null ? '-' : NumsFormat(km), fill, true)

					montKey[availableIndex].forEach((item: any, xIndex: number) => {
						writeTypePair(row, xIndex, item, fill, false)
					})

					startYcell += 1
				}
			})
		})
	}

	const blob = await workbook.outputAsync()
	downloadFile(blob, `Geologiya ${name}.xlsx`)
}
