import { React } from "jimu-core"
import type MapView from "@arcgis/core/views/MapView"
import "./RightArea.css"
import BasemapPanel from "../../../map/BasemapPanel"
import { SelectAreaIcon, CompareIcon, AreaIcon, CircleIcon, LayersIcon, PolygonIcon, ReactangleIcon, RulerIcon, ImportIcon } from "../../../icons"

import {
    getThemeBasemap,
    translate
} from "../../../config"

interface rightAreaProps {
    clean: boolean
    onCompare: () => void
    activeTool: string
    comparisonActive: boolean
    hasPolygons: boolean
    map: MapView
    onChange: (type: string) => void
    overlayMap: any
    getTheme: string
    getLang: string
    // Новый колбэк — вызывается каждый раз когда видимость overlay меняется
    onOverlayVisibleChange?: (visible: boolean) => void
}

export default function RightArea({ map, onChange, overlayMap, getTheme, getLang, onOverlayVisibleChange, activeTool, comparisonActive, hasPolygons, clean, onCompare }: rightAreaProps) {
    const getType = activeTool
    const [showBasemaps, setShowBasemaps] = React.useState(false)
    const [showBasemap, setShowBasemap] = React.useState<boolean>(true)
    const defaultBasemap = getThemeBasemap(getTheme)

    React.useEffect(() => {
        if (!map) return
        map.map.basemap = defaultBasemap
    }, [defaultBasemap, getTheme, map])

    React.useEffect(() => {
        const visibleByDefault = !hasPolygons
        setShowBasemap(visibleByDefault)
        if (overlayMap) overlayMap.visible = visibleByDefault
        onOverlayVisibleChange?.(visibleByDefault)
    }, [hasPolygons, overlayMap])

    React.useEffect(() => {
        const close = (event: Event) => { if (event.type === 'sv-close-panels' || (event as KeyboardEvent).key === 'Escape') setShowBasemaps(false) }
        window.addEventListener('keydown', close); window.addEventListener('sv-close-panels', close)
        return () => { window.removeEventListener('keydown', close); window.removeEventListener('sv-close-panels', close) }
    }, [])
    if (!map) return null

    const updateType = (type: string) => {
        setShowBasemaps(false)
        if (comparisonActive) onCompare()
        if (type === "Import") { onChange("none"); onChange("Import"); return }
        if (type === getType) { onChange("none") }
        else { onChange(type) }
    }

    const toggleBasemapPanel = () => {
        const next = !showBasemaps
        setShowBasemaps(next)
        if (next) {
            onChange("none")
            if (comparisonActive) onCompare()
        }
    }

    const toggleComparison = () => {
        setShowBasemaps(false)
        onChange("none")
        onCompare()
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
        <div className={`RightArea ${clean ? "sv-right-clean" : ""}`}>
            <div className="sv-upper-tools">
            <div className="RightBtnArea layers-wrapper" hidden={clean}>
                {showBasemaps && (
                    <div className="BasemapPopup">
                        <div className="BasemapHeader">
                            {translate["Asosiy xaritalar"][getLang]}
                        </div>

                        <BasemapPanel view={map} />

                        <div className="BasemapToggleRow" hidden={comparisonActive} onClick={toggleOverlay}>
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

                <button type="button" className="RightAreaBtn" aria-pressed={showBasemaps} onClick={toggleBasemapPanel}><LayersIcon size="40%" color="currentColor" /></button>
            </div>

            <div className="RightBtnArea" hidden={clean}>
                <button type="button" className="RightAreaBtn" aria-pressed={getType === 'line'} onClick={() => updateType("line")}><RulerIcon size="40%" color="currentColor" /></button>
                <button type="button" className="RightAreaBtn" aria-pressed={getType === 'area'} onClick={() => updateType("area")}><AreaIcon size="40%" color="currentColor" /></button>
            </div>

            <button className="RightAreaBtn sv-compare-toggle" type="button" title={getLang === 'EN' ? "Compare rasters" : (getLang === 'RU' ? 'Сравнить растры' : 'Rastrlarni taqqoslash')} aria-label={getLang === 'EN' ? "Compare rasters" : (getLang === 'RU' ? 'Сравнить растры' : 'Rastrlarni taqqoslash')} aria-pressed={comparisonActive} onClick={toggleComparison}><CompareIcon /></button>
            </div>
            <div className="RightBtnArea sv-draw-group" hidden={clean}>
                <button className="RightAreaBtn" type="button" aria-pressed={getType === 'edit'} title={getLang === 'EN' ? "Edit areas" : (getLang === "RU" ? "Редактировать области" : "Hududlarni tahrirlash")} onClick={() => updateType("edit")}><SelectAreaIcon /></button>
                <button type="button" className="RightAreaBtn" aria-pressed={getType === 'Reactangle'} onClick={() => updateType("Reactangle")}><ReactangleIcon size="40%" color="currentColor" /></button>
                <button type="button" className="RightAreaBtn" aria-pressed={getType === 'Circle'} onClick={() => updateType("Circle")}><CircleIcon size="40%" color="currentColor" /></button>
                <button type="button" className="RightAreaBtn" aria-pressed={getType === 'Polygon'} onClick={() => updateType("Polygon")}><PolygonIcon size="40%" color="currentColor" /></button>
                <button type="button" className="RightAreaBtn" onClick={() => updateType("Import")}><ImportIcon size="50%" color="currentColor" /></button>
            </div>


        </div>
    )
}
