import React from 'react';
import { Tooltip, UnstyledButton, Stack } from '@mantine/core';
import classes from './NavbarMinimalColored.module.css';
import { useNavigate } from 'react-router-dom';
import { IconLineDotted } from '@tabler/icons-react';

export function NavbarMinimalColored(props) {
  const navigate = useNavigate()

  function NavbarLink({ icon: Icon, label, active, onClick }: any) {
    return (
      <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
          <Icon style={{ width: '2.5vmax', height: '2.5vmax', color: props.appColor.iconAppColor }} stroke={1} />
        </UnstyledButton>
      </Tooltip>
    );
  }

  const topLinks = props.navBar.top.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === props.active}
      onClick={() => props.setActive(index)}
    />
  ));

  const bottomLinks = props.navBar.bottom.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      onClick={() => link.onCl(navigate)}
    />
  ));

  return (
    <nav className={classes.navbar} style={{backgroundColor: props.appColor.mainAppColor}}>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={10}>
          {topLinks}
        </Stack>
        {/* <Stack justify="center" gap={10}>
        {bottomLinks}
        </Stack> */}
      </div>
      <div className={classes.navbarBottom}>
      <Stack justify="center" gap={10}>
        {bottomLinks}
      </Stack>
      </div>
    </nav>
  );
}