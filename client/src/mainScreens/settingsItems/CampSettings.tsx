import React, { useState } from "react"
import { LoaderItem } from "../../components/Loader/LoaderItem.tsx"
import { Container, Button, Textarea } from '@mantine/core'

export const CampSettings = (props) => {

    const [data, setData] = useState(props.serviceSettings.documents)
    const activOrDis = (a, b) => {
        if(a === b) return true
        return false
    }

    const res: any = []
    let check = false
    for(let i in data){
        res.push(
            <div key={i}>
            <Textarea resize="vertical" label={data[i].label} placeholder={data[i].text} value={data[i].text} required onChange={event => {data[i].text = setData({...data, [i]:{...data[i], text: event.currentTarget.value}})}}/>
                    <Button 
                    disabled={activOrDis(data[i].text, props.serviceSettings.documents[i].text)} 
                    mt="sm" 
                    onClick={async () =>  {
                        props.setServiceSettings({...props.serviceSettings, documents: data})
                        await props.app.updateDocumentSettings({item: i, newData: data[i].text})
                        }}>
                        Обновить
                    </Button>
            </div>
        )
        check = true
    }
    

    if(check){
        return (
             <div>
                <Container size={800} my={15}>
                    {res}
                </Container>
             </div>
         ) 
    }
    else{
        <div className={'mainScreenLoader'}><LoaderItem/></div>
    }
}