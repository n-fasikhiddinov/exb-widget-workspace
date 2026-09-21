// ─── CustomMap.tsx ────────────────────────────────────────────────────────────
import { React } from "jimu-core"
import type { dataStruct } from "../../config"
import { getThemeBasemap } from "../../config"
import "./CustomMap.css"

import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import Graphic from "@arcgis/core/Graphic"
import ImageryLayer from "@arcgis/core/layers/ImageryLayer"
import { Extent } from "@arcgis/core/geometry"
import MosaicRule from "@arcgis/core/layers/support/MosaicRule"
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine"
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils"
import Point from "@arcgis/core/geometry/Point"
import GroupLayer from "@arcgis/core/layers/GroupLayer"
import MapTools from "../../map/MapTools"
import ZoomControls from "../../map/ZoomControls"
import RasterComparison from "../../map/RasterComparison"
import useRasterPopup from "../../map/useRasterPopup"
import type Swipe from "@arcgis/core/widgets/Swipe"
import "../../map/mapControls.css"
import Polygon from "@arcgis/core/geometry/Polygon"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol"
import { clip } from "@arcgis/core/layers/support/rasterFunctionUtils"
import type { RasterSource } from "../../config"





import LeftArea from "./LeftArea/LeftArea"
import BottomArea from "./BottomArea/BottomArea"
import RightArea from "./RightArea/RightArea"
import { collectRastersFromMosaic } from "./RasterFunc"
import { getImageryLayerOptions } from "../../sgmAuth"
import Loader from "../../components/Loader/Loader"

import * as mgrs from "mgrs"

interface customMapProps {
    clean: boolean
    onCleanChange: (value: boolean) => void
    getUrl: string
    rasters: RasterSource[]
    headerInfo: any[]
    file: any
    getTheme: string
    getLang: string
    onChange: (type: string, data: any) => void
}

let polygonIdSequence = 0

function ensurePolygonId(graphic: Graphic) {
    graphic.attributes = graphic.attributes || {}
    if (!graphic.attributes.polygonId) {
        polygonIdSequence += 1
        graphic.attributes.polygonId = `sv-polygon-${Date.now()}-${polygonIdSequence}`
    }
    return String(graphic.attributes.polygonId)
}

function uniquePolygonName(layer: GraphicsLayer | null, requested: string, excluded?: Graphic) {
    const base = requested.trim() || 'Polygon'
    const used = new Set((layer?.graphics.toArray() || []).filter(graphic => graphic !== excluded).map(graphic => String(graphic.attributes?.name || '').trim().toLowerCase()))
    if (!used.has(base.toLowerCase())) return base
    let suffix = 2
    while (used.has(`${base} ${suffix}`.toLowerCase())) suffix++
    return `${base} ${suffix}`
}

