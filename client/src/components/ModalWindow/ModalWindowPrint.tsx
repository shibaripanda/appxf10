import { useDisclosure } from '@mantine/hooks'
import { Button, Modal } from '@mantine/core'
import React, { useState } from 'react'
import { Print } from '../Print/Print'
import { LoaderItem } from '../Loader/LoaderItem.tsx'

export function ModalWindowPrint(props) {
    
  const [opened, { open, close }] = useDisclosure(false)
  const [order, setOrder] = useState(props.data)

  const openOrderModal = async () => {
    open()
    const order = await props.handler()
    // setTimeout(() => setOrder(order), 500)
    
    
  }

  const loadPrint = () => {
    if(order){
      return <Print close={close} format={props.format} data={order} settings={props.settings}/>
    }
    return <div className={'mainScreenLoader'}><LoaderItem/></div>
  }

    return (
        <>
            <Modal
            // style={{alignContent: 'center'}}
            radius={'md'} 
            size="auto"
            opened={opened} 
            onClose={close}
            withCloseButton={false}
            centered
            >
              {loadPrint()}
              {/* <Print close={close} format={props.format} data={props.data}/> */}
            </Modal>
            <Button disabled={props.disabled} color={props.color} style={{cursor: 'pointer'}} onClick={() => openOrderModal()}>
            {props.label}
            </Button>
        </>
      );
}