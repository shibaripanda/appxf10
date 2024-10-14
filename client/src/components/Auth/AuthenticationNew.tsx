import React from 'react';
import {
    Anchor,
    Paper,
    Text,
    Container,
    Button,
    TextInput,
  } from '@mantine/core';
  
  export function AuthenticationNew(props) {

    const botton = () => {
      if(props.activBotton && props.activBottonName){
        return (
          <Button fullWidth mt="xl" onClick={() => props.clickOnBut()}>
          {props.text.CreateNewService}
          </Button>
        )
      }
      return (
          <Button fullWidth mt="xl" onClick={() => props.clickOnBut()} disabled>
          {props.text.CreateNewService}
          </Button>
      )
    }

    return (
      <Container size={420} my={40}>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          <Anchor size="sm" component="button" onClick={() => props.setStep(1)}>
            {props.text.back}
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="email" required onChange={event => {props.setEmail(event.currentTarget.value)}} error={props.errorInputData}/>
        <TextInput label={props.text.NameForNewService} placeholder="Service name" required onChange={event => {props.setValidatedNameNew(event.currentTarget.value)}} error={props.errorInputName}/>
          {botton()}
        </Paper>
      </Container>
    );
  }