import { React } from "jimu-core"
import CustomInput from "../CustomInput/CustomInput"
import { defaultFilter, filterStruct } from "../../config"
import "./Filter.css"

interface FilterProps {
    getFilter: filterStruct
    setFilter: React.Dispatch<React.SetStateAction<filterStruct>>
}

export default function Filter({ getFilter, setFilter }: FilterProps) {
    const setValue = (field: keyof filterStruct, value: string) => {
        setFilter((prev: filterStruct) => ({
            ...prev,
            page: 1,
            [field]: value.trim().length ? value : null,
        }))
    }

    return (
        <div className="filterArea">
            <div className="filterTitle">Фильтр</div>

            <div className="filterBlock">
                <CustomInput
                    name="Название портала"
                    value={getFilter.portal_name}
                    onChange={(value: string) => setValue("portal_name", value)}
                />
            </div>

            <div className="filterBlock">
                <CustomInput
                    name="ID портала"
                    value={getFilter.portalid}
                    onChange={(value: string) => setValue("portalid", value)}
                />
            </div>

            <div className="filterBlock">
                <CustomInput
                    name="ID пользователя"
                    value={getFilter.user_id}
                    onChange={(value: string) => setValue("user_id", value)}
                />
            </div>

            <div className="filterBlock">
                <CustomInput
                    name="Имя пользователя"
                    value={getFilter.user_name}
                    onChange={(value: string) => setValue("user_name", value)}
                />
            </div>

            <div className="filterBlock">
                <CustomInput
                    name="Ф.И.О."
                    value={getFilter.full_name}
                    onChange={(value: string) => setValue("full_name", value)}
                />
            </div>

            <div className="filterBlock">
                <CustomInput
                    name="Страна"
                    value={getFilter.country}
                    onChange={(value: string) => setValue("country", value)}
                />
            </div>

            <div className="filterBlock">
                <CustomInput
                    name="Дата от"
                    value={getFilter.date_from}
                    onChange={(value: string) => setValue("date_from", value)}
                />
            </div>

            <div className="filterBlock">
                <CustomInput
                    name="Дата до"
                    value={getFilter.date_to}
                    onChange={(value: string) => setValue("date_to", value)}
                />
            </div>

            <button
                type="button"
                className="filterResetButton"
                onClick={() => setFilter({ ...defaultFilter })}
            >
                Сбросить фильтр
            </button>
        </div>
    )
}