export default function CustomMap({
    getUrl, rasters, clean, onCleanChange,
    headerInfo,
    file,
    getTheme,
    onChange,
    getLang
}: customMapProps) {
    const [getReady, setReady] = React.useState(true)
    const themeRef = React.useRef(getTheme)
    const importantAreas = React.useRef<GraphicsLayer | null>(null)
    const mosaicLayers = React.useRef<ImageryLayer | null>(null)
    const catalogLayers = React.useRef<globalThis.Map<string, ImageryLayer>>(new globalThis.Map())
    const mapContainerRef = React.useRef<HTMLDivElement>(null)
    const rasterPolygon = React.useRef<GraphicsLayer | null>(null)
    const OverlayLayer = React.useRef<ImageryLayer | null>(null)
    const searchMarker = React.useRef<Graphic>(null)
    const mapRef = React.useRef<Map | null>(null)

    // Единственный источник истины для видимости overlay.
    // Ref — чтобы не вызывать ре-рендер при каждом togglee,
    // и чтобы эффект смены URL всегда читал актуальное значение.
    const overlayVisibleRef = React.useRef(true)

    const polygonSymbol = React.useRef<SimpleFillSymbol>(new SimpleFillSymbol({
        color: [55, 115, 213, 0],
        outline: { color: [55, 115, 213, 0.6], width: 2 }
    }))
    const polygonHoverSymbol = React.useRef<SimpleFillSymbol>(new SimpleFillSymbol({
        color: [255, 115, 20, 0],
        outline: { color: [255, 115, 20, 0.6], width: 2 }
    }))
    const baseGroup = React.useRef<GroupLayer>(null)
    const [tool, setTool] = React.useState('none')
    const [comparing, setComparing] = React.useState(false)
    const comparison = React.useRef<{ layers: ImageryLayer[]; swipe: Swipe | null }>({ layers: [], swipe: null })
    const [catalogError, setCatalogError] = React.useState(false)
    const collectSequence = React.useRef(0)
    const [view, setView] = React.useState<MapView | null>(null)
    const [rasterLoading, setRasterLoading] = React.useState(false)
    const rasterLoadTokenRef = React.useRef(0)
    const [geometryList, setGeometryList] = React.useState<any[]>([])
    const [rasterList, setRasterList] = React.useState<any[]>([])
    const [getListAction, setListAction] = React.useState<{ type: string; index: any }>({ type: "none", index: -1 })
    const [mapData, setMapData] = React.useState<dataStruct>({
        GCS: { lon: 61.696894, lat: 41.408488 },
        MGRS: "", mapScale: 1, mapZoom: 1
    })

    const getDefaultBasemap = React.useCallback(
        () => getThemeBasemap(themeRef.current),
        []
    )

    const whereRef = React.useRef("")
    const debounceTimer = React.useRef<number | null>(null)

    React.useEffect(() => {
        themeRef.current = getTheme
    }, [getTheme])

    React.useEffect(() => {
        if (!mapRef.current) return
        mapRef.current.basemap = getDefaultBasemap()
    }, [getDefaultBasemap, getTheme])
    const debouncedCollect = React.useCallback((where: string) => {
        const sequence = ++collectSequence.current
        if (debounceTimer.current) clearTimeout(debounceTimer.current)
        setReady(false)
        debounceTimer.current = window.setTimeout(async () => {
            setCatalogError(false)
            try {
                await collectRastersFromMosaic({
                    mosaics: rasters, polygonLayer: importantAreas.current,
                    outFields: ['*'], where,
                    isCurrent: () => sequence === collectSequence.current,
                    setRasterList: items => { if (sequence === collectSequence.current) setRasterList(items) },
                    isReady: ready => { if (sequence === collectSequence.current) setReady(ready) }
                })
            } catch {
                if (sequence === collectSequence.current) { setCatalogError(true); setReady(true) }
            }
        }, 300)
    }, [rasters])
    const syncGeometry = React.useCallback(() => {
        setGeometryList(importantAreas.current?.graphics.toArray().map(graphic => ({
            id: ensurePolygonId(graphic), name: graphic.attributes?.name || 'Polygon', visible: graphic.visible, clip: Boolean(graphic.attributes?.clip),
            area: Math.abs(geometryEngine.geodesicArea(graphic.geometry as Polygon, 'square-kilometers')).toFixed(3)
        })) || [])
        debouncedCollect(whereRef.current)
    }, [debouncedCollect])
    React.useEffect(() => { if (baseGroup.current) baseGroup.current.visible = !comparing }, [comparing, view])
    React.useEffect(() => {
        if (importantAreas.current) importantAreas.current.visible = !clean
        if (rasterPolygon.current) rasterPolygon.current.visible = !clean
        if (!clean) return
        setTool('none'); onChange('none', 'none')
    }, [clean])
    React.useEffect(() => {
        const escape = (event: KeyboardEvent) => {
            if (event.key !== 'Escape') return
            setTool('none'); onChange('none', 'none')
            if (clean) onCleanChange(false)
        }
        window.addEventListener('keydown', escape)
        return () => window.removeEventListener('keydown', escape)
    }, [clean, onCleanChange])
    useRasterPopup(view, () => {
        if (tool !== 'none' && !clean) return null
        if (comparing) return comparison.current
        return { layers: [...catalogLayers.current.values(), mosaicLayers.current, OverlayLayer.current].filter(l => l?.visible && l.mosaicRule?.where !== "1=0"), swipe: null }
    }, getLang)

    const waitForRasterDisplay = React.useCallback(async (
        mapView: MapView,
        layer: ImageryLayer,
        loadToken: number,
        zoomTo?: __esri.Geometry | __esri.Extent
    ) => {
        if (loadToken !== rasterLoadTokenRef.current) return

        if (zoomTo) {
            await mapView.goTo({ target: zoomTo }, { duration: 500, easing: "ease-in-out" })
            if (loadToken !== rasterLoadTokenRef.current) return
            await reactiveUtils.whenOnce(() => !mapView.updating)
        }

        const layerView = await mapView.whenLayerView(layer)
        if (loadToken !== rasterLoadTokenRef.current) return

        await layerView.when()
        if (loadToken !== rasterLoadTokenRef.current) return

        // Даём LayerView начать запрос изображения и ждём фактической
        // отрисовки, а не только загрузки метаданных ImageServer.
        await new Promise<void>(resolve => window.requestAnimationFrame(() => resolve()))

        await reactiveUtils.whenOnce(() => !mapView.updating && !layerView.updating)

        // После зума тайлы могут подгружаться повторно — дождёмся стабилизации.
        if (layerView.updating) {
            await reactiveUtils.whenOnce(() => !layerView.updating)
        }
    }, [])

    const applyRasterMosaicRule = React.useCallback(async (
        list: any[],
        options?: { zoomTo?: __esri.Geometry | __esri.Extent }
    ) => {
        const mapView = view
        const loadToken = ++rasterLoadTokenRef.current
        const selected = list.filter((r: any) => r.visible)

        setRasterLoading(true)

        try {
            const displayedLayers: ImageryLayer[] = []
            for (const source of rasters) {
                let layer = catalogLayers.current.get(source.id)
                if (!layer && baseGroup.current) {
                    layer = new ImageryLayer(getImageryLayerOptions(source.url, { visible: false, popupEnabled: false }) as __esri.ImageryLayerProperties)
                    catalogLayers.current.set(source.id, layer); baseGroup.current.add(layer)
                }
                if (!layer) continue
                const rows = selected.filter((r: any) => r.mosaicId === source.id)
                const ids = [...new Set(rows.map((r: any) => r.id))] as number[]
                layer.mosaicRule = ids.length ? new MosaicRule({ method: 'lock-raster', lockRasterIds: ids }) : new MosaicRule({ method: 'attribute', where: '1=0' })
                const clipGeometries = rows.filter((r: any) => geometryList[r.polygonIndex]?.clip).map((r: any) => r.polygonGeometry)
                layer.rasterFunction = clipGeometries.length ? clip({ geometry: geometryEngine.union(clipGeometries) as Polygon, keepOutside: false }) : null
                layer.visible = ids.length > 0
                if (ids.length) {
                    await layer.load()
                    displayedLayers.push(layer)
                }
            }
            if (mapView && options?.zoomTo) await mapView.goTo({ target: options.zoomTo }, { duration: 500 })
            if (mapView) {
                for (const layer of displayedLayers) {
                    await waitForRasterDisplay(mapView, layer, loadToken)
                }
            }
        } catch (err) {
            console.warn("Failed to apply raster display:", err)
        } finally {
            if (loadToken === rasterLoadTokenRef.current) {
                setRasterLoading(false)
            }
        }
    }, [view, waitForRasterDisplay, rasters, geometryList])

    // Keep selected rasters tied to the polygon identity instead of its old
    // array position. This also clears visible imagery immediately after a
    // polygon is removed through either the card or Sketch editing controls.
    React.useEffect(() => {
        const graphics = importantAreas.current?.graphics.toArray() || []
        const indexById = new globalThis.Map<string, number>()
        graphics.forEach((graphic, index) => indexById.set(ensurePolygonId(graphic), index))
        let changed = false
        const next = rasterList.flatMap((row: any) => {
            const existingId = row.polygonId ? String(row.polygonId) : ''
            const fallbackGraphic = !existingId && row.polygonIndex < graphics.length ? graphics[row.polygonIndex] : null
            const polygonId = existingId || (fallbackGraphic ? ensurePolygonId(fallbackGraphic) : '')
            const polygonIndex = indexById.get(polygonId)
            if (polygonIndex == null) { changed = true; return [] }
            const graphic = graphics[polygonIndex]
            const polygonName = graphic.attributes?.name || geometryList[polygonIndex]?.name || row.polygonName
            if (row.polygonId !== polygonId || row.polygonIndex !== polygonIndex || row.polygonName !== polygonName || row.polygonGeometry !== graphic.geometry) changed = true
            return [{ ...row, polygonId, polygonIndex, polygonName, polygonGeometry: graphic.geometry }]
        })
        if (!changed) return
        setRasterList(next)
        void applyRasterMosaicRule(next)
    }, [geometryList, rasterList, applyRasterMosaicRule])

    // ─── Смена URL ────────────────────────────────────────────────────────────
    React.useEffect(() => {
        if (!mapRef.current || !getUrl) return

        const map = baseGroup.current
        if (!map) return
        ++rasterLoadTokenRef.current
        setRasterLoading(false)

        // Читаем видимость до уничтожения слоя
        const wasVisible = OverlayLayer.current?.visible ?? overlayVisibleRef.current

        if (mosaicLayers.current) { map.remove(mosaicLayers.current); mosaicLayers.current.destroy() }
        if (OverlayLayer.current) { map.remove(OverlayLayer.current); OverlayLayer.current.destroy() }

        const newMosaic = new ImageryLayer(getImageryLayerOptions(getUrl, {
            mosaicRule: new MosaicRule({ method: "attribute", where: "1=0" }),
            
        }) as __esri.ImageryLayerProperties)
        // Восстанавливаем видимость
        const newOverlay = new ImageryLayer(getImageryLayerOptions(getUrl, {
            visible: wasVisible,
            
        }) as __esri.ImageryLayerProperties)

        mosaicLayers.current = newMosaic
        OverlayLayer.current = newOverlay
        overlayVisibleRef.current = wasVisible

        map.add(newOverlay)
        map.add(newMosaic)

        if (wasVisible && view) {
            const loadToken = ++rasterLoadTokenRef.current
            setRasterLoading(true)
            void (async () => {
                try {
                    await newOverlay.load()
                    await waitForRasterDisplay(view, newOverlay, loadToken)
                } catch (err) {
                    console.warn('Failed to load raster base:', err)
                } finally {
                    if (loadToken === rasterLoadTokenRef.current) setRasterLoading(false)
                }
            })()
        }

        setRasterList([])
        debouncedCollect(whereRef.current)
    }, [getUrl])

    React.useEffect(() => {
        async function run() {
            if (!file || file.length === 0) return
            const newGeometries: any[] = []
            const addedGraphics: Graphic[] = []

            file.forEach((item: any) => {
                if (item.type === "Polygon") {
                    const newGeo = new Graphic({
                        geometry: new Polygon({ rings: item.coordinates, spatialReference: { wkid: 4326 } }),
                        symbol: polygonSymbol.current,
                        attributes: { name: uniquePolygonName(importantAreas.current, item.name || "FilePolygon") }
                    })
                    const polygonId = ensurePolygonId(newGeo)
                    importantAreas.current?.add(newGeo)
                    addedGraphics.push(newGeo)
                    newGeometries.push({
                        id: polygonId, name: newGeo.attributes.name, visible: true, clip: false,
                        area: Math.abs(geometryEngine.geodesicArea(newGeo.geometry as Polygon, "square-kilometers")).toFixed(3)
                    })
                }
            })

            setGeometryList((prev: any) => [...prev, ...newGeometries])
            if (view && addedGraphics.length > 0 && addedGraphics[0].geometry.extent) {
                await view.goTo({ target: addedGraphics[0].geometry.extent.expand(1.2) })
            }
            debouncedCollect(whereRef.current)
        }
        run().catch(() => setCatalogError(true))
    }, [file, view])

    React.useEffect(() => {
        if (getListAction.type === "none") return

        const run = async () => {
            let activList = null
            let graphic = null

            if (getListAction.type === "where") {
                whereRef.current = getListAction.index
                debouncedCollect(getListAction.index)
                return
            }

            if (getListAction.type === 'gRename') {
                const payload = getListAction.index || {}
                const index = Number(payload.index)
                const target = importantAreas.current?.graphics.getItemAt(index)
                if (!target || !String(payload.name || '').trim()) return
                const name = uniquePolygonName(importantAreas.current, String(payload.name), target)
                target.attributes = { ...(target.attributes || {}), name }
                setGeometryList(prev => prev.map((item, itemIndex) => itemIndex === index ? { ...item, name } : item))
                setRasterList(prev => prev.map((item: any) => item.polygonId === target.attributes.polygonId || item.polygonIndex === index ? { ...item, polygonName: name } : item))
                return
            }

            if (getListAction.type[0] === 'g') {
                activList = geometryList
                graphic = importantAreas.current.graphics.getItemAt(getListAction.index)
            } else {
                activList = rasterList
                graphic = rasterPolygon.current.graphics.getItemAt(0)
            }

            switch (getListAction.type) {
                case 'gToggel': {
                    if (!importantAreas.current || !activList || !graphic) return
                    graphic.visible = !activList[getListAction.index].visible
                    activList[getListAction.index].visible = !activList[getListAction.index].visible
                    if (rasterList.some((r: any) => r.visible)) {
                        void applyRasterMosaicRule(rasterList)
                    }
                    break
                }
                case 'gDelete': {
                    if (!importantAreas.current || !activList || !graphic) return
                    importantAreas.current.remove(graphic)
                    const newList = activList.filter((_: any, i: any) => i !== getListAction.index)
                    setGeometryList([...newList])
                    activList = newList
                    break
                }
                case 'gClip': {
                    if (!importantAreas.current || !activList || !graphic) return
                    activList[getListAction.index].clip = !activList[getListAction.index].clip
                    graphic.attributes.clip = activList[getListAction.index].clip
                    await applyRasterMosaicRule(rasterList)
                    break
                }
                case 'gZoom': {
                    if (!importantAreas.current || !activList || !view || !graphic) return
                    await view.goTo({ target: graphic.geometry.extent.expand(1.2) })
                    break
                }
                case 'gShowAll': {
                    if (!importantAreas.current || !activList) return
                    activList.forEach((item: any, i: number) => {
                        const g = importantAreas.current.graphics.getItemAt(i)
                        if (g) g.visible = true
                        item.visible = true
                    })
                    if (rasterList.some((r: any) => r.visible)) {
                        void applyRasterMosaicRule(rasterList)
                    }
                    break
                }
                case 'gHideAll': {
                    if (!importantAreas.current || !activList) return
                    activList.forEach((item: any, i: number) => {
                        const g = importantAreas.current.graphics.getItemAt(i)
                        if (g) g.visible = false
                        item.visible = false
                    })
                    if (rasterList.some((r: any) => r.visible)) {
                        void applyRasterMosaicRule(rasterList)
                    }
                    break
                }
                case 'gHover': {
                    if (!graphic) return
                    importantAreas.current?.graphics.forEach((g: Graphic) => {
                        if (g.attributes.__defaultSymbol) { g.symbol = g.attributes.__defaultSymbol; delete g.attributes.__defaultSymbol }
                    })
                    if (!graphic.attributes.__defaultSymbol) graphic.attributes.__defaultSymbol = graphic.symbol
                    graphic.symbol = polygonHoverSymbol.current
                    break
                }
                case 'gUnhover': {
                    if (getListAction.index === -1) {
                        importantAreas.current?.graphics.forEach((g: Graphic) => {
                            if (g.attributes.__defaultSymbol) { g.symbol = g.attributes.__defaultSymbol; delete g.attributes.__defaultSymbol }
                        })
                    } else {
                        if (!graphic) return
                        if (graphic.attributes.__defaultSymbol) graphic.symbol = graphic.attributes.__defaultSymbol
                    }
                    break
                }
                case "rHover": {
                    if (!graphic) return
                    const item = activList[getListAction.index]
                    if (!item?.ring) return
                    graphic.geometry = new Polygon({ rings: item.rings ?? [item.ring], spatialReference: item.spatialReference })
                    graphic.symbol = polygonHoverSymbol.current
                    graphic.visible = true
                    break
                }
                case "rUnhover": {
                    if (!graphic) return
                    graphic.visible = false
                    break
                }
                case "rClicked": {
                    graphic = rasterPolygon.current.graphics.getItemAt(1)
                    if (!graphic || !view) return
                    if (getListAction.index >= 0) {
                        const item = activList[getListAction.index]
                        if (!item?.ring) return

                        activList.forEach((row: any, i: number) => {
                            row.visible = i === getListAction.index
                        })

                        const rasterFootprint = new Polygon({
                            rings: item.rings ?? [item.ring],
                            spatialReference: item.spatialReference,
                        })

                        const focusGeometry: Polygon = rasterFootprint

                        graphic.geometry = focusGeometry
                        graphic.symbol = polygonHoverSymbol.current
                        graphic.visible = true

                        const zoomTarget = focusGeometry.extent?.expand(1.2)
                        await applyRasterMosaicRule(
                            activList,
                            zoomTarget ? { zoomTo: zoomTarget } : undefined
                        )
                    } else {
                        graphic.visible = false
                    }
                    break
                }
                case "rToggel": {
                    if (!mosaicLayers.current || !activList?.length) return
                    activList[getListAction.index].visible = !activList[getListAction.index].visible
                    await applyRasterMosaicRule(activList)
                    break
                }
                case "rHideAll": {
                    if (!mosaicLayers.current || !activList?.length) return
                    activList.forEach((item: any) => { item.visible = false })
                    await applyRasterMosaicRule(activList)
                    break
                }
                case "rShowAll": {
                    if (!mosaicLayers.current || !activList?.length) return
                    activList.forEach((item: any) => { item.visible = true })
                    await applyRasterMosaicRule(activList)
                    break
                }
            }

            if (getListAction.type[0] === 'g') {
                if (getListAction.type !== 'gDelete') setGeometryList([...activList])
                if (!['gHover', 'gUnhover', 'gZoom'].includes(getListAction.type)) debouncedCollect(whereRef.current)
            }
            if (getListAction.type[0] === 'r') setRasterList([...activList])
        }

        run().catch(() => { setCatalogError(true); setReady(true) })
    }, [getListAction])

    React.useEffect(() => {
        if (!view) return
        if (headerInfo[0] === 'address' || headerInfo[0] === 'coordinates') {
            if (searchMarker.current) view.graphics.remove(searchMarker.current)
            if (headerInfo[0] === 'coordinates') {
                const point = new Point(headerInfo[1])
                searchMarker.current = new Graphic({ geometry: point, symbol: { type: 'simple-marker', color: '#3b82f6', size: 12, outline: { color: '#fff', width: 2 } } })
                view.graphics.add(searchMarker.current)
                void view.goTo({ target: point, scale: 5000 }, {duration:500}).catch(()=>{})
            } else void view.goTo({ target: new Extent(headerInfo[1]) }, {duration:500}).catch(()=>{})
        }
    }, [headerInfo, view])

    React.useEffect(() => {
        if (!mapContainerRef.current) return
        const map = new Map({ basemap: getDefaultBasemap() })
        mapRef.current = map
        const mapView = new MapView({
            map, container: mapContainerRef.current,
            center: [61.696894, 41.408488], scale: 4500000,
            constraints: { minZoom: 3, maxZoom: 20, snapToZoom: false },
            ui: { components: ['attribution'] }, popupEnabled: false
        })
        mosaicLayers.current = getUrl ? new ImageryLayer(getImageryLayerOptions(getUrl, {
            mosaicRule: new MosaicRule({ method: 'attribute', where: '1=0' }), popupEnabled: false
        }) as __esri.ImageryLayerProperties) : null
        OverlayLayer.current = getUrl ? new ImageryLayer(getImageryLayerOptions(getUrl, {
            visible: true, popupEnabled: false
        }) as __esri.ImageryLayerProperties) : null
        overlayVisibleRef.current = true
        baseGroup.current = new GroupLayer({ id: 'sv-imagery', layers: [OverlayLayer.current, mosaicLayers.current].filter(Boolean) as __esri.Layer[] })
        importantAreas.current = new GraphicsLayer({ id: 'ImportantAreas' })
        rasterPolygon.current = new GraphicsLayer({ id: 'rasterPolygon' })
        rasterPolygon.current.addMany([0, 1].map(() => new Graphic({
            geometry: new Polygon({ rings: [] }), symbol: polygonHoverSymbol.current, visible: false
        })))
        map.addMany([baseGroup.current, importantAreas.current, rasterPolygon.current])
        setView(mapView)
        if (OverlayLayer.current) {
            const initialRasterLoadToken = ++rasterLoadTokenRef.current
            setRasterLoading(true)
            void (async () => {
                try {
                    await OverlayLayer.current?.load()
                    if (OverlayLayer.current) await waitForRasterDisplay(mapView, OverlayLayer.current, initialRasterLoadToken)
                } catch (err) {
                    console.warn('Failed to load initial raster base:', err)
                } finally {
                    if (initialRasterLoadToken === rasterLoadTokenRef.current) setRasterLoading(false)
                }
            })()
        } else {
            setRasterLoading(false)
        }
        const move = mapView.on('pointer-move', event => {
            const point = mapView.toMap(event)
            if (!point) return
            const lon = point.longitude, lat = point.latitude
            setMapData(prev => ({ ...prev, GCS: { lon: +lon.toFixed(6), lat: +lat.toFixed(6) },
                MGRS: lat >= -80 && lat <= 84 ? mgrs.forward([lon, lat], 4) : '' }))
        })
        return () => {
            ++collectSequence.current; ++rasterLoadTokenRef.current
            if (debounceTimer.current) clearTimeout(debounceTimer.current)
            move?.remove?.(); mapView.destroy(); mapRef.current = null
        }
    }, [])

    const memoGeomList = React.useMemo(() => geometryList, [geometryList])
    const memoRasterList = React.useMemo(() => rasterList, [rasterList])
    const handleChange = React.useCallback((type: string, index: any) => { setListAction({ type, index }) }, [])

    return (
        <div className={`mapArea ${clean || comparing ? "sv-full-info" : ""}`}>
            <div className="sv-map-actions">
            {view && importantAreas.current && <MapTools view={view} layer={importantAreas.current} tool={tool} clean={clean} lang={getLang}
                onComplete={() => setTool('edit')} onChanged={syncGeometry} />}


            </div>
            {view && <ZoomControls view={view} clean={clean} onCleanChange={onCleanChange} lang={getLang} />}
            {view && <RasterComparison view={view} active={comparing} clean={clean} currentUrl={getUrl} lang={getLang} polygonLayer={importantAreas.current} geometryVersion={geometryList} rasters={rasters}
                onLayers={(layers, swipe) => { comparison.current = { layers, swipe } }} />}

            {catalogError && !clean && <div className="sv-map-status" role="alert">{getLang === 'EN' ? "Unable to load the image catalog." : (getLang === 'RU' ? 'Не удалось получить каталог изображений.' : 'Tasvirlar katalogini yuklab bo‘lmadi.')} <button onClick={() => debouncedCollect(whereRef.current)}>{getLang === 'EN' ? "Retry" : (getLang === 'RU' ? 'Повторить' : 'Qayta urinish')}</button></div>}
            {!getUrl && !clean && <div className="sv-map-status" role="alert">{getLang === 'EN' ? 'No mosaic layers configured. Import or add ImageServer layers in the widget settings.' : (getLang === 'RU' ? 'Слои мозаики не настроены. Загрузите JSON или добавьте ImageServer-слои в настройках виджета.' : 'Mozaika qatlamlari sozlanmagan. JSON faylini yuklang yoki vidjet sozlamalarida ImageServer qatlamlarini qo‘shing.')}</div>}
            <div ref={mapContainerRef} className="mapCanvas" />
            {rasterLoading && (
                <div className="mapRasterLoader" aria-busy="true">
                    <div className="mapRasterLoaderCard" role="status">
                        <Loader variant="compact" ariaLabel={getLang === 'EN' ? 'Raster is loading' : (getLang === 'RU' ? 'Растр загружается' : 'Rastr yuklanmoqda')} />
                        <div className="mapRasterLoaderText">
                            <strong>{getLang === 'EN' ? 'Raster is loading' : (getLang === 'RU' ? 'Растр загружается' : 'Rastr yuklanmoqda')}</strong>
                            <span>{getLang === 'EN' ? 'Please wait. The map has not frozen.' : (getLang === 'RU' ? 'Пожалуйста, подождите. Карта не зависла.' : 'Iltimos, kuting. Xarita qotib qolmagan.')}</span>
                        </div>
                    </div>
                </div>
            )}
            <div className="sv-catalog" hidden={clean || comparing}><LeftArea geomList={memoGeomList} rasterList={memoRasterList} onChange={handleChange} getTheme={getTheme} getLang={getLang} isReady={getReady} /></div>

            {view && <BottomArea viewMap={view} mapData={mapData} onChange={setMapData} getTheme={getTheme} />}

            {view && (
                <RightArea
                    clean={clean}
                    onCompare={() => { if (!getUrl) return; setComparing(v => !v); setTool("none") }}
                    activeTool={tool}
                    comparisonActive={comparing}
                    hasPolygons={geometryList.length > 0}
                    map={view}
                    overlayMap={OverlayLayer.current}
                    // Колбэк: RightArea сообщает о каждом togglee видимости overlay
                    onOverlayVisibleChange={(visible: boolean) => {
                        overlayVisibleRef.current = visible
                        const overlay = OverlayLayer.current
                        if (!visible || !overlay || !view) {
                            if (!visible) {
                                ++rasterLoadTokenRef.current
                                setRasterLoading(false)
                            }
                            return
                        }
                        const loadToken = ++rasterLoadTokenRef.current
                        setRasterLoading(true)
                        void (async () => {
                            try {
                                await overlay.load()
                                await waitForRasterDisplay(view, overlay, loadToken)
                            } catch (err) {
                                console.warn('Failed to display raster base:', err)
                            } finally {
                                if (loadToken === rasterLoadTokenRef.current) setRasterLoading(false)
                            }
                        })()
                    }}
                    onChange={(type: string) => {
                        if (type === "Import") {
                            onChange("Import", "Import")
                        } else {
                            setTool(type)
                            onChange(type, type)
                        }
                    }}
                    getTheme={getTheme}
                    getLang={getLang}
                />
            )}
        </div>
    )
}
