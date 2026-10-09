import { React } from "jimu-core"
import type { WidgetTheme } from "../../config"
import "./SpaceAssetIcon.css"

interface SpaceAssetIconProps {
    theme: WidgetTheme
    active?: boolean
    hoverable?: boolean
    className?: string
    children: React.ReactNode
}

export default function SpaceAssetIcon({
    theme,
    active = false,
    hoverable = false,
    className,
    children,
}: SpaceAssetIconProps) {
    return (
        <span
            className={[
                "sv-asset-icon",
                hoverable ? "sv-asset-icon-hoverable" : "",
                className,
            ].filter(Boolean).join(" ")}
            data-theme={theme}
            data-active={active ? "true" : "false"}
        >
            {children}
        </span>
    )
}
