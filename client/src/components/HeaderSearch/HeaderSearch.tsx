'use client'
import { Checkbox, Group } from '@mantine/core'
import classes from './HeaderSearch.module.css'
import React from 'react'
import { sessionData } from '../../modules/sessionData'
import { IconUserSquareRounded } from '@tabler/icons-react'

export function HeaderSearch(props) {

  const changeColor = (index) => {
    if(props.newSet.includes(index)){
      return 'activlink'
    }
    return 'link'
  }

  const items = props.serviceSettings.generalStatusList.map((link, index) => (
      
    <div
      key={index}
      className={classes[changeColor(link.index)]}
      onClick={ async () => {
        let newfilter = [...props.newSet]
        const res = props.newSet.findIndex(item => item === link.index)
        if(res > -1){
          newfilter = newfilter.filter(item => item !== link.index)
        }
        else{
          newfilter = [...newfilter, link.index]
        }
        await props.app.updateUserSettings({item: 'userStatusFilter', newData: newfilter})
        props.setNewSet(newfilter)
      }}
    >
      {link.label}
    </div>

  ))

  return (
    <header className={classes.header}>
        <div className={classes.inner}>
          <Group>
              <IconUserSquareRounded/>  {sessionData('read', 'name')}
          </Group>
          <Group ml={10} gap="xs" className={classes.links} visibleFrom="sm">
              Status filter: {items}
          </Group>
        </div>
    </header>
  );
}

