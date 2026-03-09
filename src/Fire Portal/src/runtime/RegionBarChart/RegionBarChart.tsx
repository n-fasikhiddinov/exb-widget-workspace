import { React } from "jimu-core"
import "./RegionBarChart.css"

import Map from "ol/Map";
import { fromLonLat } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";

import {
    Theme,
    ThemeType,
    filterStruct,
    selectorOptions,
    escapeCql,
} from "../../configs/config"
import {
    TranslationKey,
    Translations
} from "../../configs/translations"
import {
    ArrowIcon
} from "../../configs/icons"

interface RegionBarChartProps {
    getLang: TranslationKey
    getTheme: ThemeType
    getFilter: filterStruct
    setFilter: (value: any) => void
    mapRef: Map
}

export default function RegionBarChart({
    getLang,
    getTheme,
    getFilter,
    setFilter,
    mapRef
}: RegionBarChartProps) {
    const [getRegionBarChartData, setRegionBarChartData] = React.useState<selectorOptions[]>([])
    const [getParentInfo, setParentInfo] = React.useState<DOMRect>()
    const [getRegionBarMaxCount, setRegionBarMaxCount] = React.useState<number>(0)
    const mainRegionBarDivRef = React.useRef<HTMLDivElement>()

    const HOME = React.useMemo(
        () => ({
            center: fromLonLat([69.2401, 41.2995]) as any,
            zoom: 6,
        }),
        []
    );

    React.useEffect(() => {
        let max = 0;
        (async () => {
            await fetch(
                "http://localhost:8080/geoserver/Test/ows?" +
                "service=WFS&version=2.0.0&request=GetFeature" +
                "&typeNames=Test:chart_data" +
                "&outputFormat=application/json" +
                `&viewparams=field_name:${getFilter.id_region === "" ? "id_region" : "id_district"};${Object.entries(getFilter).map(([key, value]) => {
                    return key !== "id_district" ? key + ":" + escapeCql(value) : "id_district:"
                }).join(";")};sort_field:count_area;sort_dir:DESC`
            )
                .then((result: any) => result.json())
                .then((data: any) => {
                    setRegionBarChartData(data.features.map((item: any) => {
                        max = item.properties.count_area > max ? item.properties.count_area : max
                        return {
                            name: item.properties.value,
                            option: item.properties.count_area
                        } as selectorOptions
                    }))
                    setRegionBarMaxCount(max)
                })
        })();
    }, [getFilter])

    React.useEffect(() => {
        if (mainRegionBarDivRef.current) setParentInfo(mainRegionBarDivRef.current.getBoundingClientRect());
    }, [])

    async function clickHandler(item: selectorOptions) {
        const view = mapRef.getView();

        const fitTo = async (layerName: "Test:Viloyat" | "Test:Tuman", fieldName: "parent_cod" | "code", gid: string) => {
            try {
                const url =
                    `http://localhost:8080/geoserver/Test/ows` +
                    `?service=WFS&version=2.0.0&request=GetFeature` +
                    `&typeNames=${encodeURIComponent(layerName)}` +
                    `&outputFormat=application/json` +
                    `&srsName=EPSG:3857` +
                    `&CQL_FILTER=${encodeURIComponent(`${fieldName}='${escapeCql(gid)}'`)}`;

                const response = await fetch(url);
                if (!response.ok) throw new Error(`WFS HTTP ${response.status}`);

                const geojson = await response.json();

                const features = new GeoJSON().readFeatures(geojson, {
                    featureProjection: "EPSG:3857",
                });

                if (!features.length) return;

                const geometry = features[0].getGeometry();
                if (!geometry) return;

                view.fit(geometry.getExtent(), {
                    duration: 500,
                    padding: [10, 10, 10, 10],
                    maxZoom: 15,
                });
            } catch (error) {
                console.error("fitTo geometry error:", error);
            }
        };

        const itemName = String(item.name);
        const regionId = String(getFilter["id_region"] ?? "");
        const districtId = String(getFilter["id_district"] ?? "");

        if (regionId === "") {
            await fitTo("Test:Viloyat", "parent_cod", itemName);
            setFilter((prev: filterStruct) => ({ ...prev, id_region: item.name }));
            return;
        }

        if (districtId !== itemName) {
            await fitTo("Test:Tuman", "code", itemName);
            setFilter((prev: filterStruct) => ({ ...prev, id_district: item.name }));
            return;
        }

        await fitTo("Test:Viloyat", "parent_cod", regionId);
        setFilter((prev: filterStruct) => ({ ...prev, id_district: "" }));
    }

    return (
        <div className="mainRegionBarChartArea" ref={mainRegionBarDivRef}>
            <div className="regionBarChartTitle">
                {Translations[`regionBarChart${getFilter["id_region"] ? "District" : "Region"}`][getLang]}
                {getFilter["id_region"] !== "" && <div className="regionBarChartPrevBtn" onClick={() => {
                    mapRef.getView().animate({
                        center: HOME.center,
                        zoom: HOME.zoom,
                        duration: 500,
                    });
                    setFilter((prev: filterStruct) => ({
                        ...prev,
                        id_region: "",
                        id_district: ""
                    } as filterStruct))
                }}>
                    <ArrowIcon
                        size="10px"
                        color={`rgb(${Theme[getTheme]["--color"]})`}
                    />
                </div>}
            </div>
            <div className="regionBarChartBlock">
                {getRegionBarChartData.map((item: selectorOptions, index: number) => (
                    <div className="regionBarChartRow" key={index} style={{ animationDelay: `${index * 15}ms` }}>
                        <div className="regionBarChartValue">{Translations[item.name as TranslationKey][getLang]}</div>
                        <div style={{
                            width: `${10 + (Number(item.option) / getRegionBarMaxCount) * (getParentInfo.width - 220)}px`,
                            backgroundColor: `hsl(${Theme[getTheme]["--main-color-hsl"]}, ${10 + index/(getRegionBarChartData.length+1) * 80}%)`
                        }}
                            className={`regionBarChartBar ${item.name === getFilter["id_district"] && "active"}`}
                            onClick={() => clickHandler(item)}
                        />
                        <div className="regionBarChartOption">{item.option}</div>
                    </div>
                ))}
            </div>
            {getRegionBarChartData.length && [6].map((item: number) => {
                const result = []
                const gap = (getParentInfo.width - 220) / item;
                for (let index = 0; index <= item; index++) {
                    result.push(<div className="regionBarChartLines" style={{ left: `${140 + index * gap}px` }} />)
                }
                return result
            })}
        </div >
    )
}
