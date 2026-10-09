import { React } from "jimu-core"
import type { WidgetTheme } from "../../../config"
import filterDarkIcon from "../../imgs/filter.svg"
import filterLightIcon from "../../imgs/filter-light.svg"
import filterActiveIcon from "../../imgs/filter-1.svg"
import "./FilterAssetIcon.css"

interface FilterAssetIconProps {
    theme: WidgetTheme
    active?: boolean
    hoverable?: boolean
    className?: string
    size?: number
}

export default function FilterAssetIcon({
    theme,
    active = false,
    hoverable = false,
    className,
    size = 24,
}: FilterAssetIconProps) {
    const showDark = theme === "Dark" && !active
    const showLight = theme === "Light" && !active

    return (
        <span
            className={[
                "sv-filter-asset-icon",
                hoverable ? "sv-filter-asset-icon-hoverable" : "",
                className,
            ].filter(Boolean).join(" ")}
            style={{ "--sv-filter-icon-size": `${size}px` } as React.CSSProperties}
            aria-hidden="true"
        >
            <img
                className={["sv-filter-icon-layer", showDark ? "sv-filter-icon-visible" : ""].filter(Boolean).join(" ")}
                src={filterDarkIcon}
                alt=""
                decoding="async"
            />
            <img
                className={["sv-filter-icon-layer", showLight ? "sv-filter-icon-visible" : ""].filter(Boolean).join(" ")}
                src={filterLightIcon}
                alt=""
                decoding="async"
            />
            <img
                className={["sv-filter-icon-layer sv-filter-icon-layer-active", active ? "sv-filter-icon-visible" : ""].filter(Boolean).join(" ")}
                src={filterActiveIcon}
                alt=""
                decoding="async"
            />
            {hoverable ? (
                <img
                    className="sv-filter-icon-layer sv-filter-icon-layer-hover"
                    src={filterActiveIcon}
                    alt=""
                    decoding="async"
                />
            ) : null}
        </span>
    )
}
