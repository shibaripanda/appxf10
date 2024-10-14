'use client'
import { Autocomplete, Group } from '@mantine/core'
import classes from './HeaderSearch3.module.css'
import React from 'react'
import { IconSearch } from '@tabler/icons-react'

export function HeaderSearch3(props) {

  return (
    <header className={classes.header}>
        <div className={classes.inner}>
        {/* <Group></Group> */}
          <Group>
          <Autocomplete
              // className={classes.search}
              style={{width: '50vmax', marginLeft: '0.18vmax'}}
              placeholder="Search"
              leftSection={<IconSearch style={{ width: '1vmax', height: '1vmax' }} stroke={1.5} />}
              data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
              visibleFrom="xs"
              onChange={props.setTextFilter}
            />
          </Group>
        </div>
    </header>
  );
}

