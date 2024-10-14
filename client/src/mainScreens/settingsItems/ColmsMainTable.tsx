import React from "react"
import { DndList } from "../../components/DndList/DndList.tsx"

export const ColmsMainTable = (props: any) => {

    const data = props.serviceSettings.generalOrderList.filter((item: any) => item.maintable === true)

    return (
        <div>
            <DndList app={props.app} data={data} serviceSettings={props.serviceSettings} setServiceSettings={props.setServiceSettings}/>
        </div>
    )
    
}