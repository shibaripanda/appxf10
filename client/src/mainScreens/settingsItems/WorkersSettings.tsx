import React, { useEffect, useState } from "react"
import { LoaderItem } from "../../components/Loader/LoaderItem.tsx"
import { TextInput, Container, Button, SimpleGrid, Select, Card, Checkbox} from '@mantine/core'
import { validateEmail } from "../../modules/validateEmail.js"

export const WorkersSettings = (props) => {

    const [users, setUsers] = useState([])
    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')
    // const [valueReminder, setValueReminder] = useState(users)

    
    useEffect(() => {
        getUsers()
    },[])
    
    const getUsers = async () => {
        const res = await props.app.getUsersOfCamp()
        console.log(res)
        setUsers(res.reverse())
    }
    const activBut = () => {
        if(!validateEmail(email) || role === '') return true
        return false
    }
    const stopDeleteOwner = (role) => {
        if(role === 'owner') return true
        return false
    }
    const updateUserRole = async (value, email) => {
        await props.app.editUserRole({email: email, role: value})
        await getUsers()
    }
    const showRoleEdit = (user) => {
        if(user.role !== 'owner'){
            return (
                    <Select
                        style={{marginTop: '1vmax'}} 
                        // defaultValue={user['role']}
                        label="Change role"
                        clearable
                        data={props.serviceSettings.generalRoleList}
                        onChange={async (value) => {
                            if(value && user.role !== value) await updateUserRole(value, user.email)}
                        }
                    />
            )
        }
    }
    const reninderSettings = (users, user) => {
        if(user.telegramStatus){
            return <Checkbox.Group 
                value={users.find(item => item.email === user['email'])['telegramReminder']} 
                onChange={async (event) => {
                    console.log(event)
                    await props.app.editUserTelegramReminder({email: user.email, telegramReminder: event})
                    await getUsers()
                }}
                >
                {props.serviceSettings.generalDeviceList.map((rem, index) => <Checkbox key={index} value={rem.request} label={rem.label} />)}
                </Checkbox.Group>
        }
    }

    if(users.length){
        return (
            <Container size={'70vmax'} my={15}>
                <Container size={'30vmax'} my={15}>
                <TextInput
                    style={{marginTop: '3vmax'}} 
                    label={`Email`} 
                    placeholder={'email'} 
                    required 
                    onChange={event => setEmail(event.currentTarget.value)}
                />
                <Select
                    label="Role"
                    placeholder="Role"
                    value={role}
                    clearable
                    required 
                    data={props.serviceSettings.generalRoleList}
                    onChange={(value) => setRole(value ? value : '')}
                />
                <Button fullWidth mt="sm" disabled={activBut()} onClick={async () => {
                    await props.app.addNewUserToCamp({email: email, role: role})
                    await getUsers()
                    }}>
                    Добавить
                </Button>
                </Container>

                <SimpleGrid cols={3} style={{marginTop: '3.5vmax'}}>
                {users.map((item, index) =>
                    <Card key={index} withBorder p="md" radius="md" style={{marginTop: '0.2vmax', marginBottom: '0.2vmax'}}>
                        <div>
                            {index + 1}. {item['email']} 
                        </div>
                        <div>
                            {`(${item['role']})`}
                        </div>
                            {`${item['name']}`}
                        <div>
                            <div>
                                <hr style={{marginTop: '1.5vmax'}}></hr>
                            </div>
                        Получать уведомление о новом заказе:
                        </div>
                        <div>
                        {reninderSettings(users, item)}
                        </div>
                        <div>
                                <hr style={{marginTop: '1.5vmax'}}></hr>
                            </div>    
                        {showRoleEdit(item)}
                        <div>
                                <hr style={{marginTop: '3vmax'}}></hr>
                            </div>
                        <Button 
                            fullWidth 
                            mt="sm" 
                            disabled={stopDeleteOwner(item['role'])} 
                            onClick={async () => {
                                console.log(delete item['name'])
                                await props.app.deleteUserFromCamp(item)
                                getUsers()
                                }}>
                                Удалить
                        </Button>
                    </Card>
                )}
                </SimpleGrid>
            </Container>
         ) 
    }
    else{
        <div className={'mainScreenLoader'}><LoaderItem/></div>
    }
}