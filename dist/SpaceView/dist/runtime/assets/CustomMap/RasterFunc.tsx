import ImageryLayer from "@arcgis/core/layers/ImageryLayer"
import type GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"
import esriRequest from "@arcgis/core/request"
import type Extent from "@arcgis/core/geometry/Extent"
import type Polygon from "@arcgis/core/geometry/Polygon"
import * as projection from "@arcgis/core/geometry/projection"
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine"
import type { RasterSource } from "../../config"

import { appendArcgisToken, ensureSgmRasterAuth } from "../../sgmAuth"

interface CollectRastersOptions {
    mosaics: RasterSource[];
    polygonLayer: GraphicsLayer;
    outFields: string[];
    where?: string;
    setRasterList: (items: any[]) => void;
    isReady: (readyState: boolean) => void;
    isCurrent?: () => boolean;
}

interface CollectComparisonRastersOptions {
    source: RasterSource;
    polygonLayer: GraphicsLayer;
    isCurrent?: () => boolean;
    onUpdate?: (items: any[]) => void;
}

const THUMBNAIL_SIZE = 200
const THUMBNAIL_BATCH_SIZE = 12

function isValidExtent(ext: Extent) {
    return (
        ext &&
        isFinite(ext.xmin) &&
        isFinite(ext.ymin) &&
        isFinite(ext.xmax) &&
        isFinite(ext.ymax) &&
        ext.xmin < ext.xmax &&
        ext.ymin < ext.ymax
    )
}

async function normalizeExtent(ext: Extent): Promise<Extent | null> {
    if (!isValidExtent(ext)) return null

    if (ext.spatialReference?.wkid === 4326) return ext

    if (!projection.isLoaded()) await projection.load()

    try {
        return projection.project(ext, { wkid: 4326 }) as Extent
    } catch {
        return null
    }
}

// exportImage supports a per-request mosaic rule without mutating the visible layer.
async function getRasterThumbnail(imageLayer: ImageryLayer, extent: Extent, id: number) {
    const exportUrl = `${imageLayer.url}/exportImage`
    const params = {
        f: "json",
        bbox: `${extent.xmin},${extent.ymin},${extent.xmax},${extent.ymax}`,
        bboxSR: "4326",
        imageSR: "4326",
        size: `${THUMBNAIL_SIZE},${THUMBNAIL_SIZE}`,
        format: "png",
        mosaicRule: JSON.stringify({
            mosaicMethod: "esriMosaicLockRaster",
            lockRasterIds: [id],
        })
    }

    try {
        const response = await esriRequest(appendArcgisToken(exportUrl), {
            query: params,
            responseType: "json",
        })
        const href = (response.data as { href?: string })?.href
        return href ? appendArcgisToken(href) : null
    } catch (err) {
        console.warn("exportImage thumbnail failed for OBJECTID:", id, err)
        return null
    }
}

function getOuterRing(polygon: Polygon | null, extent: Extent): number[][] {
    if (polygon?.rings?.[0]?.length) {
        return polygon.rings[0]
    }

    return [
        [extent.xmin, extent.ymin],
        [extent.xmin, extent.ymax],
        [extent.xmax, extent.ymax],
        [extent.xmax, extent.ymin],
        [extent.xmin, extent.ymin],
    ]
}

function normalizeWhere(where?: string) {
    if (typeof where === "string" && where.trim().length > 0) {
        return `(${where}) AND Name NOT LIKE 'Ov%'`
    }
    return "Name NOT LIKE 'Ov%'"
}

function isOverviewRaster(attributes: Record<string, any>) {
    const category = Number(attributes?.Category ?? attributes?.CATEGORY ?? attributes?.category)
    const categoryText = String(attributes?.Category ?? attributes?.CATEGORY ?? attributes?.category ?? '')
    const name = String(attributes?.Name ?? attributes?.NAME ?? attributes?.name ?? '')
    return category === 2 || /overview|pyramid/i.test(categoryText) || /^ov(?:[_\-\s]|$)/i.test(name) || /overview|pyramid/i.test(name)
}

function areaSqKm(geometry: __esri.Geometry): number {
    try {
        const geodesic = Math.abs(geometryEngine.geodesicArea(geometry as Polygon, 'square-kilometers'))
        if (Number.isFinite(geodesic)) return geodesic
    } catch { /* use planar fallback */ }
    try {
        const planar = Math.abs(geometryEngine.planarArea(geometry as Polygon, 'square-kilometers'))
        return Number.isFinite(planar) ? planar : 0
    } catch { return 0 }
}

