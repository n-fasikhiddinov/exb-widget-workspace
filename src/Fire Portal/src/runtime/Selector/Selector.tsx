import { React } from "jimu-core"
import "./Selector.css"

import { selectorOptions } from "../../configs/config"

interface SelectorProps {
    name: string
    value: string | null
    options: selectorOptions[]
    onChange: (value: string | number | null) => void
}

export default function Selector({
    name,
    value,
    options,
    onChange
}: SelectorProps) {
    const [isSelectorOpen, toggleSelectorShow] = React.useState<boolean>(false)
    const rootRef = React.useRef<HTMLDivElement>(null);
    const [getRootInfo, setRootInfo] = React.useState<DOMRect>()

    React.useEffect(() => {
        if (rootRef.current) setRootInfo(rootRef.current.getBoundingClientRect());
    }, [])

    React.useEffect(() => {
        if (!isSelectorOpen) return;

        const onPointerDown = (e: PointerEvent) => {
            if (!rootRef.current) return
            if (!rootRef.current.contains(e.target as Node)) toggleSelectorShow(false)
        }

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") toggleSelectorShow(false);
        };

        document.addEventListener("pointerdown", onPointerDown, true);
        document.addEventListener("keydown", onKeyDown)

        return () => {
            document.removeEventListener("pointerdown", onPointerDown, true);
            document.removeEventListener("keydown", onKeyDown);
        }
    }, [isSelectorOpen])

    function onClick(option : string) {
        if( value === option ) onChange(null)
        else onChange(option)
    }

    return (
        <div className="mainSelectorArea" ref={rootRef}>
            <div className="selectorBtnArea" onClick={() => toggleSelectorShow(!isSelectorOpen)}>{value ? value : name}</div>
            {isSelectorOpen && <div className="selectorOptionsArea">{
                options.map((option: selectorOptions) => <div
                    className={`selectorOptions ${value === option.name && "active"}`}
                    style={{ height: getRootInfo.height }}
                    onClick={() => onClick(option.option as any)}
                >
                    {option.name}
                </div>)
            }</div>}
        </div>
    )
}
