import { React } from "jimu-core"
import "./CustomInput.css"
import { useLayoutEffect } from "react"

interface CustomInputProps {
    name: string
    value: string
    onChange: (value: string) => void
}

export default function CustomInput({
    name,
    value,
    onChange
}: CustomInputProps) {
    const [hasContent, setContent] = React.useState<Boolean>(false)
    const nameRef = React.useRef<HTMLDivElement | null>(null);
    const moveText = (move: number) => {
        if (!nameRef.current) return null
        const nameSymbol = Array.from(nameRef.current.children)
        nameSymbol.forEach((symbol: any, index: number) => {
            symbol.style.left = `${move}px`
            symbol.style.transition = `all 0.1s ease-in-out ${index / 100}s`
            move += symbol.clientWidth
        })
    }

    React.useLayoutEffect(() => {
        moveText(15)
    }, [])

    React.useEffect(() => {
        moveText(hasContent ? 10 : 15)
    }, [hasContent])

    return (
        <div className="customInputArea">
            <div className={`customInputName ${hasContent && "active"}`} ref={nameRef}>
                {` ${name} `.split("").map((item: string, index: number) => <div key={index}>{item === " " ? "\u00A0" : item}</div>)}
            </div>
            <input
                className={`customInput ${hasContent && "inputActive"}`}
                value={value}
                onChange={(event: any) => {
                    onChange(event.target.value)
                }}
                onFocus={() => setContent(true)}
                onBlur={() => setContent(value?.length > 0 && value !== null && value !== "")}
            />
        </div>
    )
}