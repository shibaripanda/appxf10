'use client'
import { Group } from '@mantine/core'
import classes from './HeaderSearch2.module.css'
import React from 'react'
import { sessionData } from '../../modules/sessionData'
import { IconSun, IconUserSquareRounded } from '@tabler/icons-react'

export function HeaderSearch2(props) {

  const changeColor = (index) => {
    if(props.filter.includes(index)){
      return 'activlink'
    }
    return 'link'
  }

  const items = props.serviceSettings.generalDeviceList.map((link, index) => (
      
    <div
      key={index}
      className={classes[changeColor(link.request)]}
      onClick={ async () => {
        let newfilter = [...props.filter]
        const res = props.filter.findIndex(item => item === link.request)
        if(res > -1){
          newfilter = newfilter.filter(item => item !== link.request)
        }
        else{
          newfilter = [...newfilter, link.request]
        }
        await props.app.updateUserSettings({item: 'userDeviceFilter', newData: newfilter})
        props.setFilter(newfilter)
      }}
    >
      {link.label}
    </div>

  ))

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          {props.serviceSettings.documents.namecomp.text}
        </Group>
        <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
          Device filter: {items}
        </Group>
      </div>
    </header>
  );
}

