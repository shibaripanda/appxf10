import { useDisclosure } from '@mantine/hooks';
import { Modal, Table, Text } from '@mantine/core';
import React, { useState } from 'react';
import { OpenOrder } from '../../mainScreens/settingsItems/OpenOrder.tsx'
import { dateToLokalFormat } from '../../modules/dateToLocalFormat.js'

export function ModalWindow(props) {
    
  const [opened, { open, close }] = useDisclosure(false)
  const [status, setStatus] = useState(0)

  const titleComponent = () => {
    return (
      <div>
        <Text 
          fw={700}>{
            props.data.order + ' / ' + 
            dateToLokalFormat(props.data.date) + ' / ' + 
            props.data.clientTel + ' / ' + 
            props.data.problem + ' / Total:' + 
            props.data.getTotalCost() + ' / Profit:' + 
            props.data.getTotalProfit() + ' / Expenses:' + 
            props.data.getTotalExpenses()
            }
        </Text>
      </div>
    )
  }
  
  const colorStatus = () => {
    if(props.data.status === 'new'){
      return 'red'
    }
    else if(props.data.status === 'process'){
      return 'black'
    }
    else if(props.data.status === 'ready'){
      return 'green'
    }
    else if(props.data.status === 'waranty'){
      return 'red'
    }
    else if(props.data.status === 'close'){
      return 'grey'
    }
    else if(props.data.status === 'cancel'){
      return 'grey'
    }
    else if(props.data.status === 'diagnostics'){
      return 'blue'
    }
    return 'pink'
  }

    return (
        <>
            <Modal 
            radius={'md'} 
            size={'xxl'} 
            opened={opened} 
            onClose={close} 
            title={titleComponent()} 
            withCloseButton={false}
            >
                <div><OpenOrder setStatus={setStatus} app={props.app} getOrders={props.getOrders} serviceSettings={props.serviceSettings} data={props.data} close={close}/></div>
            </Modal>
            <Table.Tr key={props.data.title} style={{cursor: 'pointer', color: colorStatus()}} onClick={() => open()}>
            {props.row}
            </Table.Tr>
        </>
      );
}