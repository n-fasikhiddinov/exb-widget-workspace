import ImageryLayer from "@arcgis/core/layers/ImageryLayer"
import type GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"
import MosaicRule from "@arcgis/core/layers/support/MosaicRule"
import esriRequest from "@arcgis/core/request"
import type Extent from "@arcgis/core/geometry/Extent"
import type Polygon from "@arcgis/core/geometry/Polygon"
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine"
import * as projection from "@arcgis/core/geometry/projection"

import { appendArcgisToken, ensureSgmRasterAuth } from "../../sgmAuth"

interface CollectRastersOptions {
    mosaic: string | ImageryLayer;
    polygonLayer: GraphicsLayer;
    outFields: string[];
    where?: string;
    setRasterList: (items: any[]) => void;
    isReady: (readyState: boolean) => void;
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

    if (!projection.isSupported()) await projection.load()

    try {
        return projection.project(ext, { wkid: 4326 }) as Extent
    } catch {
        return null
    }
}

async function rasterImageToDataUrl(image: unknown): Promise<string | null> {
    if (!image) return null
    if (typeof image === "string") return image

    const canvas = document.createElement("canvas")

    if (image instanceof HTMLImageElement) {
        canvas.width = image.naturalWidth || image.width
        canvas.height = image.naturalHeight || image.height
        const ctx = canvas.getContext("2d")
        if (!ctx) return null
        ctx.drawImage(image, 0, 0)
        return canvas.toDataURL("image/png")
    }

    if (image instanceof HTMLCanvasElement) {
        return image.toDataURL("image/png")
    }

    if (typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
        canvas.width = image.width
        canvas.height = image.height
        const ctx = canvas.getContext("2d")
        if (!ctx) return null
        ctx.drawImage(image, 0, 0)
        return canvas.toDataURL("image/png")
    }

    return null
}

async function getRasterThumbnail(imageLayer: ImageryLayer, extent: Extent, id: number) {
    const lockRule = new MosaicRule({
        method: "lock-raster",
        lockRasterIds: [id],
    })

    try {
        const image = await imageLayer.fetchImage(extent, THUMBNAIL_SIZE, THUMBNAIL_SIZE, {
            format: "png",
            mosaicRule: lockRule,
        })
        const dataUrl = await rasterImageToDataUrl(image)
        if (dataUrl) return dataUrl
    } catch (err) {
        console.warn("fetchImage thumbnail failed for OBJECTID:", id, err)
    }

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
        }),
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

function getDisplayGeometry(rasterGeom: any, areaGeom: any): Polygon | null {
    if (!rasterGeom) return null

    if (areaGeom?.type === "polygon" && rasterGeom.type === "polygon") {
        try {
            const intersection = geometryEngine.intersect(rasterGeom as Polygon, areaGeom as Polygon)
            if (intersection?.type === "polygon") {
                return intersection as Polygon
            }
        } catch {
            // fallback to raster geometry
        }
    }

    return rasterGeom.type === "polygon" ? rasterGeom as Polygon : null
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
        return `${where} AND Name NOT LIKE 'Ov%'`
    }
    return "Name NOT LIKE 'Ov%'"
}

export async function collectRastersFromMosaic({
    mosaic,
    polygonLayer,
    outFields,
    where,
    setRasterList,
    isReady
}: CollectRastersOptions) {
    if (!mosaic || !polygonLayer) {
        setRasterList([])
        isReady(true)
        return
    }

    const imageLayer =
        typeof mosaic === "string"
            ? new ImageryLayer({ url: mosaic, visible: true })
            : mosaic as ImageryLayer;

    ensureSgmRasterAuth(imageLayer.url)

    try {
        await imageLayer.load()
    } catch (err) {
        console.warn("Imagery layer failed to load:", err)
        setRasterList([])
        isReady(true)
        return
    }

    const visiblePolygons = polygonLayer.graphics.toArray().filter(g => g.visible);

    if (!visiblePolygons.length) {
        imageLayer.mosaicRule = new MosaicRule({ method: "attribute", where: "1=0" });
        setRasterList([]);
        isReady(true);
        return;
    }

    const rasterMap = new Map<number, any>();

    for (const graphic of visiblePolygons) {
        const query: any = {
            geometry: graphic.geometry,
            spatialRelationship: "intersects",
            returnGeometry: true,
            outFields,
            where: normalizeWhere(where),
        };

        const result = await imageLayer.queryRasters(query);

        for (const f of result.features) {
            const attrs = { ...(f.attributes ?? {}) }
            const id = attrs.OBJECTID
            if (id == null || rasterMap.has(id)) continue

            const geom = f.geometry;
            if (!geom || !geom.extent) continue;

            const displayPolygon = getDisplayGeometry(geom, graphic.geometry)
            const sourceExtent = displayPolygon?.extent ?? geom.extent
            const extent = await normalizeExtent(sourceExtent);
            if (!extent) continue;

            const ring = getOuterRing(displayPolygon, extent)
            const rings = displayPolygon?.rings?.length ? displayPolygon.rings : [ring]

            rasterMap.set(id, {
                id,
                visible: false,
                attributes: attrs,
                thumbnail: null,
                ring,
                rings,
                spatialReference: displayPolygon?.spatialReference ?? extent.spatialReference,
                _extent: extent
            });
        }
    }

    const tempList = [...rasterMap.values()];

    setRasterList(tempList);

    if (tempList.length === 0) {
        imageLayer.visible = false;
        isReady(true);
        return;
    }

    const visibleIds = tempList.filter((r) => r.visible).map((r) => r.id)
    imageLayer.mosaicRule = new MosaicRule({
        method: "attribute",
        where: visibleIds.length > 0 ? `OBJECTID IN (${visibleIds.join(",")})` : "1=0"
    });
    imageLayer.visible = visibleIds.length > 0;

    const updatedList = [...tempList];

    for (let start = 0; start < updatedList.length; start += THUMBNAIL_BATCH_SIZE) {
        const batch = updatedList.slice(start, start + THUMBNAIL_BATCH_SIZE)

        await Promise.all(
            batch.map(async (item, batchIndex) => {
                const index = start + batchIndex
                try {
                    const thumbnail = await getRasterThumbnail(imageLayer, item._extent, item.id)
                    if (thumbnail) {
                        updatedList[index].thumbnail = thumbnail
                    }
                } catch (err) {
                    console.warn("Failed to load thumbnail for OBJECTID:", item.id, err)
                }
            })
        )

        setRasterList([...updatedList])
    }

    const finalList = updatedList.map(({ _extent, ...rest }) => rest);
    setRasterList(finalList);
    isReady(true);
}
