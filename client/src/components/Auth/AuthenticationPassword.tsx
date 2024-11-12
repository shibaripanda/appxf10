import React from 'react';
import {
    Anchor,
    Paper,
    Text,
    Container,
    Button,
    PasswordInput,
  } from '@mantine/core';
import { LanguagePicker } from '../LanguagePicker/LanguagePicker.tsx';
  
  export function AuthenticationPassword(props) {

    const botton = () => {
      if(props.activBotton){
        return (
          <Button fullWidth mt="xl" onClick={() => props.clickOnBut()}>
          {props.text.enter[props.leng]}
          </Button>
        )
      }
      return (
        <Button fullWidth mt="xl" onClick={() => props.clickOnBut()} disabled>
          {props.text.enter[props.leng]}
        </Button>
      )
    }

    return (
      <Container size={420} my={40}>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          {props.text.emailToEmail[props.leng]}{'. '}
          <Anchor size="sm" component="button" onClick={() => props.setStep(1)}>
            {props.text.back[props.leng]}
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <PasswordInput label="Password" placeholder="Your password" required mt="md" onChange={event => {props.setPassword(event.currentTarget.value)}} error={props.errorInputData}/>
          {botton()}
        </Paper>
        <div style={{marginTop: '1.3vmax'}}>
        <LanguagePicker avLeng={props.avLeng} setLeng={props.setLeng} leng={props.leng}/>
      </div>
      </Container>
    );
  }