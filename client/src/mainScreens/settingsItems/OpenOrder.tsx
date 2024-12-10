import { Button, Container, Grid, Image, Select, SimpleGrid, Text, TextInput } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { dateToLokalFormatFull } from '../../modules/dateToLocalFormat.js'
import { TableOpenOrder } from '../../components/TableOpenOrder/TableOpenOrder.tsx'
import { ModalWindowPrint } from '../../components/ModalWindow/ModalWindowPrint.tsx'
import { ServiceTable } from '../../components/ServiceTable/ServiceTable.tsx'
import { sessionData } from '../../modules/sessionData.js'

export function OpenOrder(props: any) {

  // console.log(props.data)

    const [newInfo, setNewInfo] = useState('')
    const [service, setService] = useState({service: '', price: 0, master: '', varant: 0, sebes: 0})
    const [campUsers, setCamUsers] = useState([])
    const [blockDelete, setBlockDelete] = useState('')

    useEffect(() => {
      getUsers()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getUsers = async () => {
      const res = await props.app.getUsersOfCamp()
      setCamUsers(res.map(item => `${item.name} (${item.email})`))
    }
    const historyUpdate = async (text, status) => {
      const res = await props.data.updateHistory(text, status)
      await props.getOrders()
      return res
    }
    const serviceUpdate = async (service) => {
      await props.data.addNewService(service)
      await props.getOrders()
    }
    const serviceUpdateSoglas = async (status) => {
      await props.data.updateServiceSoglas(status)
      await props.getOrders()
    }
    const serviceDelete = async (service) => {
      await props.data.deleteService(service)
      await props.getOrders()
    }
    const colorButton = (index) => {
      if(index === props.data.status) return 'green'
    }

    const printBut = (but, index) => {
      if(but.print){
        return <ModalWindowPrint color={but.color} key={index} disabled={but.disabled} label={but.title} format={but.format} handler={but.func} data={props.data} settings={props.serviceSettings}/>
      }
      return <Button color={but.color} disabled={but.disabled} key={index} onClick={() => but.func()}>{but.title}</Button>
    }
    const disabledModeButtons = (status) => {
      if(['new', 'warranty'].includes(status) && !['cancel', 'close'].includes(props.data.status)){
        return true
      }
      if(['cancel', 'close'].includes(status) && !['ready'].includes(props.data.status)){
        return true
      }
      if(status === 'cancel' && props.data.soglas){
        return true
      }
      if(status === 'close' && !props.data.soglas){
        return true
      }
      if(['diagnostics', 'agreement', 'process', 'ready'].includes(status) && ['cancel', 'close'].includes(props.data.status)){
        return true
      }
      return false
    }

    const blockDeletingOrder = () => {
      if(blockDelete === props.data.order) return false
      return true
    }
    const topButtonsLine = () => {

      let arrayButtons = [
          {title: 'Удалить',
            disabled: blockDeletingOrder(),
            print: false,
            color: 'red',
            func: async () =>  {
              await props.data.deleteOrder()
              await props.getOrders()
              props.close()
              
            }
          },
          {title: 'Назад',
            disabled: disabledModeButtons('index'),
            print: false,
            func: async () => {
              props.close()
              }, 
          },
          {title: '🖨 Заказ',
          disabled: false,
          color: 'green',
          print: true,
          format: 'new',
          func: async () => {
              return props.data
          },
          }
      ]
      const arrayButtonsUserManagerMaster = [
        {title: 'Назад',
          disabled: disabledModeButtons('index'),
          print: false,
          func: async () => {
            props.close()
            }, 
        },
        {title: '🖨 Заказ',
        disabled: false,
        color: 'green',
        print: true,
        format: 'new',
        func: async () => {
            return props.data
        },
        }
      ]
      let role = sessionData('read', 'role')
      if(!role) role = 'df'
      if(['user', 'manager', 'master'].includes(role.toString())){
        arrayButtons = arrayButtonsUserManagerMaster
      }
      for(let i of props.serviceSettings.generalStatusList.filter(item => ['cancel', 'close', 'new', 'warranty'].includes(item.index))){
          arrayButtons.push({
            title: '🖨 ' + i.label,
            color: colorButton(i.index),
            disabled: disabledModeButtons(i.index),
            print: true,
            format: i.index,
            func: async () => {
              const res = await historyUpdate(`Установлен статус: "${i.label}"`, i.index)
              console.log(res)
              return res
            }
          })
      }

      const inputForDelete = () => {
        if(!['user', 'manager', 'master'].includes(role.toString())){
          return (
              <TextInput
                placeholder={props.data.order}
                value={blockDelete}
                onChange={(event) => {
                  setBlockDelete(event.currentTarget.value)
              }}
            />
          )
        }
      }

      return (
        <div>
          <Container>
            <SimpleGrid
              mt={5}
              cols={{ base: 1, sm: 2, md: 8 }}
              spacing={{ base: 'xl', md: 15 }}
              verticalSpacing={{ base: 'md', md: 20 }}
            >
            {inputForDelete()}
            {arrayButtons.map((but, index) => printBut(but, index))}
            </SimpleGrid>
          </Container>
        </div>
      )

    }
    const bottomButtonsLine = () => {
      const arrayButtons: any = []
      for(let i of props.serviceSettings.generalStatusList.filter(item => !['cancel', 'close', 'new', 'warranty'].includes(item.index))){
        arrayButtons.push({
          title: i.label,
          color: colorButton(i.index),
          disabled: disabledModeButtons(i.index),
          print: false,
          func: async () => {
              await historyUpdate(`Установлен статус: "${i.label}"`, i.index)
              props.setStatus(Date.now())
          }
        })
      }
      // console.log(arrayButtons)
      return (
        <div>
          <Container>
            <SimpleGrid
              mt={5}
              cols={{ base: 1, sm: 2, md: arrayButtons.length }}
              spacing={{ base: 'xl', md: 15 }}
              verticalSpacing={{ base: 'md', md: 20 }}
            >
            {arrayButtons.map((but, index) => printBut(but, index))}
            </SimpleGrid>
          </Container>
        </div>
      )
    }

    const dataForShow = () => {

      const fieldsOfOrder = Object.keys(props.data).filter(item => item !== 'historylist')
      const settingsField = props.serviceSettings.generalOrderList.filter(item => item.card === true).map((item: any) => item.index)
      const newAr : string[] = []

      const lookData = (i: string) => {
        if(i === 'date'){
          return dateToLokalFormatFull(props.data[i])
        }
        else if(i === 'dateOut'){
          if(props.data[i] !== 0){
            return dateToLokalFormatFull(props.data[i])
          }
          return ''
          
        }
        else if(i === 'masters'){
          return props.data.getMasters()
        }
        return props.data[i]
      }

      for(let i of settingsField){
        if(fieldsOfOrder.includes(i)){
            const res: any = {title: (props.serviceSettings.generalOrderList.find((item: any) => item.index === i)).label, text: lookData(i)}
            newAr.push(res)
        }
      }
      return  <TableOpenOrder order={newAr}/>
    }
    const historyList = () => {
      return (
        props.data.historylist.sort((a, b) => b.date - a.date).map((item, index) => 
        <Container key={index}>
          <Text fw={700}>{dateToLokalFormatFull(item.date).substring(0,17)} {`(`}{item.name}{`)`} {item.text}</Text>
          {/* <Text>{item.text}</Text> */}
          <hr></hr>
        </Container>
        )
      )
    }
    const addBut = (text) => {
      if(text === '') return true
      return false
    }
    const addButService = (text) => {
      if(text.service === '' || text.master === '') return true
      return false
    }
    const serviceList = () => {
      const soglasCheck = () => {
        if(props.data.soglas) return '✅'
      }
      const statusShowSoglas = () => {
        if(['ready', 'close', 'cancel', 'warranty'].includes(props.data.status)){
          return (
            <div style={{marginTop: '1vmax'}}>
            <SimpleGrid cols={6} style={{marginBottom: '0.5vmax', alignItems: 'center'}}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div style={{textAlign: 'right'}}>{soglasCheck()} <b>Сумма {props.data.service.reduce((a, b) => a + b.price, 0)} р</b></div>
            </SimpleGrid>
            </div>
          )
        }
        return (
          <SimpleGrid cols={6} style={{marginBottom: '0.5vmax', alignItems: 'center'}}>
          <div></div>
          <div></div>
          <div></div>
          <div style={{textAlign: 'right'}}>{soglasCheck()} <b>Сумма {props.data.service.reduce((a, b) => a + b.price, 0)} р</b></div>
          <Button disabled={props.data.soglas} onClick={() => {serviceUpdateSoglas(true)}}>Согласовано</Button>
          <Button disabled={!props.data.soglas} onClick={() => {serviceUpdateSoglas(false)}}>Отказ</Button>
        </SimpleGrid>
        )
      }
      
      if(props.data.service.length) return (
        <>
        {statusShowSoglas()}
        <ServiceTable data={props.data.service} status={props.data.status} delete={serviceDelete}/>
        </>
      )
    }
    const showItemsNewOrder = () => {
      if(props.data.status !== 'new'){
        const ifReadyOrder = () => {
          if(['process', 'diagnostics', 'agreement'].includes(props.data.status)){
            return (
              <div>
                <div style={{ marginBottom: '1vmax', marginTop: '1.5vmax'}}>
            <TextInput 
            label="Информация" 
            value={newInfo} 
            placeholder="Добавить новое действие" 
            onChange={event => {
              setNewInfo(event.currentTarget.value)
            }}
            />
            <Button mt="sm" disabled={addBut(newInfo)} onClick={() => {
                historyUpdate(newInfo, false)
                setNewInfo('')
                }}>
              Добавить информацию
            </Button>
            </div>
            <div style={{ marginBottom: '1.5vmax', marginTop: '1vmax'}}>
              <TextInput width={'5vmax'} label="Услуга" value={service.service} placeholder="Услуга" onChange={event => setService({...service, service: event.currentTarget.value})}/>
            <SimpleGrid cols={4}>
              <TextInput 
                label="Стоимость" 
                value={service.price}
                onChange={event => {
                  if(/^\d+$/.test(event.currentTarget.value)){
                    setService({...service, price: Number(event.currentTarget.value)})
                  }
                  else{
                    setService({...service, price: 0})
                  }
                }}
              />
              <TextInput 
                label="Расходы" 
                value={service.sebes}
                onChange={event => {
                  if(/^\d+$/.test(event.currentTarget.value)){
                    setService({...service, sebes: Number(event.currentTarget.value)})
                  }
                  else{
                    setService({...service, sebes: 0})
                  }
                }}
              />
              <TextInput 
                label="Гарантия (дней)" 
                value={service.varant} 
                placeholder="печатай сюда" 
                onChange={event => {
                  if(/^\d+$/.test(event.currentTarget.value)){
                    setService({...service, varant: Number(event.currentTarget.value)})
                  }
                  else{
                    setService({...service, varant: 0})
                  }
                }}
              />
              <Select
                    label="Мастер"
                    value={service.master}
                    clearable
                    data={campUsers}
                    onChange={(value) => setService({...service, master: value ? value : ''})}
                />
            </SimpleGrid>  
              <Button mt="sm" disabled={addButService(service)} onClick={() => {
                serviceUpdate(service)
                setService({service: '', price: 0, master: '', varant: 0, sebes: 0})
                }}>
              Добавить услугу
              </Button>
            </div>
              </div>
            )
          }
        }
        return (
          <div>
          {ifReadyOrder()}
          {serviceList()}
          </div>
        )
      }
      return (
        <div style={{marginTop: '1vmax'}}>
          <hr></hr>
        </div>
      ) 
    }

    return (
        <Container>
          
          {topButtonsLine()}
          <hr style={{ marginTop: '0.75vmax', marginBottom: '0.75vmax'}}></hr>
          {bottomButtonsLine()}
          {showItemsNewOrder()}
          <div style={{ marginTop: '2vmax', marginBottom: '2vmax'}}>
            {historyList()}
          </div>
          <div style={{ marginTop: '2vmax', marginBottom: '2vmax'}}>
          {dataForShow()}
          </div>
          <hr style={{marginTop: '1vmax', marginBottom: '1vmax'}}></hr>
            
            <Grid>
                {props.data.photos.map(
                    (photo, index) => <Grid.Col span={2} key={index}>
                    <Image
                    onClick={
                      () => props.app.sendMePhoto(props.data._id)
                    }
                    src={`data:image/jpeg;base64,${photo.max}`}
                    radius="sm"
                    h='7vmax'
                    w="auto"
                    />
            </Grid.Col>)}
            </Grid>
        </Container>
    )
}