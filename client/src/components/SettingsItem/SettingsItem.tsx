import { Title } from '@mantine/core';
import classes from './SettingsItem.module.css';
import React from 'react';

export function SettingsItem(props) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>{props.title}</Title>
        <div>{props.body}</div>
      </div>
    </div>
  );
}