import { React } from "jimu-core"
import "./LeftArea.css"

import CloudIcon from "../../imgs/Cloud.png"
import AngleIcon from "../../imgs/Angle.png"

import {
    allThemes,
    translate,
    type WidgetTheme,
} from "../../../config"
import { ZoomIcon, CheckIcon, DeleteIcon, LocationIcon, ImageIcon, CutIcon, RenameIcon } from '../../../icons'
import UiSelect from '../../../components/UiSelect/UiSelect'

import FilterAssetIcon from "./FilterAssetIcon"
import Popup from "../Popup/Popup"
import Loader from "../../../components/Loader/Loader"

const LeftAreaTypes = [
    "Hududlar",
    "Tasvirlar"
] as const
type LeftAreaType = typeof LeftAreaTypes[number];

function RasterThumbnail({ src, getTheme }: { src?: string; getTheme: string }) {
    const [failed, setFailed] = React.useState(false)

    React.useEffect(() => {
        setFailed(false)
    }, [src])

    const hasImage = Boolean(src?.trim()) && !failed

    if (!hasImage) {
        return (
            <div className="ItemIconPlaceholder" aria-hidden="true">
                <ImageIcon size="50%" color={`rgb(${allThemes[getTheme]["--main-muted-color-rgb"]})`} />
            </div>
        )
    }

    return (
        <img
            src={src}
            alt=""
            onError={() => setFailed(true)}
        />
    )
}

interface leftAreaProps {
    geomList: any[],
    rasterList: any[],
    onChange: (type: string, index: any) => void
    getTheme: string
    getLang: string
    isReady: boolean
}

