import React, { useEffect } from 'react';
import {
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
    Tooltip,
  } from '@mantine/core';
  import classes from './AuthenticationTitle.module.css';
  import { useNavigate } from 'react-router-dom';
  import { sessionData } from '../../modules/sessionData';
  // import { getRole } from '../../modules/getRole';
  
  export function CampSelect(props) {
    const navigate = useNavigate()

    useEffect(() => {
      if(props.camps.length === 1){
        sessionData('write', 'campId', props.camps[0]._id)
        sessionData('write', 'role', props.camps[0].role)
        navigate('/main')
      }
    }, [navigate, props.camps])

    const botton = () => {
        return props.camps.map((item, index) =>
          <Tooltip key={index} label={item.role} position="bottom" transitionProps={{ duration: 0 }}>
            <Button fullWidth mt="xl" onClick={() => props.clickOnBut(item._id, item.role)}>
              {item.name}
            </Button>
          </Tooltip> 
        )
    }
    
    return (
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          {props.text.services[props.leng]}
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          <Anchor size="sm" component="button" onClick={() => props.setStep(3)}>
            {props.text.createservice[props.leng]}
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          {botton()}
        </Paper>
      </Container>
    )
  }