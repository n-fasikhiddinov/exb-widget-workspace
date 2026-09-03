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
import Polygon from "@arcgis/core/geometry/Polygon"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol"
import Polyline from "@arcgis/core/geometry/Polyline"
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol"
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol"
import TextSymbol from "@arcgis/core/symbols/TextSymbol"

import LeftArea from "./LeftArea/LeftArea"
import BottomArea from "./BottomArea/BottomArea"
import RightArea from "./RightArea/RightArea"
import { collectRastersFromMosaic } from "./RasterFunc"
import { getImageryLayerOptions } from "../../sgmAuth"
import Loader from "../../components/Loader/Loader"

import * as mgrs from "mgrs"

interface customMapProps {
    getUrl: string
    headerInfo: any[]
    file: any
    getTheme: string
    getLang: string
    onChange: (type: string, data: any) => void
}

export default function CustomMap({
    getUrl,
    headerInfo,
    file,
    getTheme,
    onChange,
    getLang
}: customMapProps) {
    const [getReady, setReady] = React.useState(true)
    const themeRef = React.useRef(getTheme)
    const typeRef = React.useRef("none")
    const mousePointRef = React.useRef<GraphicsLayer | null>(null)
    const importantAreas = React.useRef<GraphicsLayer | null>(null)
    const mosaicLayers = React.useRef<ImageryLayer | null>(null)
    const mapContainerRef = React.useRef<HTMLDivElement>(null)
    const rasterPolygon = React.useRef<GraphicsLayer | null>(null)
    const lineLayer = React.useRef<GraphicsLayer | null>(null)
    const lineTextLayer = React.useRef<GraphicsLayer | null>(null)
    const OverlayLayer = React.useRef<ImageryLayer | null>(null)
    const mapRef = React.useRef<Map | null>(null)

    // Единственный источник истины для видимости overlay.
    // Ref — чтобы не вызывать ре-рендер при каждом togglee,
    // и чтобы эффект смены URL всегда читал актуальное значение.
    const overlayVisibleRef = React.useRef(false)

    const polygonSymbol = React.useRef<SimpleFillSymbol>(new SimpleFillSymbol({
        color: [55, 115, 213, 0],
        outline: { color: [55, 115, 213, 0.6], width: 2 }
    }))
    const polygonHoverSymbol = React.useRef<SimpleFillSymbol>(new SimpleFillSymbol({
        color: [255, 115, 20, 0],
        outline: { color: [255, 115, 20, 0.6], width: 2 }
    }))
    const lineSymbol = new SimpleLineSymbol({ color: [55, 115, 213, 0.9], width: 3 })
    const linePointSymbol = new SimpleMarkerSymbol({
        style: "circle", size: 8, color: [255, 255, 255, 1],
        outline: { color: [55, 115, 213, 0.9], width: 2 }
    })

    const [view, setView] = React.useState<MapView | null>(null)
    const [rasterLoading, setRasterLoading] = React.useState(false)
    const rasterLoadTokenRef = React.useRef(0)
    const [geometryList, setGeometryList] = React.useState<any[]>([])
    const [rasterList, setRasterList] = React.useState<any[]>([])
    const [getListAction, setListAction] = React.useState({ type: "none", index: -1 })
    const [mapData, setMapData] = React.useState<dataStruct>({
        GCS: { lon: 61.696894, lat: 41.408488 },
        MGRS: "", mapScale: 1, mapZoom: 1
    })

    const getDefaultBasemap = React.useCallback(
        () => getThemeBasemap(themeRef.current),
        []
    )

    const createMeasureTextSymbol = React.useCallback((text: string, size: number) => {
        const isDarkTheme = themeRef.current === "Dark"

        return new TextSymbol({
            text,
            color: isDarkTheme ? "#f8fafc" : "#0f172a",
            haloColor: isDarkTheme ? "#020617" : "#ffffff",
            haloSize: 2,
            font: { size, weight: "bold" }
        })
    }, [])

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
        if (debounceTimer.current) clearTimeout(debounceTimer.current)
        debounceTimer.current = window.setTimeout(async () => {
            setReady(false)
            await collectRastersFromMosaic({
                mosaic: mosaicLayers.current,
                polygonLayer: importantAreas.current,
                outFields: ["*"],
                setRasterList,
                where,
                isReady: (readyState: boolean) => { setReady(readyState) }
            })
        }, 300)
    }, [])

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
        const layer = mosaicLayers.current
        const mapView = view
        if (!layer) return

        const loadToken = ++rasterLoadTokenRef.current
        const visibleIDs = list.filter((r: any) => r.visible).map((r: any) => r.id)

        if (visibleIDs.length === 0) {
            layer.mosaicRule = new MosaicRule({ method: "attribute", where: "1=0" })
            layer.visible = false
            setRasterLoading(false)
            return
        }

        setRasterLoading(true)

        try {
            await layer.load()
            if (loadToken !== rasterLoadTokenRef.current) return

            layer.mosaicRule = new MosaicRule({
                method: "lock-raster",
                lockRasterIds: visibleIDs,
            })
            layer.visible = true

            if (mapView) {
                await waitForRasterDisplay(mapView, layer, loadToken, options?.zoomTo)
            }
        } catch (err) {
            console.warn("Failed to apply raster display:", err)
        } finally {
            if (loadToken === rasterLoadTokenRef.current) {
                setRasterLoading(false)
            }
        }
    }, [view, waitForRasterDisplay])

    // ─── Смена URL ────────────────────────────────────────────────────────────
    React.useEffect(() => {
        if (!mapRef.current || !getUrl) return

        const map = mapRef.current

        // Читаем видимость до уничтожения слоя
        const wasVisible = OverlayLayer.current?.visible ?? overlayVisibleRef.current

        if (mosaicLayers.current) { map.remove(mosaicLayers.current); mosaicLayers.current.destroy() }
        if (OverlayLayer.current) { map.remove(OverlayLayer.current); OverlayLayer.current.destroy() }

        const newMosaic = new ImageryLayer(getImageryLayerOptions(getUrl, {
            mosaicRule: new MosaicRule({ method: "attribute", where: whereRef.current || "1=0" }),
            
        }) as __esri.ImageryLayerProperties)
        // Восстанавливаем видимость
        const newOverlay = new ImageryLayer(getImageryLayerOptions(getUrl, {
            visible: wasVisible,
            
        }) as __esri.ImageryLayerProperties)

        mosaicLayers.current = newMosaic
        OverlayLayer.current = newOverlay
        overlayVisibleRef.current = wasVisible

        const idx = map.layers.indexOf(importantAreas.current)
        map.add(newOverlay, idx)
        map.add(newMosaic, idx)

        setRasterList([])
        debouncedCollect(whereRef.current)
    }, [getUrl])

    function haversineDistance(p1: Point, p2: Point): number {
        const R = 6371000
        const toRad = (d: number) => d * Math.PI / 180
        const dLat = toRad(p2.latitude - p1.latitude)
        const dLon = toRad(p2.longitude - p1.longitude)
        const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(p1.latitude)) * Math.cos(toRad(p2.latitude)) * Math.sin(dLon / 2) ** 2
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    }

    React.useEffect(() => {
        async function run() {
            if (!file || file.length === 0) return
            const newGeometries: any[] = []
            const addedGraphics: Graphic[] = []

            file.forEach((item: any) => {
                if (item.type === "Polygon") {
                    const newGeo = new Graphic({
                        geometry: new Polygon({ rings: item.coordinates }),
                        symbol: polygonSymbol.current,
                        attributes: { name: item.name || "FilePolygon" }
                    })
                    importantAreas.current?.add(newGeo)
                    addedGraphics.push(newGeo)
                    newGeometries.push({
                        name: newGeo.attributes.name, visible: true,
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
        run()
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
                setReady(false)
                await collectRastersFromMosaic({
                    mosaic: mosaicLayers.current, polygonLayer: importantAreas.current,
                    outFields: ["*"], setRasterList,
                    where: whereRef.current,
                    isReady: (readyState: boolean) => { setReady(readyState) }
                })
            }
            if (getListAction.type[0] === 'r') setRasterList([...activList])
        }

        run()
    }, [getListAction])

    React.useEffect(() => {
        if (!view) return
        if (headerInfo[0] === "address") {
            view.goTo({ center: new Extent(headerInfo[1]) }, { duration: 500, easing: "ease-in-out" })
        }
    }, [headerInfo, view])

    React.useEffect(() => {
        let geoPoints: number[][] = []
        let previewLine: Graphic | null = null
        let currentLineId: number | null = null

        if (!mapContainerRef.current) return

        const map = new Map({ basemap: getDefaultBasemap() })
        mapRef.current = map

        const mapView = new MapView({
            map, container: mapContainerRef.current,
            center: [mapData.GCS.lon, mapData.GCS.lat],
            scale: 4500000,
            constraints: { minZoom: 3, maxZoom: 20, snapToZoom: false },
            ui: { components: [] }
        })

        mosaicLayers.current = new ImageryLayer(getImageryLayerOptions(getUrl, {
            mosaicRule: new MosaicRule({ method: "attribute", where: "1=0" }),
            
        }) as __esri.ImageryLayerProperties)
        OverlayLayer.current = new ImageryLayer(getImageryLayerOptions(getUrl, {
            visible: false,
            
        }) as __esri.ImageryLayerProperties)

        importantAreas.current = new GraphicsLayer({ id: "ImportantAreas" })
        rasterPolygon.current = new GraphicsLayer({ id: "rasterPolygon" })
        mousePointRef.current = new GraphicsLayer({ id: "mousePoint", visible: false })
        lineLayer.current = new GraphicsLayer({ id: "LineLayer" })
        lineTextLayer.current = new GraphicsLayer({ id: "LineTextLayer" })

        const hoverGraphic = new Graphic({ geometry: new Polygon({ rings: [[]] }), symbol: polygonSymbol.current, attributes: { name: "preview" } })
        const hoverRasterGraphic = new Graphic({ geometry: new Polygon({ rings: [[]] }), symbol: polygonHoverSymbol.current, visible: false })
        const clickedRasterGraphic = new Graphic({
            geometry: new Polygon({ rings: [[]] }),
            symbol: new SimpleFillSymbol({ color: [255, 140, 0, 0.2], outline: { color: [255, 100, 0, 1], width: 3 } }),
            visible: false
        })

        rasterPolygon.current.add(hoverRasterGraphic)
        rasterPolygon.current.add(clickedRasterGraphic)
        mousePointRef.current.add(hoverGraphic)

        map.add(lineLayer.current)
        map.add(lineTextLayer.current)
        map.add(OverlayLayer.current)
        map.add(mosaicLayers.current)
        map.add(importantAreas.current)
        map.add(rasterPolygon.current)
        map.add(lineLayer.current)
        map.add(lineTextLayer.current)
        map.add(mousePointRef.current)

        setView(mapView)

        const keyD = mapView.on("key-down", (event: __esri.ViewKeyDownEvent) => {
            if (event.key === "Escape") {
                geoPoints = []
                const hover = mousePointRef.current?.graphics.getItemAt(0)
                if (hover) hover.geometry = null
                previewLine = null
                lineLayer.current?.removeAll()
                lineTextLayer.current?.removeAll()
            }
        })

        const dbl = mapView.on("double-click", async (event: any) => {
            event.stopPropagation()
            const p = mapView.toMap(event)
            let newGraphic: Graphic | null = null

            if (typeRef.current === "Polygon" && geoPoints.length > 1) {
                newGraphic = new Graphic({ geometry: new Polygon({ rings: [[...geoPoints, [p.longitude, p.latitude]]], spatialReference: { wkid: 4326 } }), symbol: hoverGraphic.symbol, attributes: { name: "Polygon" } })
            } else if (typeRef.current === "Circle" && geoPoints.length === 1) {
                const center = new Point({ longitude: geoPoints[0][0], latitude: geoPoints[0][1], spatialReference: { wkid: 4326 } })
                newGraphic = new Graphic({ geometry: geometryEngine.geodesicBuffer(center, haversineDistance(center, p), "meters") as Polygon, symbol: hoverGraphic.symbol, attributes: { name: "Circle" } })
            } else if (typeRef.current === "Reactangle" && geoPoints.length === 1) {
                newGraphic = new Graphic({ geometry: new Polygon({ rings: [[[...geoPoints[0]], [geoPoints[0][0], p.latitude], [p.longitude, p.latitude], [p.longitude, geoPoints[0][1]]]], spatialReference: { wkid: 4326 } }), symbol: hoverGraphic.symbol, attributes: { name: "Rectangle" } })
            } else if (typeRef.current === "line" && geoPoints.length >= 1) {
                lineLayer.current?.removeAll(); lineTextLayer.current?.removeAll(); previewLine = null; currentLineId = null
            } else if (typeRef.current === "area") {
                geoPoints = []; previewLine = null; currentLineId = null
                lineLayer.current?.removeAll(); lineTextLayer.current?.removeAll()
                return
            }

            geoPoints = []
            if (!newGraphic) return

            importantAreas.current.add(newGraphic)
            const area = newGraphic.geometry instanceof Polygon
                ? Math.abs(geometryEngine.geodesicArea(newGraphic.geometry, "square-kilometers")).toFixed(3)
                : 0
            setGeometryList((prev: any) => [...prev, { name: newGraphic.attributes.name, visible: true, area }])
            debouncedCollect(getListAction.index)
        })

        const clickEv = mapView.on("click", (event: any) => {
            if (typeRef.current === "none" || typeRef.current === "address") return
            if (typeRef.current !== "Polygon" && typeRef.current !== "line" && typeRef.current !== "area" && geoPoints.length === 1) return

            if (typeRef.current === "line") {
                if (geoPoints.length === 0) currentLineId = Date.now()
                const newPoint = [event.mapPoint.longitude, event.mapPoint.latitude]
                geoPoints.push(newPoint)
                lineLayer.current?.add(new Graphic({ geometry: new Point({ longitude: newPoint[0], latitude: newPoint[1], spatialReference: { wkid: 4326 } }), symbol: linePointSymbol, attributes: { type: "line-point", lineId: currentLineId } }))
                if (geoPoints.length >= 2) {
                    const p1 = geoPoints[geoPoints.length - 2], p2 = geoPoints[geoPoints.length - 1]
                    const dist = geometryEngine.geodesicLength(new Polyline({ paths: [[p1, p2]], spatialReference: { wkid: 4326 } }), "meters")
                    lineTextLayer.current?.add(new Graphic({ geometry: new Point({ longitude: (p1[0] + p2[0]) / 2, latitude: (p1[1] + p2[1]) / 2, spatialReference: { wkid: 4326 } }), symbol: createMeasureTextSymbol(dist > 1000 ? `${(dist / 1000).toFixed(2)} км` : `${dist.toFixed(1)} м`, 12), attributes: { type: "line-text", lineId: currentLineId, segmentIndex: geoPoints.length - 2 } }))
                }
                return
            }

            if (typeRef.current === "area") {
                if (geoPoints.length === 0) currentLineId = Date.now()
                const newPoint = [event.mapPoint.longitude, event.mapPoint.latitude]
                geoPoints.push(newPoint)
                lineLayer.current?.add(new Graphic({ geometry: new Point({ longitude: newPoint[0], latitude: newPoint[1], spatialReference: { wkid: 4326 } }), symbol: linePointSymbol, attributes: { type: "line-point", lineId: currentLineId } }))
                return
            }

            geoPoints.push([event.mapPoint.longitude, event.mapPoint.latitude])
        })

        const moveEv = mapView.on("pointer-move", (event: any) => {
            const p = mapView.toMap(event)
            lineTextLayer.current?.graphics.filter((g: any) => g.attributes?.type === "line-text-preview").forEach((g: any) => { lineTextLayer.current?.remove(g) })
            if (!p) return

            if (typeRef.current === "Polygon") {
                hoverGraphic.geometry = new Polygon({ rings: [[...geoPoints, [p.longitude, p.latitude]]], spatialReference: { wkid: 4326 } })
            } else if (typeRef.current === "Circle" && geoPoints.length === 1) {
                const center = new Point({ longitude: geoPoints[0][0], latitude: geoPoints[0][1], spatialReference: { wkid: 4326 } })
                hoverGraphic.geometry = geometryEngine.geodesicBuffer(center, haversineDistance(center, p), "meters") as Polygon
            } else if (typeRef.current === "Reactangle" && geoPoints.length === 1) {
                hoverGraphic.geometry = new Polygon({ rings: [[[...geoPoints[0]], [geoPoints[0][0], p.latitude], [p.longitude, p.latitude], [p.longitude, geoPoints[0][1]]]], spatialReference: { wkid: 4326 } })
            } else if (typeRef.current === "line") {
                const pts = geoPoints.length === 0 ? [[p.longitude, p.latitude]] : [...geoPoints, [p.longitude, p.latitude]]
                const polyline = new Polyline({ paths: [pts], spatialReference: { wkid: 4326 } })
                if (!previewLine) { previewLine = new Graphic({ geometry: polyline, symbol: lineSymbol }); lineLayer.current?.add(previewLine) }
                else previewLine.geometry = polyline
                if (geoPoints.length >= 1) {
                    const last = geoPoints[geoPoints.length - 1], curr = [p.longitude, p.latitude]
                    const dist = geometryEngine.geodesicLength(new Polyline({ paths: [[last, curr]], spatialReference: { wkid: 4326 } }), "meters")
                    lineTextLayer.current?.add(new Graphic({ geometry: new Point({ longitude: (last[0] + curr[0]) / 2, latitude: (last[1] + curr[1]) / 2, spatialReference: { wkid: 4326 } }), symbol: createMeasureTextSymbol(dist > 1000 ? `${(dist / 1000).toFixed(2)} км` : `${dist.toFixed(1)} м`, 12), attributes: { type: "line-text-preview", lineId: currentLineId } }))
                }
            } else if (typeRef.current === "area") {
                if (geoPoints.length === 0) return
                const pts = [...geoPoints, [p.longitude, p.latitude]]
                if (!previewLine || !(previewLine.geometry instanceof Polygon)) {
                    if (previewLine) lineLayer.current?.remove(previewLine)
                    previewLine = new Graphic({ geometry: new Polygon({ rings: [pts], spatialReference: { wkid: 4326 } }), symbol: polygonSymbol.current })
                    lineLayer.current?.add(previewLine)
                } else {
                    previewLine.geometry = new Polygon({ rings: [pts], spatialReference: { wkid: 4326 } })
                    previewLine.symbol = polygonSymbol.current
                }
                const area = Math.abs(geometryEngine.geodesicArea(previewLine.geometry as Polygon, "square-kilometers"))
                lineTextLayer.current?.removeAll()
                lineTextLayer.current?.add(new Graphic({ geometry: (previewLine.geometry as Polygon).centroid, symbol: createMeasureTextSymbol(`${area.toFixed(2)} км²`, 14), attributes: { type: "area-center" } }))
            } else {
                hoverGraphic.geometry = new Polygon({ rings: [[[p.longitude, p.latitude]]], spatialReference: { wkid: 4326 } })
            }

            setMapData((prev: any) => ({
                ...prev,
                GCS: { lat: p.latitude.toFixed(6), lon: p.longitude.toFixed(6) },
                MGRS: mgrs.forward([p.longitude, p.latitude], 4)
            }))
        })

        return () => {
            dbl.remove(); clickEv.remove(); moveEv.remove(); keyD.remove()
            mapView.destroy()
            mapRef.current = null
        }
    }, [])

    const memoGeomList = React.useMemo(() => geometryList, [geometryList])
    const memoRasterList = React.useMemo(() => rasterList, [rasterList])
    const handleChange = React.useCallback((type: string, index: number) => { setListAction({ type, index }) }, [])

    return (
        <div className="mapArea">
            <div ref={mapContainerRef} className="mapCanvas" />
            {rasterLoading && (
                <div className="mapRasterLoader" aria-busy="true">
                    <Loader ariaLabel="Tasvir yuklanmoqda" />
                </div>
            )}
            <LeftArea geomList={memoGeomList} rasterList={memoRasterList} onChange={handleChange} getTheme={getTheme} getLang={getLang} isReady={getReady} />

            {view && <BottomArea viewMap={view} mapData={mapData} onChange={setMapData} getTheme={getTheme} />}

            {view && (
                <RightArea
                    map={view}
                    overlayMap={OverlayLayer.current}
                    // Колбэк: RightArea сообщает о каждом togglee видимости overlay
                    onOverlayVisibleChange={(visible: boolean) => {
                        overlayVisibleRef.current = visible
                    }}
                    onChange={(type: string) => {
                        if (type === "Import") {
                            onChange("Import", "Import")
                        } else {
                            typeRef.current = type
                            if (mousePointRef.current) mousePointRef.current.visible = !(type === "none")
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
