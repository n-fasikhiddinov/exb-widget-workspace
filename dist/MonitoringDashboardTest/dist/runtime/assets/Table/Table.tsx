// Table.tsx
import React from "react"
import "./Table.css"

type WidthType = "px" | "fr"
type TextAlign = "left" | "center" | "right"

interface ColInfo {
    field: string
    name?: string
    width?: number
    type?: WidthType
    textAlign?: TextAlign
    format?: (value: any) => React.ReactNode
}

interface TableProps {
    data: any[]
    fields: ColInfo[]
    getFilter: any
    setFilter: (value: any) => void
}

export default function Table({ data, fields, getFilter, setFilter }: TableProps) {
    const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
    const pendingRef = React.useRef<{ sort_by: string; order: "asc" | "desc" } | null>(null)

    const scheduleSort = (field: string, delay = 350) => {
        const nextOrder: "asc" | "desc" =
            getFilter.sort_by !== field ? "asc" : getFilter.order === "asc" ? "desc" : "asc"

        pendingRef.current = { sort_by: field, order: nextOrder }

        if (timerRef.current) clearTimeout(timerRef.current)

        timerRef.current = setTimeout(() => {
            const p = pendingRef.current
            if (!p) return

            setFilter((prev: any) => ({
                ...prev,
                sort_by: p.sort_by,
                order: p.order,
            }))
        }, delay)
    }

    React.useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [])

    return (
        <div className="mainTableArea">
            <table className="table">
                <thead>
                    <tr>
                        {fields.map((f) => {
                            const isSorted = getFilter.sort_by === f.field
                            const align = f.textAlign ?? "left"

                            return (
                                <th
                                    key={f.field}
                                    className={isSorted ? "thSorted" : ""}
                                    onClick={() => scheduleSort(f.field, 350)}
                                >
                                    <div className={`thInner align-${align}`}>
                                        <span className="thText">{f.name || f.field}</span>
                                        {isSorted ? (
                                            <span className="sortIcon">{getFilter.order === "asc" ? "▲" : "▼"}</span>
                                        ) : null}
                                    </div>
                                </th>
                            )
                        })}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, idx) => (
                        <tr key={idx}>
                            {fields.map((f) => {
                                const align = f.textAlign ?? "left"
                                return (
                                    <td key={f.field} data-label={f.name || f.field} className={`tdCell align-${align}`}>
                                        {f.format ? f.format(row[f.field]) : row[f.field]}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