function LeftArea({
    geomList,
    rasterList,
    onChange,
    getTheme,
    getLang,
    isReady
}: leftAreaProps) {
    const [getAction, setAction] = React.useState<{ type: string, data: any, index: number }>({
        type: "none",
        data: "",
        index: -1
    })
    const [getSelectCount, setSelectCount] = React.useState({
        count: 0,
        select: 0
    })
    const [getType, setType] = React.useState<LeftAreaType>(LeftAreaTypes[0])
    const [groupBy, setGroupBy] = React.useState<'polygon' | 'mosaic'>('polygon')
    const [sortBy, setSortBy] = React.useState<'default' | 'date' | 'coverage' | 'size'>('default')
    const [coverageOpen, setCoverageOpen] = React.useState<number | null>(null)
    const [renameIndex, setRenameIndex] = React.useState<number | null>(null)
    const [renameValue, setRenameValue] = React.useState('')
    const cancelRename = React.useRef(false)
    const listScrollRef = React.useRef<HTMLDivElement | null>(null)

    React.useEffect(() => {
        const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setAction({ type: 'none', data: '', index: -1 }) }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])
    const ListTitels: Record<LeftAreaType, string> = {
        "Hududlar": "Sizning hududlaringiz roʻyxati",
        "Tasvirlar": "Natijalar"
    }

    const popupType = (type: string, data: any, id: number, index?: number) => {
        switch (type) {
            case "info":
                if (data.OBJECTID !== getAction.index) {
                    onChange("rClicked", index)
                    setAction({ type: type, data: data, index: id })
                }
                else {
                    onChange("rClicked", -1)
                    setAction({ type: "none", data: "", index: -1 })
                }
                break;

            case "filter":
                if (type !== getAction.type) {
                    setAction({ type: type, data: "", index: -2 })
                }
                else {
                    setAction({ type: "none", data: "", index: -1 })
                }
                break;

            default:
                setAction({ type: "none", data: "", index: -1 })
                break;
        }
    }

    const dateValue = (item: any) => Number(new Date(item.attributes?.Sana || item.attributes?.AcquisitionDate || 0)) || 0
    const sortedRasters = React.useMemo(() => rasterList.map((item: any, originalIndex: number) => ({ ...item, originalIndex })).sort((a: any, b: any) => {
        if (sortBy === 'date') return dateValue(b) - dateValue(a)
        if (sortBy === 'coverage') return b.coverage - a.coverage
        if (sortBy === 'size') return b.footprintArea - a.footprintArea
        const primary = groupBy === 'polygon' ? a.polygonIndex - b.polygonIndex : b.mosaicIndex - a.mosaicIndex
        const secondary = groupBy === 'polygon' ? b.mosaicIndex - a.mosaicIndex : a.polygonIndex - b.polygonIndex
        return primary || secondary || dateValue(b) - dateValue(a) || b.footprintArea - a.footprintArea
    }), [rasterList, groupBy, sortBy])

    const polygonCoverage = (polygonIndex: number) => {
        const rows = rasterList.filter((r: any) => r.polygonIndex === polygonIndex)
        const selectedRows = rows.filter((r: any) => r.visible)
        // Before the user selects individual cards, show the coverage of all
        // matching imagery. Once a selection exists, the summary follows it.
        const effectiveRows = selectedRows.length > 0 ? selectedRows : rows
        const mosaics = [...new Map<string, string>(rows.map((r: any) => [
            String(r.mosaicId || r.mosaicName || r.mosaicUrl),
            String(r.mosaicName || r.mosaicId || 'Mosaic')
        ] as [string, string])).entries()]
        const details = mosaics.map(([mosaicKey, name]) => {
            const matching = effectiveRows.filter((r: any) => String(r.mosaicId || r.mosaicName || r.mosaicUrl) === mosaicKey)
            const allMosaicRows = rows.filter((r: any) => String(r.mosaicId || r.mosaicName || r.mosaicUrl) === mosaicKey)
            const totalArea = Number(allMosaicRows.find((r: any) => Number(r.polygonArea) > 0)?.polygonArea || geomList[polygonIndex]?.area || 0)
            const summedCoveredArea = matching.reduce((sum: number, r: any) => sum + Number(r.coveredArea || 0), 0)
            const coveredArea = totalArea > 0 ? Math.min(totalArea, summedCoveredArea) : 0
            const fallbackValue = Math.min(100, matching.reduce((sum: number, r: any) => sum + Number(r.coverage || 0), 0))
            const value = totalArea > 0 ? coveredArea / totalArea * 100 : fallbackValue
            return { name, value, coveredArea, totalArea }
        })
        const average = details.length ? details.reduce((sum, d) => sum + d.value, 0) / details.length : 0
        const totalArea = Number(details.find(d => d.totalArea > 0)?.totalArea || geomList[polygonIndex]?.area || 0)
        return { details, average, coveredArea: totalArea * average / 100, totalArea }
    }

    const formatArea = (value: unknown) => {
        const area = Number(value || 0)
        if (!Number.isFinite(area)) return '0'
        if (area > 0 && area < 1) return area.toFixed(3)
        if (area < 100) return area.toFixed(2)
        return area.toFixed(1)
    }

    const finishRename = (index: number, save: boolean) => {
        const name = renameValue.trim()
        if (save && name) onChange('gRename', { index, name })
        setRenameIndex(null)
        setRenameValue('')
    }

    const rasterSourceLabel = (item: any) => {
        const polygon = String(item.polygonName || geomList[item.polygonIndex]?.name || `${getLang === 'RU' ? 'Полигон' : getLang === 'EN' ? 'Polygon' : 'Poligon'} ${(item.polygonIndex ?? 0) + 1}`).trim()
        const serviceName = String(item.mosaicUrl || '').split('/').filter(Boolean).at(-2)
        const mosaic = String(item.mosaicName || item.mosaicId || serviceName || (getLang === 'RU' ? 'Мозаика' : getLang === 'EN' ? 'Mosaic' : 'Mozaika')).trim()
        return groupBy === 'mosaic' ? `${mosaic} — ${polygon}` : `${polygon} — ${mosaic}`
    }

    React.useEffect(() => {
        const incomplete = rasterList.filter((item: any) => !String(item.polygonName || '').trim() || !String(item.mosaicName || '').trim())
        if (incomplete.length) console.warn('[SpaceView][RasterCard] Missing source labels; fallbacks applied:', incomplete.map((item: any) => ({ key:item.key, id:item.id, polygonIndex:item.polygonIndex, polygonName:item.polygonName, mosaicId:item.mosaicId, mosaicName:item.mosaicName, mosaicUrl:item.mosaicUrl })))
    }, [rasterList])

    const ListContent = () => {
        switch (getType) {
            case "Hududlar": {

                if (geomList.length > 0) {
                    return (
                        geomList.map((item: any, index: number) => (
                            <div key={`${item.name}-${index}`}
                                className="LeftAreaListItem Hududlar"
                                onMouseEnter={() => onChange("gHover", index)}
                                onMouseLeave={() => onChange("gUnhover", -1)}
                            >
                                <div className="ItemTopContent">
                                    <div className={`ItemCheckBox ${item.visible ? 'activ' : ''}`} onClick={(e: any) => {
                                        e.stopPropagation()
                                        onChange("gToggel", index)
                                    }}>
                                        {item.visible && <CheckIcon size="90%" color={`rgb(${allThemes[getTheme]["--main-activ-color"]})`} />}
                                    </div>
                                    {renameIndex === index ? <input
                                        className="sv-polygon-name-input"
                                        value={renameValue}
                                        autoFocus
                                        maxLength={80}
                                        onClick={(event: any) => event.stopPropagation()}
                                        onChange={(event: any) => setRenameValue(event.target.value)}
                                        onKeyDown={(event: any) => {
                                            if (event.key === 'Enter') { event.preventDefault(); finishRename(index, true) }
                                            if (event.key === 'Escape') { event.preventDefault(); cancelRename.current = true; finishRename(index, false) }
                                        }}
                                        onBlur={() => {
                                            if (cancelRename.current) { cancelRename.current = false; return }
                                            finishRename(index, true)
                                        }}
                                        aria-label={getLang === 'RU' ? 'Название полигона' : getLang === 'EN' ? 'Polygon name' : 'Poligon nomi'}
                                    /> : <div className="ItemName" title={item.name}>{item.name}</div>}
                                </div>
                                <div className="ItemBottomContent">
                                    <div className="ItemInfo">{translate["Qamrov"][getLang]}: {item.area}km<sup>2</sup></div>
                                    <div className="ItemBtns">
                                        <button className="ItemBtn sv-icon-button" title={getLang === 'RU' ? 'Переименовать' : getLang === 'EN' ? 'Rename' : 'Nomini o‘zgartirish'} onClick={(event: any) => { event.stopPropagation(); cancelRename.current = false; setRenameIndex(index); setRenameValue(item.name) }}><RenameIcon /></button>
                                        <button className="ItemBtn sv-icon-button sv-cut-button" title={getLang === 'RU' ? 'Показывать снимки только внутри полигона' : getLang === 'EN' ? 'Clip rasters to polygon' : 'Rastrlarni poligon ichida kesish'} onClick={() => onChange('gClip', index)} aria-pressed={item.clip}>
                                            <CutIcon />
                                        </button>
                                        <button className="ItemBtn sv-icon-button" title={getLang === 'RU' ? 'Приблизить' : getLang === 'EN' ? 'Zoom' : 'Yaqinlashtirish'} onClick={() => { onChange("gZoom", index) }}><ZoomIcon size="20px" color="currentColor" /></button>
                                        <button className="ItemBtn sv-icon-button" title={getLang === 'RU' ? 'Удалить' : getLang === 'EN' ? 'Delete' : 'O‘chirish'} onClick={() => { onChange("gDelete", index) }}><DeleteIcon size="20px" color="currentColor" /></button>
                                    </div>
                                </div>
                                {(() => { const c = polygonCoverage(index); return <div className="sv-coverage">
                                    <button onClick={() => setCoverageOpen(coverageOpen === index ? null : index)}>
                                        <span className="sv-coverage-label">{getLang === 'RU' ? 'Покрытие выбранными снимками' : getLang === 'EN' ? 'Selected imagery coverage' : 'Tanlangan tasvirlar qamrovi'}</span>
                                        <span className="sv-coverage-value"><b>{c.average.toFixed(1)}%</b><small>{formatArea(c.coveredArea)} / {formatArea(c.totalArea)} km²</small></span>
                                        <span className="sv-coverage-arrow">{coverageOpen === index ? '▲' : '▼'}</span>
                                    </button>
                                    {coverageOpen === index && <div>{c.details.map(d => <p key={d.name}><span>{d.name}</span><span className="sv-coverage-detail"><b>{d.value.toFixed(1)}%</b><small>{formatArea(d.coveredArea)} / {formatArea(d.totalArea)} km²</small></span></p>)}</div>}
                                </div> })()}
                            </div>
                        ))
                    )
                }

                return (
                    <div className="EmptyArea">
                        <div className="EmptyIcon"><LocationIcon size="90%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} /></div>
                        <div className="EmptyDesc">{translate["Mavjud tasvirlarni ko‘rish uchun iltimos, hudud qo‘shing"][getLang]}</div>
                    </div>
                )
            }

            case "Tasvirlar": {
                if (!isReady) {
                    return (
                        <div className="ListLoaderArea">
                            <Loader ariaLabel="Natijalar yuklanmoqda" fill />
                        </div>
                    )
                }
                if (rasterList.length === 0) {
                    return (
                        <div className="EmptyArea">
                            <div className="EmptyIcon"><ImageIcon size="90%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} /></div>
                            <div className="EmptyDesc">{translate["Kunlik tasvirlar katalogini ko‘rish mumkin bo‘lgan joyni toping"][getLang]}</div>
                        </div>
                    )
                }
                return (<>
                    <div className="sv-raster-order">
                      <UiSelect value={groupBy} onChange={value => setGroupBy(value as any)} ariaLabel={getLang === 'RU' ? 'Группировка' : getLang === 'EN' ? 'Grouping' : 'Guruhlash'} options={[{ value:'polygon', label:getLang === 'RU' ? 'Сначала полигоны' : getLang === 'EN' ? 'Polygon first' : 'Avval poligonlar' }, { value:'mosaic', label:getLang === 'RU' ? 'Сначала мозаики' : getLang === 'EN' ? 'Mosaic first' : 'Avval mozaikalar' }]} />
                      <UiSelect value={sortBy} onChange={value => setSortBy(value as any)} ariaLabel={getLang === 'RU' ? 'Сортировка' : getLang === 'EN' ? 'Sorting' : 'Saralash'} options={[{value:'default',label:getLang === 'RU' ? 'По умолчанию' : getLang === 'EN' ? 'Default' : 'Standart'},{value:'date',label:getLang === 'RU' ? 'По дате' : getLang === 'EN' ? 'Date' : 'Sana bo‘yicha'},{value:'coverage',label:getLang === 'RU' ? 'По охвату' : getLang === 'EN' ? 'Coverage' : 'Qamrov bo‘yicha'},{value:'size',label:getLang === 'RU' ? 'По размеру' : getLang === 'EN' ? 'Size' : 'Hajm bo‘yicha'}]} />
                    </div>
                    {sortedRasters.map((item: any) => (
                        <div className={`LeftAreaListItem Tasvirlar ${item.attributes.OBJECTID === getAction.index ? 'activ' : ''}`}
                            key={item.key}
                            onMouseEnter={() => onChange("rHover", item.originalIndex)}
                            onMouseLeave={() => onChange("rUnhover", -1)}

                            onClick={() => {
                                popupType("info", item.attributes, item.id, item.originalIndex)
                            }}
                        >
                            <div className="sv-raster-source" title={rasterSourceLabel(item)}>{rasterSourceLabel(item)}</div>
                            <div className="sv-raster-card-main">
                                <div className="ItemIcon">
                                    <RasterThumbnail src={item.thumbnail} getTheme={getTheme} />
                                    <div className={`ItemCheckBox ${item.visible ? 'activ' : ''}`} onClick={(event: any) => {
                                        event.stopPropagation();
                                        onChange("rToggel", item.originalIndex);
                                    }}>
                                        {item.visible && <CheckIcon size="90%" color={`rgb(${allThemes[getTheme]["--main-activ-color"]})`} />}
                                    </div>
                                </div>
                                <div className="ItemRightContent">
                                    <div className="ItemName">{translate["Tasvir ID"][getLang]}: {item.attributes.Catalog_ID ?? item.attributes.Name ?? item.id}</div>
                                    <div className="ItemName sv-raster-date">
                                        {item.attributes.Sana ? new Date(item.attributes.Sana).toLocaleDateString(getLang === 'EN' ? 'en-GB' : getLang === 'RU' ? 'ru-RU' : 'uz-UZ') : ''}
                                    </div>
                                    <div className="ItemRightInfo">
                                        <div className="InfoArea sv-coverage-chip">{getLang === 'RU' ? 'Охват' : getLang === 'EN' ? 'Coverage' : 'Qamrov'} {Number(item.coverage || 0).toFixed(1)}%</div>
                                        <div className="InfoArea sv-area-chip">{formatArea(item.coveredArea)} / {formatArea(item.polygonArea)} km²</div>
                                        {item.attributes.Bulut_qop != null && <div className="InfoArea"><img src={CloudIcon} />{item.attributes.Bulut_qop}%</div>}
                                        {item.attributes.Ogish_bur != null && <div className="InfoArea"><img src={AngleIcon} />{item.attributes.Ogish_bur}°</div>}
                                        {item.attributes.Sensor && <div className="InfoArea">{item.attributes.Sensor}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>)
            }
        }
    }

    React.useEffect(() => {
        if (getType === "Hududlar") {
            setSelectCount({
                count: geomList.length,
                select: geomList.filter((item: any) => item.visible).length
            })
        }
        else if (getType === "Tasvirlar") {
            setSelectCount({
                count: rasterList.length,
                select: rasterList.filter((item: any) => item.visible).length
            })
        }
    }, [getType, geomList, rasterList, isReady])

    // <AreaIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <CheckIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <CircleIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <DeleteIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <FilterIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <LanguageIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <LayersIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <MinusIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <PlusIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <PolygonIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <ReactangleIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <RulerIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <ThemeIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <ZoomIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <SearchIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <LocationIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <ImageIcon size="40%" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />
    // <LogoIcon size="100px" color={`rgb(${allThemes[getTheme]["--main-second-color-rgb"]})`} />

    return (
        <div className="LeftArea">
            <div className="LeftAreaHeader">
                <div className="LeaftAreaTypes">
                    {LeftAreaTypes.map((item: LeftAreaType) => (
                        <div className={`LeaftAreaType ${getType === item ? 'activ' : ''}`} onClick={() => {
                            onChange("rClicked", -1)
                            setAction({ type: "none", data: "", index: -1 })
                            setType(item)
                        }}>{translate[item][getLang]}</div>
                    ))}
                </div>
                <button
                    type="button"
                    className={`LeftAreaFilterBtn ${getAction.type === "filter" ? "LeftAreaFilterBtn-active" : ""}`}
                    aria-label={getLang === 'EN' ? "Filter" : (getLang === "RU" ? "Фильтр" : "Filtr")}
                    aria-pressed={getAction.type === "filter"}
                    onClick={() => { popupType("filter", "", -2) }}
                >
                    <FilterAssetIcon
                        theme={getTheme as WidgetTheme}
                        active={getAction.type === "filter"}
                        hoverable
                        size={24}
                    />
                </button>
            </div>
            <div className="LeftAreaListInfo">
                <div className="ListAreaTitle">{translate[ListTitels[getType]][getLang]}</div>
                <div className="ListAreaContent" style={{ display: getSelectCount.count > 0 ? "flex" : "none" }}>
                    <div className="ContentSelected">{translate["Tanlangan"][getLang]}: {getSelectCount.select}/{getSelectCount.count}</div>
                    <div className="ContentBtns">
                        <div
                            className={`ContentBtn ${getSelectCount.select > 0 ? 'activ' : ''}`}
                            onClick={() => {
                                if (getSelectCount.select > 0) {
                                    if (getType === "Hududlar") onChange("gHideAll", -1)
                                    if (getType === "Tasvirlar") onChange("rHideAll", -1)
                                }
                            }}
                        >
                            {translate["Bekor qilish"][getLang]}
                        </div>
                        <div
                            className={`ContentBtn ${getSelectCount.select < getSelectCount.count ? 'activ' : ''}`}
                            onClick={() => {
                                if (getSelectCount.select < getSelectCount.count) {
                                    if (getType === "Hududlar") onChange("gShowAll", -1)
                                    if (getType === "Tasvirlar") onChange("rShowAll", -1)
                                }
                            }}
                        >
                            {translate["Barchasini belgilash"][getLang]}
                        </div>
                    </div>
                </div>
            </div>
            <div className="LeftAreaListWrap">
                <div
                    ref={listScrollRef}
                    className="LeftAreaList"
                >
                    {ListContent()}
                </div>
            </div>

            <Popup
                actiom={getAction}
                onChange={(value: string) => { onChange("where", value) }}
                getTheme={getTheme}
                getLang={getLang}
            />
        </div>
    )
}

export default React.memo(LeftArea)
