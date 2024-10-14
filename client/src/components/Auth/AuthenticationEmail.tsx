import React from 'react';
import {
    TextInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
  } from '@mantine/core';
  import classes from './AuthenticationTitle.module.css';
import { sessionData } from '../../modules/sessionData';
  
  export function AuthenticationEmail(props) {

    const botton = () => {
      if(props.activBotton){
        return (
          <>
          <Button fullWidth mt="xl" onClick={() => props.clickOnBut()}>
            {props.text.GetPassword} на email
          </Button>
          {/* <Button fullWidth mt="xl" onClick={() => props.clickOnBut()}>
          Вход с помощъю Telegram App
        </Button> */}
        </>
        )
      }
      return (
        <Button fullWidth mt="xl" onClick={() => props.clickOnBut()} disabled>
          {props.text.GetPassword}
        </Button>
      )
    }

    const fastBottons = () => {
      let res: any = sessionData('read', 'activUsers')
      if(res){
        res = res.map((item, index) => 
        <Button 
        key={index} 
        fullWidth 
        mt="xl" 
        onClick={
            () => {
              sessionData('write', 'currentUser', item)
              props.setStep(4)
          }
        }
        >
          {item.split('#')[1]}
        </Button>)

        return (
          res
        )
      }
      else{
        return []
      }
    }
    // console.log(props.text)
    return (
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          {props.text.welcom}
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          {props.text.DoNotHaveAServiceYet}{' '}
          <Anchor size="sm" component="button" onClick={() => props.setStep(3)}>
            {props.text.CreateService}
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Text>{props.serverError}</Text>
          <TextInput label="Email" placeholder="email" required onChange={event => {props.setEmail(event.currentTarget.value)}} error={props.errorInputData}/>
          {botton()}
          {fastBottons()}
        </Paper>
      </Container>
    );
  }