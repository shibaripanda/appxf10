import React from "react"
import { LoaderItem } from "../components/Loader/LoaderItem.tsx"
import { SettingsItem } from "../components/SettingsItem/SettingsItem.tsx"
import { CampSettings } from "./settingsItems/CampSettings.tsx"

export const OwnerScreen = (props: any) => {

    if(props){
       return (
            <div>
                <SettingsItem title={props.text.CampSettings} body={<CampSettings serviceSettings={props.serviceSettings} setServiceSettings={props.setServiceSettings}/>}/>
            </div>
        ) 
    }
    else{
        <div className={'mainScreenLoader'}><LoaderItem/></div>
    }

    
}