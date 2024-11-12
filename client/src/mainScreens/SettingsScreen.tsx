import React from "react"
import { LoaderItem } from "../components/Loader/LoaderItem.tsx"
import { SettingsItem } from "../components/SettingsItem/SettingsItem.tsx"
import { ColmsMainTable } from "./settingsItems/ColmsMainTable.tsx"
import { UserSettings } from "./settingsItems/UserSettings.tsx"

export const SettingsScreen = (props: any) => {

    if(props){
       return (
            <div>
                <SettingsItem 
                    title={props.text.settingsMainTable[props.leng]} 
                    body={<ColmsMainTable
                            app={props.app} 
                            serviceSettings={props.serviceSettings} 
                            setServiceSettings={props.setServiceSettings}
                        />}
                />
                <SettingsItem
                    title={props.text.UserSettings[props.leng]} 
                    body={<UserSettings app={props.app}/>}
                />
            </div>
        ) 
    }
    else{
        <div className={'mainScreenLoader'}><LoaderItem/></div>
    }

    
}