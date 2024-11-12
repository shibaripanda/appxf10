import React from "react"
import { LoaderItem } from "../components/Loader/LoaderItem.tsx"
import { SettingsItem } from "../components/SettingsItem/SettingsItem.tsx"
import { WorkersSettings } from "./settingsItems/WorkersSettings.tsx"

export const GroupUsersScreen = (props: any) => {

    if(props){
       return (
            <div>
                <SettingsItem title={props.text.workers[props.leng]} body={<WorkersSettings app={props.app} serviceSettings={props.serviceSettings}/>}/>
            </div>
        ) 
    }
    else{
        <div className={'mainScreenLoader'}><LoaderItem/></div>
    }

    
}