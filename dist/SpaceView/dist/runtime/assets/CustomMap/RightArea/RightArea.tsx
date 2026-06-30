import { React } from "jimu-core"
import type MapView from "@arcgis/core/views/MapView"
import "./RightArea.css"

import Streets from "../../imgs/Streets_Night.jpg"
import Dark from "../../imgs/Dark_Gray_Canvas.jpg"
import Hybrid from "../../imgs/Hybrid.jpg"
import Topographic from "../../imgs/Topographic.jpg"

import {
    allThemes,
    getThemeBasemap,
    AreaIcon,
    CircleIcon,
    LayersIcon,
    MinusIcon,
    PlusIcon,
    PolygonIcon,
    ReactangleIcon,
    RulerIcon,
    ImportIcon,
    translate
} from "../../../config"

interface rightAreaProps {
    map: MapView
    onChange: (type: string) => void
    overlayMap: any
    getTheme: string
    getLang: string
    // Новый колбэк — вызывается каждый раз когда видимость overlay меняется
    onOverlayVisibleChange?: (visible: boolean) => void
}

const baseMaps = [
    { baseName: "gray-vector", title: "Gray Canvas", url: Dark },
    { baseName: "streets-night-vector", title: "Streets (Night)", url: Streets },
    { baseName: "dark-gray-vector", title: "Dark Gray Canvas", url: Dark },
    { baseName: "satellite", title: "Satellite", url: Hybrid },
    { baseName: "hybrid", title: "Hybrid", url: Hybrid },
    { baseName: "topo", title: "Topographic", url: Topographic },
]

export default function RightArea({ map, onChange, overlayMap, getTheme, getLang, onOverlayVisibleChange }: rightAreaProps) {
    const [getType, setType] = React.useState("none")
    const [showBasemaps, setShowBasemaps] = React.useState(false)
    const [showBasemap, setShowBasemap] = React.useState<boolean>(false)
    const defaultBasemap = getThemeBasemap(getTheme)

    React.useEffect(() => {
        if (!map) return
        map.map.basemap = defaultBasemap
    }, [defaultBasemap, getTheme, map])

    if (!map) return null

    const zoomIn = () => { map.goTo({ zoom: Math.min(map.zoom + 1, 20) }, { duration: 500 }) }
    const zoomOut = () => { map.goTo({ zoom: Math.max(map.zoom - 1, 1) }, { duration: 500 }) }

    const changeBasemap = (id: string) => {
        map.map.basemap = id
        setShowBasemaps(false)
    }

    const updateType = (type: string) => {
        if (type === "Import") { onChange("Import"); return }
        if (type === getType) { onChange("none"); setType("none") }
        else { onChange(type); setType(type) }
    }

    // Единое место где меняется видимость overlay —
    // здесь же уведомляем CustomMap через колбэк
    const toggleOverlay = () => {
        const next = !showBasemap
        setShowBasemap(next)
        if (overlayMap) overlayMap.visible = next
        onOverlayVisibleChange?.(next)
    }

    return (
        <div className="RightArea">
            <div className="RightBtnArea layers-wrapper">
                {showBasemaps && (
                    <div className="BasemapPopup">
                        <div className="BasemapHeader">
                            {translate["Asosiy xaritalar"][getLang]}
                        </div>

                        <div className="BasemapList">
                            {baseMaps.map(bm => (
                                <div
                                    key={bm.baseName}
                                    className={`BasemapItem ${map.map.basemap?.id === bm.baseName || map.map.basemap?.portalItem?.id === bm.baseName ? "active" : ""}`}
                                    onClick={() => changeBasemap(bm.baseName)}
                                >
                                    {bm.title}
                                    <div className="BasemapImg"><img src={bm.url} /></div>
                                </div>
                            ))}
                        </div>

                        <div className="BasemapToggleRow" onClick={toggleOverlay}>
                            <span>{translate["Kartografik asos"][getLang]}</span>
                            <button
                                type="button"
                                className={`BasemapToggle ${showBasemap ? "BasemapToggleOn" : ""}`}
                                role="switch"
                                aria-checked={showBasemap}
                                aria-label={translate["Kartografik asos"][getLang]}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    toggleOverlay()
                                }}
                            >
                                <span className="BasemapToggleKnob" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                )}

                <div className="RightAreaBtn" onClick={() => setShowBasemaps((v: any) => !v)}>
                    <LayersIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
                </div>
            </div>

            <div className="RightBtnArea">
                <div className="RightAreaBtn" onClick={() => updateType("line")}>
                    <RulerIcon size="40%" color={`rgb(${allThemes[getTheme][getType === "line" ? "--main-activ-color" : "--main-second-color-rgb"]})`} />
                </div>
                <div className="RightAreaBtn" onClick={() => updateType("area")}>
                    <AreaIcon size="40%" color={`rgb(${allThemes[getTheme][getType === "area" ? "--main-activ-color" : "--main-second-color-rgb"]})`} />
                </div>
            </div>

            <div className="RightBtnArea">
                <div className="RightAreaBtn" onClick={() => updateType("Reactangle")}>
                    <ReactangleIcon size="40%" color={`rgb(${allThemes[getTheme][getType === "Reactangle" ? "--main-activ-color" : "--main-second-color-rgb"]})`} />
                </div>
                <div className="RightAreaBtn" onClick={() => updateType("Circle")}>
                    <CircleIcon size="40%" color={`rgb(${allThemes[getTheme][getType === "Circle" ? "--main-activ-color" : "--main-second-color-rgb"]})`} />
                </div>
                <div className="RightAreaBtn" onClick={() => updateType("Polygon")}>
                    <PolygonIcon size="40%" color={`rgb(${allThemes[getTheme][getType === "Polygon" ? "--main-activ-color" : "--main-second-color-rgb"]})`} />
                </div>
                <div className="RightAreaBtn" onClick={() => updateType("Import")}>
                    <ImportIcon size="50%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
                </div>
            </div>

            <div className="RightBtnArea">
                <div className="RightAreaBtn" onClick={zoomIn}>
                    <PlusIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
                </div>
                <div className="RightAreaBtn" onClick={zoomOut}>
                    <MinusIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
                </div>
            </div>
        </div>
    )
}