import React from "react"
import { LoaderItem } from "../components/Loader/LoaderItem.tsx"
import { SettingsItem } from "../components/SettingsItem/SettingsItem.tsx"
import { OwnerSettings } from "./settingsItems/OwnerSettings.tsx"

export const OwnerScreen = (props: any) => {

    if(props){
       return (
            <div>
                <SettingsItem 
                title={props.text.CampSettings[props.leng]} 
                body={<OwnerSettings {...props} />}/>
            </div>
        ) 
    }
    else{
        <div className={'mainScreenLoader'}><LoaderItem/></div>
    }

    
}