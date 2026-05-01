import { React } from "jimu-core"
import "./Calendar.css"

interface DateStruct {
	day: number;
	month: number; // 0-11
	year: number;
}

interface DateInputProps {
	value: string;
	onChange: (date: string) => void;
	minDate?: string;
	maxDate?: string;
	format?: string;
	weekDays?: string[];
	monthNames?: string[];
	className?: string;
	afterInfo?: React.ReactNode;
	placeholder?: string;
	restrict?: boolean;
}

export default function Calendar(props: DateInputProps) {
	const wrapRef = React.useRef<HTMLDivElement>(null)
	const today = new Date()

	// ====================== Локализация ======================
	const weekDays = props.weekDays?.length === 7
		? props.weekDays
		: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

	const monthNames = props.monthNames?.length === 12
		? props.monthNames
		: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]

	// ====================== Анализ формата ======================
	const format = props.format || "%D.%M.%Y"
	const hasDay = format.includes("%D")
	const hasMonth = format.includes("%M")
	const hasYear = format.includes("%Y")

	const separatorMatch = format.match(/%[DMY]([^%DMY]+)%[DMY]/)
	const separator = separatorMatch ? separatorMatch[1] : "."

	const order = []
	if (hasDay) order.push("D")
	if (hasMonth) order.push("M")
	if (hasYear) order.push("Y")

	// ====================== Парсинг и форматирование ======================
	function parseDate(value?: string): DateStruct | null {
		if (!value || order.length === 0) return null

		const parts = value.split(separator).map(p => p.trim()).filter(Boolean)
		if (parts.length !== order.length) return null

		const result: Partial<DateStruct> = {}
		order.forEach((key, idx) => {
			const num = parseInt(parts[idx], 10)
			if (isNaN(num)) return
			if (key === "D") result.day = num
			if (key === "M") result.month = num - 1
			if (key === "Y") result.year = num
		})

		if (hasDay && !result.day) return null
		if (hasMonth && result.month === undefined) return null
		if (hasYear && !result.year) return null

		return {
			day: result.day ?? 1,
			month: result.month ?? 0,
			year: result.year ?? today.getFullYear(),
		}
	}

	function formatDate(d: DateStruct): string {
		return format
			.replace(/%D/g, String(d.day).padStart(2, "0"))
			.replace(/%M/g, String(d.month + 1).padStart(2, "0"))
			.replace(/%Y/g, String(d.year))
	}

	function formatHeader(d: DateStruct): string {
		let header = format
		if (!hasDay) {
			header = header.replace(/%D[^%DMY]*/g, "").replace(/[^%DMY]%D/g, "")
		}
		return header
			.replace(/%D/g, String(d.day).padStart(2, "0"))
			.replace(/%M/g, String(d.month + 1).padStart(2, "0"))
			.replace(/%Y/g, String(d.year))
			.replace(new RegExp(`\\${separator}+`, "g"), separator)
			.replace(new RegExp(`^\\${separator}|\\${separator}$`, "g"), "")
	}

	// ====================== Min / Max ======================
	const parsedMin = props.minDate ? parseDate(props.minDate) : null
	const parsedMax = props.maxDate ? parseDate(props.maxDate) : null

	const restrict = props.restrict ?? (!hasYear)

	const minDate: DateStruct = parsedMin ?? {
		day: 1,
		month: 0,
		year: restrict ? 1970 : 1900,
	}

	const maxDate: DateStruct = parsedMax ?? {
		day: today.getDate(),
		month: today.getMonth(),
		year: restrict ? today.getFullYear() : 2099,
	}

	const minTime = new Date(minDate.year, minDate.month, minDate.day)
	const maxTime = new Date(maxDate.year, maxDate.month, maxDate.day + 1)

	if (!hasYear) {
		minDate.year = maxDate.year = today.getFullYear()
	}

	// ====================== State ======================
	const [isOpen, setOpen] = React.useState(false)
	const [mode, setMode] = React.useState<"days" | "months" | "years">("days")

	const [selected, setSelected] = React.useState<DateStruct | null>(null)
	const [view, setView] = React.useState<DateStruct>({
		day: today.getDate(),
		month: today.getMonth(),
		year: today.getFullYear(),
	})

	React.useEffect(() => {
		const parsed = props.value ? parseDate(props.value) : null
		setSelected(parsed)
		if (parsed) {
			setView({ ...parsed })
		}
		// При очистке view не меняется
	}, [props.value])

	// ====================== Проверка отключения ======================
	function isDisabled(d: DateStruct): boolean {
		const date = new Date(d.year, d.month, d.day)
		return date < minTime || date >= maxTime
	}

	// ====================== Календарь ======================
	function getCalendar(year: number, month: number): DateStruct[] {
		const result: DateStruct[] = []

		if (!hasYear) {
			// Специальная логика: 1 января всегда начинается с понедельника
			// Считаем количество дней от 1 января до начала текущего месяца
			let daysFromJan1 = 0
			for (let m = 0; m < month; m++) {
				daysFromJan1 += new Date(year, m + 1, 0).getDate() // дни в предыдущем месяце
			}
			const startWeekday = daysFromJan1 % 7 // 0 = Понедельник

			const daysInMonth = new Date(year, month + 1, 0).getDate()
			const daysInPrev = month === 0 ? 31 : new Date(year, month, 0).getDate() // для января берём 31 (декабрь)

			let day = 1
			for (let i = 0; i < 42; i++) {
				const d: DateStruct = { day: 0, month, year }

				if (i < startWeekday) {
					// Дни предыдущего месяца
					d.day = daysInPrev - startWeekday + i + 1
					d.month = month === 0 ? 11 : month - 1
					d.year = month === 0 ? year - 1 : year
				} else if (day <= daysInMonth) {
					d.day = day++
				} else {
					// Дни следующего месяца — только если текущий месяц НЕ декабрь
					if (month === 11) {
						d.day = 0 // пустая ячейка
					} else {
						d.day = day - daysInMonth
						d.month = month + 1
						d.year = year
						day++
					}
				}
				result.push(d)
			}
			return result
		}

		// Обычный календарь с реальными днями недели
		const firstDay = new Date(year, month, 1)
		const startWeekday = (firstDay.getDay() + 6) % 7 // Пн = 0
		const daysInMonth = new Date(year, month + 1, 0).getDate()
		const daysInPrev = new Date(year, month, 0).getDate()

		let day = 1
		for (let i = 0; i < 42; i++) {
			const d: DateStruct = { day: 0, month, year }
			if (i < startWeekday) {
				d.day = daysInPrev - startWeekday + i + 1
				d.month = month === 0 ? 11 : month - 1
				d.year = month === 0 ? year - 1 : year
			} else if (day <= daysInMonth) {
				d.day = day++
			} else {
				d.day = day - daysInMonth
				d.month = (month + 1) % 12
				d.year = month === 11 ? year + 1 : year
				day++
			}
			result.push(d)
		}
		return result
	}

	// ====================== Выбор дня ======================
	function selectDay(d: DateStruct) {
		if (d.day === 0 || isDisabled(d) || d.month !== view.month || (d.month === 11 && d.year !== view.year)) return

		const isCurrentlySelected =
			selected &&
			selected.day === d.day &&
			selected.month === d.month &&
			selected.year === d.year

		if (isCurrentlySelected) {
			setSelected(null)
			props.onChange("")
			// view остаётся на текущем месяце
		} else {
			setSelected(d)
			setView({ ...d })
			props.onChange(formatDate(d))
			setOpen(false)
			setMode("days")
		}
	}

	// ====================== Клик вне ======================
	React.useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
				setOpen(false)
				setMode("days")
			}
		}
		document.addEventListener("mousedown", handler)
		return () => { document.removeEventListener("mousedown", handler) }
	}, [])

	// ====================== Навигация ======================
	const handlePrev = () => {
		if (mode === "days") {
			const newMonth = view.month === 0 ? 11 : view.month - 1
			const newYear = view.month === 0 ? view.year - 1 : view.year
			if (new Date(newYear, newMonth, 1) < minTime) return
			setView(v => ({ ...v, month: newMonth, year: newYear }))
		} else if (mode === "months" && hasYear) {
			if (view.year <= minDate.year) return
			setView(v => ({ ...v, year: v.year - 1 }))
		} else if (mode === "years") {
			setView(v => ({ ...v, year: v.year - 10 }))
		}
	}

	const handleNext = () => {
		if (mode === "days") {
			const newMonth = view.month === 11 ? 0 : view.month + 1
			const newYear = view.month === 11 ? view.year + 1 : view.year
			if (new Date(newYear, newMonth + 1, 0) >= maxTime) return
			setView(v => ({ ...v, month: newMonth, year: newYear }))
		} else if (mode === "months" && hasYear) {
			if (view.year >= maxDate.year) return
			setView(v => ({ ...v, year: v.year + 1 }))
		} else if (mode === "years") {
			setView(v => ({ ...v, year: v.year + 10 }))
		}
	}

	// ====================== Переключение режимов ======================
	const handleModeSwitch = () => {
		if (mode === "days") {
			if (hasMonth) setMode("months")
		} else if (mode === "months") {
			if (hasYear) setMode("years")
			else setMode("days")
		} else if (mode === "years") {
			setMode("days")
		}
	}

	// ====================== Заголовок ======================
	const headerDate = selected || view
	const headerText =
		mode === "days" || mode === "months"
			? formatHeader(headerDate)
			: mode === "years" && hasYear
				? `${minDate.year} - ${maxDate.year}`
				: ""

	return (
		<div ref={wrapRef} className="calendarInputArea">
			<input
				className={props.className}
				value={props.value}
				onChange={e => { props.onChange(e.target.value) }}
				onFocus={() => { setOpen(true) }}
				placeholder={props.placeholder}
			/>
			{props.afterInfo && <span>{props.afterInfo}</span>}

			<div className={`calendarPopup ${isOpen ? "open" : ""}`}>
				<div className="calendarBtns">
					<div className="calendarBtn" onClick={handlePrev}>{"<"}</div>
					<div className="calendarInfo" onClick={handleModeSwitch}>
						{headerText}
					</div>
					<div className="calendarBtn" onClick={handleNext}>{">"}</div>
				</div>

				<div className="line" />

				{mode === "days" && (
					<>
						<div className="weeksArea">
							{weekDays.map(w => (
								<div key={w} className="weeks">{w}</div>
							))}
						</div>
						<div className="daysArea">
							{getCalendar(view.year, view.month).map((d, i) => {
								if (d.day === 0) {
									return <div key={i} className="days empty" />
								}

								const isSelected = selected?.day === d.day && selected?.month === d.month && selected?.year === d.year
								const isToday = d.day === today.getDate() && d.month === today.getMonth() && d.year === today.getFullYear()
								const inCurrentMonth = d.month === view.month && d.year === view.year

								return (
									<div
										key={i}
										className={`days ${isSelected ? "selected-day" : ""} ${isToday ? "today-day" : ""} ${!inCurrentMonth ? "other-month" : ""
											} ${isDisabled(d) || !inCurrentMonth ? "disabled" : ""}`}
										onClick={() => { selectDay(d) }}
									>
										{d.day}
									</div>
								)
							})}
						</div>
					</>
				)}

				{mode === "months" && hasMonth && (
					<div className="monthArea">
						{monthNames.map((name, i) => {
							const disabled = isDisabled({ day: 1, month: i, year: view.year })
							const isSelected = selected?.month === i && selected?.year === view.year

							return (
								<div
									key={i}
									className={`month ${disabled ? "disabled" : ""} ${isSelected ? "selected-month" : ""}`}
									onClick={() => {
										if (disabled) return
										setView(v => ({ ...v, month: i }))
										setMode("days")
									}}
								>
									{name}
								</div>
							)
						})}
					</div>
				)}

				{mode === "years" && hasYear && minDate.year > 0 && maxDate.year > 0 && (
					<div className="yearArea">
						{Array.from({ length: maxDate.year - minDate.year + 1 }, (_, i) => {
							const year = minDate.year + i
							const disabled = isDisabled({ day: 1, month: 0, year })
							const isSelected = selected?.year === year

							return (
								<div
									key={year}
									className={`year ${isSelected ? "activ" : ""} ${disabled ? "disabled" : ""}`}
									onClick={() => {
										if (disabled) return
										setView(v => ({ ...v, year }))
										setMode(hasMonth ? "months" : "days")
									}}
								>
									{year}
								</div>
							)
						})}
					</div>
				)}
			</div>
		</div>
	)
}
