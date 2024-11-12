import React from 'react';
import {
    Anchor,
    Paper,
    Text,
    Container,
    Button,
    TextInput,
  } from '@mantine/core';
import { LanguagePicker } from '../LanguagePicker/LanguagePicker.tsx';
  
  export function AuthenticationNew(props) {

    const botton = () => {
      if(props.activBotton && props.activBottonName){
        return (
          <Button fullWidth mt="xl" onClick={() => props.clickOnBut()}>
          {props.text.createservice[props.leng]}
          </Button>
        )
      }
      return (
          <Button fullWidth mt="xl" onClick={() => props.clickOnBut()} disabled>
          {props.text.createservice[props.leng]}
          </Button>
      )
    }

    return (
      <Container size={420} my={40}>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          <Anchor size="sm" component="button" onClick={() => props.setStep(1)}>
          {props.text.back[props.leng]}
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="email" required onChange={event => {props.setEmail(event.currentTarget.value)}} error={props.errorInputData}/>
        <TextInput label={"Service name"} placeholder="Service name" required onChange={event => {props.setValidatedNameNew(event.currentTarget.value)}} error={props.errorInputName}/>
          {botton()}
        </Paper>
        <div style={{marginTop: '1.3vmax'}}>
        <LanguagePicker avLeng={props.avLeng} setLeng={props.setLeng} leng={props.leng}/>
      </div>
      </Container>
    );
  }