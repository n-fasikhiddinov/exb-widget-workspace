import { React } from "jimu-core"
import CustomInput from "../CustomInput/CustomInput";
import { filterStruct } from "../../config"
import Calendar from "../Calendar/Calendar"
import { format } from "date-fns";

import "./Filter.css"

interface FilterProps {
    getFilter: any
    setFilter: (filter: any) => void
}

export default function Filter({
    getFilter,
    setFilter,
}: FilterProps) {
    return (
        <div className="filterArea">
            <div className="filterTitle">Фильтр</div>
            <div className="filterBlock">
                <CustomInput
                    key={"portal_name"}
                    name="Название портала"
                    value={getFilter.portal_name}
                    onChange={(value: string) => setFilter((prev: any) => ({
                        ...prev,
                        portal_name: value
                    }))}
                />
            </div>
            <div className="filterBlock">
                <CustomInput
                    key={"user_name"}
                    name="Имя пользователя"
                    value={getFilter.user_name}
                    onChange={(value: string) => setFilter((prev: any) => ({
                        ...prev,
                        user_name: value
                    }))}
                />
            </div>
            <div className="filterBlock">
                <CustomInput
                    key={"full_name"}
                    name="Ф.И.О."
                    value={getFilter.full_name}
                    onChange={(value: string) => setFilter((prev: any) => ({
                        ...prev,
                        full_name: value
                    }))}
                />
            </div>
        </div>
    )
}