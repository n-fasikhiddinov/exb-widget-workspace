import { React } from "jimu-core"
import "./style.css"

import {
    filterStruct,
    ThemeType,
    Theme,
    selectorOptions,
    getSQLFilter
} from "../configs/config"
import { LangKey, TranslationKey, Translations } from "../configs/translations"

import Map from "ol/Map";
import TileWMS from "ol/source/TileWMS";

import Header from "./Header/Header";
import Selector from "./Selector/Selector";
import RegionBarChart from "./RegionBarChart/RegionBarChart";
import CustomMap from "./CustomMap/CustomMap";
import LineChart from "./LineChart/LineChart";
import StatusBarChart from "./StatusBarChart/StatusBarChart";

export default function Widget() {
    const GEO_WMS_URL = "http://localhost:8080/geoserver/Test/wms";
    const mainLayerRef = React.useRef<TileWMS>(new TileWMS({
        url: GEO_WMS_URL,
        params: {
            LAYERS: "Test:fieldfire",
            TILED: true,
            VERSION: "1.1.1",
            FORMAT: "image/png",
            TRANSPARENT: true,
            STYLES: "test_style"
        },
        serverType: "geoserver",
        crossOrigin: "anonymous",
        gutter: 1,
    }))
    const districtLayerRef = React.useRef<TileWMS>(new TileWMS({
        url: GEO_WMS_URL,
        params: {
            LAYERS: "Test:Tuman",
            TILED: true,
            VERSION: "1.1.1",
            FORMAT: "image/png",
            TRANSPARENT: true,
            STYLES: "RegionDistrict"
        },
        serverType: "geoserver",
        crossOrigin: "anonymous",
        gutter: 1,
    }))
    const regionLayerRef = React.useRef<TileWMS>(new TileWMS({
        url: GEO_WMS_URL,
        params: {
            LAYERS: "Test:Viloyat",
            TILED: true,
            VERSION: "1.1.1",
            FORMAT: "image/png",
            TRANSPARENT: true,
            STYLES: "RegionDistrict"
        },
        serverType: "geoserver",
        crossOrigin: "anonymous",
        gutter: 1,
    }))
    const [getMap, setMap] = React.useState<Map | null>(null)
    const [getSelected, setSelected] = React.useState<any | null>(null);
    const [getTheme, setTheme] = React.useState<ThemeType>("dark" as ThemeType)
    const [getLang, setLang] = React.useState<LangKey>("UZ" as LangKey)
    const [getFilter, setFilter] = React.useState<filterStruct>({
        year: "",
        type: "",
        id_region: "",
        id_district: "",
        month: "",
        day: ""
    } as filterStruct)

    const [getYearSelectorOptions, setYearSelectorOptions] = React.useState<selectorOptions[]>([]);
    const [getTypeSelectorOptions, setTypeSelectorOptions] = React.useState<selectorOptions[]>([]);

    React.useEffect(() => {
        const cql = getSQLFilter(getFilter);
        mainLayerRef.current.updateParams({
            CQL_FILTER: cql ?? null,
        });
    }, [getFilter]);

    React.useEffect(() => {
        (async () => {
            const r = await fetch(
                "http://localhost:8080/geoserver/Test/ows?" +
                "service=WFS&version=2.0.0&request=GetFeature" +
                "&typeNames=Test:chart_data" +
                "&outputFormat=application/json" +
                `&viewparams=field_name:year;${Object.entries(getFilter).map(([key, value]) => key + ":" + value).join(";")};sort_field:count_area;sort_dir:ASC`
            );
            const data = await r.json();
            setYearSelectorOptions(
                data.features.map((item: any) => ({
                    name: item.properties.value,
                    option: item.properties.value,
                }))
            );
        })();

        (async () => {
            const r = await fetch(
                "http://localhost:8080/geoserver/Test/ows?" +
                "service=WFS&version=2.0.0&request=GetFeature" +
                "&typeNames=Test:chart_data" +
                "&outputFormat=application/json" +
                `&viewparams=field_name:type;${Object.entries(getFilter).map(([key, value]) => key + ":" + value).join(";")};sort_field:count_area;sort_dir:ASC`
            );
            const data = await r.json();
            setTypeSelectorOptions(
                data.features.map((item: any) => ({
                    name: item.properties.value,
                    option: item.properties.value,
                }))
            );
        })();
    }, []);

    return (<div className="mainArea" style={Theme[getTheme as ThemeType]}>
        <Header
            getLang={getLang}
            setLang={(value: TranslationKey) => setLang(value)}
            getTheme={getTheme}
            setTheme={(value: ThemeType) => setTheme(value)}
        />
        <div className="section1">
            <div className="filterBlock">
                <div className="selectors">
                    <Selector
                        name={Translations["yearsSelector"][getLang as TranslationKey]}
                        value={getFilter["year"]}
                        options={getYearSelectorOptions}
                        onChange={(value: string | number | null) => {
                            setFilter((prev: any) => ({
                                ...prev,
                                year: value,
                            }));
                        }}
                    />
                    <Selector
                        name={Translations["typesSelector"][getLang as TranslationKey]}
                        value={getFilter["type"]}
                        options={getTypeSelectorOptions}
                        onChange={(value: string | number | null) => {
                            setFilter((prev: any) => ({
                                ...prev,
                                type: value,
                            }));
                        }}
                    />
                </div>
                <RegionBarChart
                    getLang={getLang}
                    getTheme={getTheme}
                    getFilter={getFilter}
                    setFilter={setFilter}
                    mapRef={getMap}
                />
                <div className="totalBlock"></div>
            </div>
            <CustomMap
                getTheme={getTheme}
                getSelected={getSelected}
                setMap={setMap}
                setSelected={setSelected}
                mainLayerRef={mainLayerRef}
                districtLayerRef={districtLayerRef}
                regionLayerRef={regionLayerRef}
            />
        </div>
        <div className="section2">
            <LineChart
                getLang={getLang}
                getTheme={getTheme}
                getFilter={getFilter}
                setFilter={setFilter}
            />
            <div className="tableBlock"></div>
            <StatusBarChart
                getLang={getLang}
                getTheme={getTheme}
                getFilter={getFilter}
                setFilter={setFilter}
            />
        </div>
    </div>)
}