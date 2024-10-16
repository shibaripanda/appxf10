import React from "react";
import { Button, Container, SimpleGrid } from "@mantine/core";
import { myEmitter } from "../../modules/createLisener";
import { createNewOrder } from "../../modules/creatingNewOrder";
import { ModalWindowPrint } from "../ModalWindow/ModalWindowPrint.tsx";

export const ButtonsForNewOrder = (props) => {
    
    const  checkDisabledClean = () => {
        if(Object.values(props.value).filter(item => item === '').length === Object.values(props.value).length){
            return true
        }
        return false
    }
    const  checkDisabledSave = () => {
        if(Object.values(props.value).filter(item => item !== '').length === Object.values(props.value).length){  
            return false
        }
        else{
            if((Object.values(props.value).filter(item => item !== '').length  === Object.values(props.value).length - 1) && props.value.info === ''){
                return false
            }
            return true
        }
    }

    const controlOrderButtons = [
        {
            title: 'Очистить',
            disabled: checkDisabledClean(),
            print: false, 
            func: async () => {
                // const newOr = await createNewOrder(props.value)
                // myEmitter.emit('createNewOrder', {newOrder: newOr, orders: props.orders})
                // props.setValue(props.defaultValue(props.serviceSettings.generalOrderList))
                props.defaultValue(props.serviceSettings.generalOrderList)
            }, 
        },
        {
            title: 'Сохранить и распечатать',
            disabled: checkDisabledSave(),
            color: 'green',
            print: true,
            format: 'new',
            func: async () => {
                const newOr = await createNewOrder(props.value)
                myEmitter.emit('createNewOrderAndPrint', {newOrder: newOr, orders: props.orders, campInfo: props.serviceSettings})
                // setTimeout( () => props.setValue(props.defaultValue(props.serviceSettings.generalOrderList)), 5000)
                setTimeout( () => props.defaultValue(props.serviceSettings.generalOrderList), 5000)
                return newOr
            },
        }
    ]

    const printBut = (but, index) => {
        if(but.print){
            if(!but.disabled){
                return <ModalWindowPrint color={but.color} key={index} disabled={but.disabled} label={but.title} format={but.format} handler={but.func} data={props.value} settings={props.serviceSettings}/>
            }
        }
        return <Button color={but.color} disabled={but.disabled} key={index} onClick={() => but.func()}>{but.title}</Button>
    }
        
    const features = controlOrderButtons.map((but, index) => printBut(but, index))

    return (
        <Container style={{marginTop: '20px'}}>
            <SimpleGrid
                mt={30}
                cols={{ base: 1, sm: 2, md: features.length }}
                spacing={{ base: 'xl', md: 50 }}
                verticalSpacing={{ base: 'xl', md: 30 }}
            >
                {features}
            </SimpleGrid>
        </Container>
    )
}