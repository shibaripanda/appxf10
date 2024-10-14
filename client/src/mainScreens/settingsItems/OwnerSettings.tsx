import React from "react"
import { TextInput, Button, Grid } from '@mantine/core'

export const OwnerSettings = (props: any) => {
    console.log(props)
    return (
        <Grid justify="center" align="center">
            <Grid.Col span={4}>
                <TextInput placeholder="id"  value={props.subCamp} onChange={(event) => props.setSubCamp(event.currentTarget.value)}/>
            </Grid.Col>
            <Grid.Col span={4}>
                <Button onClick={
                    () => props.app.addSubCamp({id: props.subCamp})
                }>
                    Открыть заказы для этой компании
                </Button>
            </Grid.Col>
        </Grid>
    )
}