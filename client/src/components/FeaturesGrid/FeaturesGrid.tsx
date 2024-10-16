import { Container, Grid, MultiSelect, TextInput } from '@mantine/core';
// import classes from './FeaturesGrid.module.css';
import React from 'react';
import { ComboBoxInput } from '../ComboInputBox/ComboBoxInput.tsx';
import { ButtonsForNewOrder } from '../ButtonsForNewOrder/ButtonsForNewOrder.tsx';

export function FeaturesGrid(props) {

    const makeFields = (field, index) => {
        
        const sp = () => {
            if(index === 12) return 12
            return 4
        }
        
            if(field.variants){
                if(['view', 'complect'].includes(field.index)){
                    return <Grid.Col span={sp()} key={index}>
                                <MultiSelect
                                    value={props.value[field.index]}
                                    onChange={(value) => {
                                        props.setValue({...props.value, [field.index]: value ? value : ''})
                                    }}
                                    label={field.label} 
                                    placeholder={field.label} 
                                    data={props.serviceSettings.generalDataList[field.index]}
                                />
                            </Grid.Col>
                }
                return <Grid.Col span={sp()} key={index}>
                            <ComboBoxInput 
                                index={field.index} 
                                value={props.value} 
                                setValue={props.setValue}
                                label={field.label} 
                                placeholder={field.label} 
                                data={props.serviceSettings.generalDataList[field.index]}
                             />
                        </Grid.Col>
            }
            return <Grid.Col span={sp()} key={index} >
                        <TextInput  
                            value={props.value[field.index]}
                            label={field.label} 
                            placeholder={field.label} 
                            onChange={(event) => {props.setValue({...props.value, [field.index]: event.currentTarget.value})}}
                        />
                    </Grid.Col>
    }

    const features = props.serviceSettings.generalOrderList.filter(item => item.neworder === true).sort((a, b) => a.place - b.place).map((field, index) => makeFields(field, index));

    return (
        <Container style={{marginTop: '20px'}}>
            <ButtonsForNewOrder  getOrders={props.getOrders} orders={props.orders} value={props.value} defaultValue={props.defaultValue} setValue={props.setValue} serviceSettings={props.serviceSettings}/>
            <Grid gutter="md" style={{marginTop: '20px'}}>
                {features}
            </Grid>
        </Container>
    )
}