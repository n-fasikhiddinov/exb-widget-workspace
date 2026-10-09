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
    onAnalytics: () => void
    analyticsActive: boolean
    terrainActive: boolean
    onTerrain: () => void
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

export default function RightArea({ map, onChange, overlayMap, getTheme, getLang, onOverlayVisibleChange, activeTool, comparisonActive, hasPolygons, clean, onCompare, onAnalytics, analyticsActive, onTerrain, terrainActive }: rightAreaProps) {
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
        if (next) window.dispatchEvent(new Event('sv-close-panels'))
        setShowBasemaps(next)
        if (next) {
            onChange("none")
            if (comparisonActive) onCompare()
        }
    }

    const toggleComparison = () => {
        setShowBasemaps(false)
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

            <button className="RightAreaBtn sv-terrain-toggle" hidden={clean} type="button" aria-pressed={terrainActive}
                title={getLang === 'RU' ? 'Рельеф и высоты' : getLang === 'EN' ? 'Terrain and elevation' : 'Relyef va balandlik'}
                aria-label={getLang === 'RU' ? 'Рельеф и высоты' : getLang === 'EN' ? 'Terrain and elevation' : 'Relyef va balandlik'}
                onClick={() => { setShowBasemaps(false); onTerrain() }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M2 20 10 4l5 10 3-5 4 11H2ZM7 10l3 3 3-3"/></svg></button>
            <button className="RightAreaBtn sv-analytics-toggle" hidden={clean} type="button" aria-pressed={analyticsActive}
                title={getLang === 'RU' ? 'Аналитика растров' : getLang === 'EN' ? 'Raster analytics' : 'Rastr tahlili'}
                aria-label={getLang === 'RU' ? 'Аналитика растров' : getLang === 'EN' ? 'Raster analytics' : 'Rastr tahlili'}
                onClick={() => { setShowBasemaps(false); onAnalytics() }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 3v17h17M8 16v-5m5 5V6m5 10v-8" /></svg></button>
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
