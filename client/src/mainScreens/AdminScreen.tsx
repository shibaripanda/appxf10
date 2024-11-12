import React from "react"
import { LoaderItem } from "../components/Loader/LoaderItem.tsx"
import { SettingsItem } from "../components/SettingsItem/SettingsItem.tsx"
import { CampSettings } from "./settingsItems/CampSettings.tsx"

export const AdminScreen = (props: any) => {

    if(props){
       return (
            <div>
                <SettingsItem title={props.text.CampSettings[props.leng]} body={<CampSettings  app={props.app} serviceSettings={props.serviceSettings} setServiceSettings={props.setServiceSettings}/>}/>
            </div>
        ) 
    }
    else{
        <div className={'mainScreenLoader'}><LoaderItem/></div>
    }

    
}