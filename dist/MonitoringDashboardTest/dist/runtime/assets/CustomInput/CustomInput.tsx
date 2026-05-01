import { React } from "jimu-core"
import "./CustomInput.css"

interface CustomInputProps {
    name: string
    value: string | null
    onChange: (value: string) => void
}

export default function CustomInput({
    name,
    value,
    onChange
}: CustomInputProps) {
    const safeValue = value ?? ""
    const [hasContent, setContent] = React.useState<Boolean>(safeValue.length > 0)
    const nameRef = React.useRef<HTMLDivElement | null>(null)

    const moveText = (move: number) => {
        if (!nameRef.current) return
        const nameSymbol = Array.from(nameRef.current.children)
        nameSymbol.forEach((symbol: any, index: number) => {
            symbol.style.left = `${move}px`
            symbol.style.transition = `all 0.1s ease-in-out ${index / 100}s`
            move += symbol.clientWidth
        })
    }

    React.useLayoutEffect(() => {
        moveText(safeValue.length > 0 ? 10 : 15)
    }, [])

    React.useEffect(() => {
        setContent(safeValue.length > 0)
    }, [safeValue])

    React.useEffect(() => {
        moveText(hasContent ? 10 : 15)
    }, [hasContent])

    return (
        <div className="customInputArea">
            <div className={`customInputName ${hasContent ? "active" : ""}`} ref={nameRef}>
                {` ${name} `.split("").map((item: string, index: number) => <div key={index}>{item === " " ? "\u00A0" : item}</div>)}
            </div>
            <input
                className={`customInput ${hasContent ? "inputActive" : ""}`}
                value={safeValue}
                onChange={(event: any) => onChange(event.target.value)}
                onFocus={() => setContent(true)}
                onBlur={() => setContent(safeValue.length > 0)}
            />
        </div>
    )
}
