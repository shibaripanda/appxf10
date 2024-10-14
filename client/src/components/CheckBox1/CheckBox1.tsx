import { useState } from 'react'
import { Checkbox } from '@mantine/core'
import React from 'react'

export function CheckBox1(props: any) {

  const [checked, setChecked] = useState(props.serviceSettings.userMainTable.map(item => item.index).includes(props.item.index))

  const checkVisible = async (data: boolean) => {

    if(checked){
      props.serviceSettings.userMainTable = props.serviceSettings.userMainTable.filter(item => item.index !== props.item.index)
    }
    else{
      props.serviceSettings.userMainTable.push(props.serviceSettings.generalOrderList.find(item => item.index === props.item.index))
    }
    await props.setServiceSettings(props.serviceSettings)
    await props.setState(props.serviceSettings.generalOrderList.filter((item: any) => props.serviceSettings.userMainTable.map(item => item.index).includes(item.index)))
    await props.app.updateUserSettings({item: 'userMainTable', newData: props.serviceSettings.userMainTable})
    setChecked(data)
  }


  return (
    <Checkbox
      label={props.item.label}
      checked={checked}
      onChange={(event) => checkVisible(event.currentTarget.checked)}
    />
  );
}