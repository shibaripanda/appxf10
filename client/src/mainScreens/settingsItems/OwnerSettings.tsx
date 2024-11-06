import React, { useEffect, useState } from "react"
import { TextInput, Button, Grid } from '@mantine/core'
import { sessionData } from "../../modules/sessionData"

export const OwnerSettings = (props: any) => {

    const [ mySubCamps, setMySubCamps ] = useState([])

    useEffect(() => {
        getMySub()
    }, [])

    const getMySub = async () => {
        const res = await props.app.getMySubs()
        // console.log(res)
        setMySubCamps(res)
    }

   

    // console.log(props)
    return (
        <Grid justify="flex-start" align="center">
            <Grid.Col span={12}>
                My service id: {sessionData('read', 'campId')}
            </Grid.Col>
            
            <Grid.Col span={6}>
                <TextInput placeholder="id"  value={props.subCamp} onChange={(event) => props.setSubCamp(event.currentTarget.value)}/>
            </Grid.Col>
            <Grid.Col span={6}>
                <Button onClick={
                    () => {
                        props.app.addSubCamp({id: props.subCamp})
                        props.setSubCamp('')
                    }
                }>
                    Открыть заказы для этой компании
                </Button>
            </Grid.Col>
            {mySubCamps.map(item => <>
                <Grid.Col span={6}>
                    {item['name']}
                </Grid.Col>
                <Grid.Col span={6}>
                    <Button color='red' onClick={
                            () => {
                                props.app.deleteSubCamp({id: item['id']})
                                setTimeout(() => getMySub(), 1500)
                            }
                        }>
                            Отключить
                    </Button>
                </Grid.Col>
                        </>
                    )}
            
        </Grid>
    )
}