async function projectLike(geometry: __esri.Geometry, target: __esri.SpatialReference): Promise<__esri.Geometry | null> {
    if (geometry.spatialReference?.equals(target)) return geometry
    if (!projection.isLoaded()) await projection.load()
    try { return projection.project(geometry, target) as __esri.Geometry } catch { return null }
}

export async function collectRastersFromMosaic({
    mosaics,
    polygonLayer,
    outFields,
    where,
    setRasterList,
    isReady,
    isCurrent = () => true
}: CollectRastersOptions) {
    if (!mosaics?.length || !polygonLayer) {
        setRasterList([])
        isReady(true)
        return
    }

    const visiblePolygons = polygonLayer.graphics.toArray()
        .map((graphic, polygonIndex) => ({ graphic, polygonIndex }))
        .filter(item => item.graphic.visible)
    if (!visiblePolygons.length) {
        setRasterList([]); isReady(true); return
    }
    const collected: any[] = []
    for (let mosaicIndex = 0; mosaicIndex < mosaics.length; mosaicIndex++) {
      const source = mosaics[mosaicIndex]
      const imageLayer = new ImageryLayer({ url: source.url, visible: false })
      ensureSgmRasterAuth(imageLayer.url)
      try { await imageLayer.load() } catch (err) { console.warn('Mosaic catalog unavailable:', source.name, err); continue }
      if (!isCurrent()) return

      for (let visibleIndex = 0; visibleIndex < visiblePolygons.length; visibleIndex++) {
        const { graphic, polygonIndex } = visiblePolygons[visibleIndex]
        const query: any = {
            geometry: graphic.geometry,
            spatialRelationship: "intersects",
            returnGeometry: true,
            outFields,
            where: normalizeWhere(where),
        };

        // Fetch by IDs in bounded batches so server record limits do not truncate the catalog.
        const ids = await imageLayer.queryObjectIds(query)
        if (!isCurrent()) return
        const features: __esri.Graphic[] = []
        for (let start = 0; start < ids.length; start += 200) {
            const batch = await imageLayer.queryRasters({ ...query, objectIds: ids.slice(start, start + 200) })
            if (!isCurrent()) return
            features.push(...batch.features)
        }
        const result = { features };

        for (const f of result.features) {
            const attrs = { ...(f.attributes ?? {}) }
            const id = attrs[imageLayer.objectIdField || "OBJECTID"]
            if (id == null) continue

            const geom = f.geometry;
            if (!geom || !geom.extent) continue;

            // The drawn polygon is only a spatial filter. Keep the complete
            // source footprint so the raster is displayed and zoomed to whole.
            const displayPolygon = geom.type === "polygon" ? geom as Polygon : null
            const sourceExtent = geom.extent
            const extent = await normalizeExtent(sourceExtent);
            if (!isCurrent()) return
            if (!extent) continue;

            const ring = getOuterRing(displayPolygon, extent)
            const rings = displayPolygon?.rings?.length ? displayPolygon.rings : [ring]

            const polygonForIntersection = await projectLike(graphic.geometry, geom.spatialReference)
            const polygonArea = polygonForIntersection ? areaSqKm(polygonForIntersection) : 0
            let coveredArea = 0
            try {
                const intersection = polygonForIntersection ? geometryEngine.intersect(polygonForIntersection, geom) as Polygon : null
                coveredArea = intersection ? areaSqKm(intersection) : 0
            } catch { coveredArea = 0 }
            const coverage = polygonArea > 0 ? Math.min(100, coveredArea / polygonArea * 100) : 0
            collected.push({
                key: `${source.id}:${polygonIndex}:${id}`,
                id,
                visible: false,
                mosaicId: source.id,
                mosaicName: source.name,
                mosaicUrl: source.url,
                mosaicIndex,
                polygonIndex,
                polygonId: graphic.attributes?.polygonId,
                polygonName: graphic.attributes?.name || `Polygon ${polygonIndex + 1}`,
                polygonGeometry: graphic.geometry,
                coverage,
                coveredArea,
                polygonArea,
                footprintArea: displayPolygon ? areaSqKm(displayPolygon) : Math.abs(extent.width * extent.height),
                attributes: attrs,
                thumbnail: null,
                ring,
                rings,
                spatialReference: displayPolygon?.spatialReference ?? extent.spatialReference,
                _extent: extent
            });
        }
      }
    }
    const tempList = collected;

    setRasterList(tempList);

    if (tempList.length === 0) {
        isReady(true);
        return;
    }

    const updatedList = [...tempList];

    for (let start = 0; start < updatedList.length; start += THUMBNAIL_BATCH_SIZE) {
        if (!isCurrent()) return
        const batch = updatedList.slice(start, start + THUMBNAIL_BATCH_SIZE)

        await Promise.all(
            batch.map(async (item, batchIndex) => {
                const index = start + batchIndex
                try {
                    const thumbnailLayer = new ImageryLayer({ url: item.mosaicUrl, visible: false })
                    const thumbnail = await getRasterThumbnail(thumbnailLayer, item._extent, item.id)
                    if (thumbnail) {
                        updatedList[index].thumbnail = thumbnail
                    }
                } catch (err) {
                    console.warn("Failed to load thumbnail for OBJECTID:", item.id, err)
                }
            })
        )

        if (!isCurrent()) return
        setRasterList([...updatedList])
    }

    const finalList = updatedList.map(({ _extent, ...rest }) => rest);
    setRasterList(finalList);
    isReady(true);
}

