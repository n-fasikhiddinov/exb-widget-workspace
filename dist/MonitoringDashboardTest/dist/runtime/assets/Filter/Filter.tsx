import { React } from "jimu-core"
import CustomInput from "../CustomInput/CustomInput"
import { defaultFilter, filterStruct } from "../../config"
import { LangKey, t } from "../../../configs/translations"
import "./Filter.css"

interface FilterProps {
    getFilter: filterStruct
    setFilter: React.Dispatch<React.SetStateAction<filterStruct>>
    lang: LangKey
}

const datePlaceholder = "2026.05.19 14:30:00"

export default function Filter({ getFilter, setFilter, lang }: FilterProps) {
    const setValue = (field: keyof filterStruct, value: string) => {
        setFilter((prev: filterStruct) => ({
            ...prev,
            page: 1,
            [field]: value.trim().length ? value : null,
        }))
    }

    return (
        <div className="filterArea">
            <div className="filterTitle">{t("filterTitle", lang)}</div>
            <div className="filterHint">{t("filterHint", lang)}</div>

            <div className="filterBlock">
                <CustomInput
                    name={t("portalName", lang)}
                    value={getFilter.portal_name}
                    onChange={(value: string) => setValue("portal_name", value)}
                />
            </div>

            <div className="filterBlock">
                <CustomInput
                    name={t("portalId", lang)}
                    value={getFilter.portalid}
                    onChange={(value: string) => setValue("portalid", value)}
                />
            </div>

            <div className="filterBlock">
                <CustomInput
                    name={t("userId", lang)}
                    value={getFilter.user_id}
                    onChange={(value: string) => setValue("user_id", value)}
                />
            </div>

            <div className="filterBlock">
                <CustomInput
                    name={t("country", lang)}
                    value={getFilter.country}
                    onChange={(value: string) => setValue("country", value)}
                />
            </div>

            <div className="filterBlock">
                <CustomInput
                    name={t("dateFrom", lang)}
                    value={getFilter.date_from}
                    placeholder={datePlaceholder}
                    onChange={(value: string) => setValue("date_from", value)}
                />
            </div>

            <div className="filterBlock">
                <CustomInput
                    name={t("dateTo", lang)}
                    value={getFilter.date_to}
                    placeholder={datePlaceholder}
                    onChange={(value: string) => setValue("date_to", value)}
                />
            </div>

            <button
                type="button"
                className="filterResetButton"
                onClick={() => setFilter({ ...defaultFilter })}
            >
                {t("resetFilter", lang)}
            </button>
        </div>
    )
}
