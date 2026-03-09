import { React } from "jimu-core"
import "./StatusBarChart.css"

import {
    ThemeType,
    filterStruct,
    escapeCql,
} from "../../configs/config"
import {
    TranslationKey,
    Translations
} from "../../configs/translations"

interface StatusBarChartProps {
    getLang: TranslationKey
    getTheme: ThemeType
    getFilter: filterStruct
    setFilter: (value: any) => void
}

export default function StatusBarChart({
    getLang,
    getFilter,
    setFilter
}: StatusBarChartProps) {
    const [getStatusBarChartData, setStatusBarChartData] = React.useState({})
    const [getStatusBarMaxCount, setStatusBarMaxCount] = React.useState<number>(0)

    function setColor(value: string) {
        switch (value) {
            case "0": return "--in-process";
            case "1": return "--no-confirmed-color";
            case "2": return "--confirmed-color";
            case "3": return "--checked-color";
            default: return "--in-process"
        }
    }

    React.useEffect(() => {
        (async () => {
            await fetch(
                "http://localhost:8080/geoserver/Test/ows?" +
                "service=WFS&version=2.0.0&request=GetFeature" +
                "&typeNames=Test:chart_data" +
                "&outputFormat=application/json" +
                `&viewparams=field_name:status;${Object.entries(getFilter).map(([key, value]) => key + ":" + escapeCql(value)).join(";")};sort_field:count_area;sort_dir:DESC`
            )
                .then((result: any) => result.json())
                .then((data: any) => {
                    let dataStruct = {
                        "3": 0,
                        "1": 0,
                        "2": 0,
                        "0": 0
                    }

                    data.features.forEach((item: any) => {
                        if (item.properties.value) {
                            dataStruct[item.properties.value as "1" | "2"] = item.properties.count_area
                            dataStruct["3"] += item.properties.count_area
                        }
                        else dataStruct["0"] = item.properties.count_area
                    })
                    setStatusBarChartData(dataStruct);
                    setStatusBarMaxCount(Math.max(...Object.values(dataStruct)))
                })
        })();
    }, [getFilter])

    return <div className="statusBarChartArea">
        <div className="statusBarChartTitle">{Translations["statusBarChart"][getLang]}</div>
        {Object.keys(getStatusBarChartData).reverse().map((item: any) => (
            <div className="statusBarChartRow"
                style={{
                    backgroundImage: `linear-gradient( 180deg, rgba(var(${setColor(item)}), 0.3)  0%, #00000000 50% )`,
                    borderTop: `3px solid rgb(var(${setColor(item)}))`
                }}
            >
                <div className="statusBarChartValue">{getStatusBarChartData[item]}</div>
                <div className="statusBarChartName">{Translations[item][getLang]}</div>
                <div className="statusBarChartBar"
                    onClick={() => {
                        setFilter((prev: filterStruct) => ({
                            ...prev,
                            status: item === "0" ? null : item 
                        }))
                    }}
                    style={{
                        width: `${(getStatusBarChartData[item] / getStatusBarMaxCount) * 100}%`,
                        backgroundColor: `rgba(var(${setColor(item)}), 0.7)`
                    }}
                />
            </div>
        ))}
    </div>
}