/**
 * Returns unique source rasters for one comparison side. When visible polygons
 * exist, the mosaic catalog is spatially limited to rasters intersecting at
 * least one of them and pyramid/overview records are excluded. Without
 * polygons the complete catalog, including pyramids, is returned so the
 * comparison can use the service's native overview hierarchy.
 */
export async function collectComparisonRasters({
    source,
    polygonLayer,
    isCurrent = () => true,
    onUpdate = () => undefined
}: CollectComparisonRastersOptions): Promise<any[]> {
    if (!source?.url || !polygonLayer) return []

    const imageLayer = new ImageryLayer({ url: source.url, visible: false })
    ensureSgmRasterAuth(imageLayer.url)

    try {
        await imageLayer.load()
        if (!isCurrent()) return []

        const polygons = polygonLayer.graphics.toArray()
            .filter(graphic => graphic.visible && graphic.geometry?.type === 'polygon')
        const queryGeometries: Array<__esri.Geometry | undefined> = polygons.length
            ? polygons.map(graphic => graphic.geometry)
            : [undefined]
        const featuresById = new Map<number, __esri.Graphic>()

        for (const geometry of queryGeometries) {
            const query: any = {
                returnGeometry: true,
                outFields: ['*'],
                where: polygons.length ? normalizeWhere() : '1=1'
            }
            if (geometry) {
                query.geometry = geometry
                query.spatialRelationship = 'intersects'
            }

            const ids = await imageLayer.queryObjectIds(query)
            if (!isCurrent()) return []
            for (let start = 0; start < ids.length; start += 200) {
                const batch = await imageLayer.queryRasters({ ...query, objectIds: ids.slice(start, start + 200) })
                if (!isCurrent()) return []
                for (const feature of batch.features) {
                    const id = Number(feature.attributes?.[imageLayer.objectIdField || 'OBJECTID'])
                    if (Number.isFinite(id)) featuresById.set(id, feature)
                }
            }
        }

        const items: any[] = []
        for (const [id, feature] of featuresById) {
            const extent = feature.geometry?.extent ? await normalizeExtent(feature.geometry.extent) : null
            if (!isCurrent()) return []
            const attributes = { ...(feature.attributes || {}) }
            if (polygons.length && isOverviewRaster(attributes)) continue
            items.push({
                key: `${source.id}:${id}`,
                id,
                visible: true,
                mosaicId: source.id,
                mosaicName: source.name,
                mosaicUrl: source.url,
                attributes,
                isOverview: isOverviewRaster(attributes),
                geometry: feature.geometry,
                thumbnail: null,
                _extent: extent
            })
        }

        const dateValue = (item: any) => Number(new Date(item.attributes?.Sana || item.attributes?.AcquisitionDate || 0)) || 0
        items.sort((a, b) => dateValue(b) - dateValue(a) || b.id - a.id)
        if (!polygons.length) {
            console.info(`[SpaceView][Comparison] ${source.name} catalog`, {
                rasters: items.length,
                pyramids: items.filter(item => item.isOverview).length,
                withoutFootprint: items.filter(item => !item.geometry).length,
                nativePyramidSelection: true
            })
        }
        onUpdate([...items])

        for (let start = 0; start < items.length; start += THUMBNAIL_BATCH_SIZE) {
            const batch = items.slice(start, start + THUMBNAIL_BATCH_SIZE)
            await Promise.all(batch.map(async item => {
                if (!item._extent) return
                const thumbnail = await getRasterThumbnail(imageLayer, item._extent, item.id)
                if (thumbnail) item.thumbnail = thumbnail
            }))
            if (!isCurrent()) return []
            onUpdate(items.map(({ _extent, ...item }) => ({ ...item })))
        }

        return items.map(({ _extent, ...item }) => item)
    } catch (err) {
        console.warn('Comparison mosaic catalog unavailable:', source.name, err)
        throw err
    } finally {
        imageLayer.destroy()
    }
}
