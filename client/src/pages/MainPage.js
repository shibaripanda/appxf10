import { NavbarMinimalColored } from '../components/NavBar/NavbarMinimalColored.tsx';
import '@mantine/core/styles.css';
import { fixNavBarItems } from '../modules/fixNavBarItems.js';
import { useEffect, useState } from 'react';
import { ServiceScreen } from '../mainScreens/ServiceScreen.tsx';
import { NewOrderScreen } from '../mainScreens/NewOrderScreen.tsx';
// import { Affix } from '@mantine/core';
import '../App.css';
import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch.tsx';
import { HeaderSearch2 } from '../components/HeaderSearch/HeaderSearch2.tsx';
import { LoaderItem } from '../components/Loader/LoaderItem.tsx';
import { createLisener } from '../modules/createLisener.js';
import { SettingsScreen } from '../mainScreens/SettingsScreen.tsx';
import { useNavigate } from 'react-router-dom'
import { AdminScreen } from '../mainScreens/AdminScreen.tsx';
import { GroupUsersScreen } from '../mainScreens/GroupUsersScreen.tsx';
import { OwnerScreen } from '../mainScreens/OwnerScreen.tsx';
import { AppClass } from '../clasess/AppClass.js';
import { OrderClass } from '../clasess/OrderClass.js';
import { sessionData } from '../modules/sessionData.js';
import { HeaderSearch3 } from '../components/HeaderSearch/HeaderSearch3.tsx';

function MainPage() {

  const navigate = useNavigate()
  const [active, setActive] = useState(0);
  const [navBar, setNavBar] = useState(false)
  const [appColor, setAppColor] = useState(false)
  const [text, setText] = useState(false)
  const [filter, setFilter] = useState(false)
  const [serviceSettings, setServiceSettings] = useState(false)
  const [newSet, setNewSet] = useState(false)
  const [textFilter, setTextFilter] = useState(false)
  const [value, setValue] = useState('');
  const [orders, setOrders] = useState([])

  const app = new AppClass()

  const defaultValue = (r) => {
    const obj = {}
    for(let i of r){
      if(i.neworder){
        if(['view', 'complect'].includes(i.index)){
          obj[i.index] = []
        }
        else{
          obj[i.index] = ''
        }
      }
    }
    setValue(obj)
    return obj
  }
  createLisener('createNewOrder', async (data) => {
    await app.greateOrder({...data.newOrder})
    .then(async (res) => {
      setOrders([new OrderClass(res.data), ...data.orders])
      setTimeout(() => setActive(0), 500)
    })
  })
  createLisener('createNewOrderAndPrint', async (data) => {
    await app.greateOrder({...data.newOrder})
    .then(async (res) => {
      setOrders([new OrderClass(res.data), ...data.orders])
      setTimeout(() => setActive(0), 7000)
    })
  })
  useEffect(() => {
    const navi = async () => {
      if(!await app.getCurrentUser() || !await app.getCampId() || !await app.getRole()){
        navigate('/')
      }
      else{
        getOrders()
        getNavBar()
        getAppColor()
        getText()
        getFixServiceSettings()
        getOrdersTimerUpdate()
      }
    }
    navi()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getOrdersTimerUpdate = async () => {
        // console.log('set interval')
        const interval = sessionStorage.getItem('interval')
        // console.log(interval)
        if(interval){
          clearInterval(Number(interval))
        }
        const int = setInterval(async () => {
        if(sessionData('read', 'currentUser')){
          // console.log('update orders')
          const res = await app.getOrdersTime(navigate)
          setOrders(res.sort((a, b) => b.date - a.date))
        }
        else{
          console.log('pause update orders')
        }
        sessionStorage.setItem('interval', int)
      }, await app.timeUpdate())
  }

  const getOrders = async () => {
    const res = await app.getOrders()
    setOrders(res.sort((a, b) => b.date - a.date))
  }
  const getText = async () => {
    const res = await app.getAppText()
    setText(res)
  }
  const getFixServiceSettings = async () => {
    const res = await app.fixServiceSettings()
    const res1 = defaultValue(res.generalOrderList)
    setValue(res1)
    setServiceSettings(res)
    setNewSet(res.userStatusFilter)
    setFilter(res.userDeviceFilter)
    document.title = 'ServiceXF ' + res.documents.namecomp.text
  }
  const getNavBar = async () => {
    const res = await fixNavBarItems()
    setNavBar(res)
  }
  const getAppColor = async () => {
    const res = await app.getColorApp()
    setAppColor(res)
  }
  
  if(navBar && appColor && text && serviceSettings && orders && newSet && filter){

    const screen = () => {
      
      const listScreens = [
        <ServiceScreen app={app} getOrders={getOrders} text={text} orders={orders} setOrders={setOrders} filter={filter} serviceSettings={serviceSettings} newSet={newSet} textFilter={textFilter}/>,
        <NewOrderScreen getOrders={getOrders} orders={orders} defaultValue={defaultValue} value={value} setValue={setValue} serviceSettings={serviceSettings}/>,
        <SettingsScreen app={app} text={text} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings}/>,
        <GroupUsersScreen app={app} text={text} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings}/>,
        <AdminScreen app={app} text={text} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings}/>,
        <OwnerScreen app={app} text={text} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings}/>,
      ]
      if(listScreens.length !== navBar.top.length){
        console.log('Какойто пиздец, Навбаров не столько сколько скринов!!!')
      }
      if(listScreens[active]){
        return (
          listScreens[active]
        )
      }
      return (
        <div>Что-то не так!</div>
      )
      
    }
    
    return (
      <div>
        <div className={'WorkScreen'}>
          {screen()}
        </div>
        <div className={'NavBar'}>
          <NavbarMinimalColored 
          active={active} 
          setActive={setActive} 
          navBar={{...navBar, top: navBar.top.filter(item => item.role.includes(sessionData('read', 'role')))}} 
          appColor={appColor}
          />
        </div>
        <div className={'NavBarTop'}>
          <HeaderSearch2 app={app} filter={filter} setFilter={setFilter} serviceSettings={serviceSettings}/>
          
          <div className={'NavBarTop2'}>
            <HeaderSearch app={app} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings} newSet={newSet} setNewSet={setNewSet}/>
            <HeaderSearch3 app={app} textFilter={textFilter} setTextFilter={setTextFilter} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings} newSet={newSet} setNewSet={setNewSet}/>
            {/* <Affix>ssdd</Affix>   */}
          </div>
        </div>
      </div>
  )
  
  }
  else{
    return (
      <div className={'mainScreenLoader'}><LoaderItem/></div>
    )
  }

}

export default  MainPage;
