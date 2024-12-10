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
  const [value, setValue] = useState('')
  const [orders, setOrders] = useState([])
  const [subCamp, setSubCamp] = useState('')
  const [photos, setPhotos] = useState([])
  const app = new AppClass()
  const [leng] = useState(app.getLeng())

  

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
  createLisener('createNewOrderAndPrint', async (data) => {
    await app.greateOrder({
      ...data.newOrder, 
      complect: data.newOrder.complect.join(', '), 
      view: data.newOrder.view.join(', '), 
      campName: data.campInfo.documents.namecomp.text,
      filial: data.campInfo.documents.filial.text
    })
    .then(async (res) => {
      setOrders([new OrderClass(res.data), ...data.orders])
      setTimeout(() => setActive(0), 7000)
      app.deletePhotos()
      setPhotos([])
    })
  })
  useEffect(() => {
    console.log(app.getLeng())
    const navi = async () => {
      if(!await app.getCurrentUser() || !await app.getCampId() || !await app.getRole() || !app.getLeng()){
        navigate('/')
      }
      else{
        getPhotos()
        getOrders()
        getNavBar()
        getAppColor()
        getText()
        getFixServiceSettings()
        // getOrdersTimerUpdate()
      }
    }
    navi()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const getOrdersTimerUpdate = async () => {
  //       const interval = sessionStorage.getItem('interval')
  //       if(interval){
  //         clearInterval(Number(interval))
  //       }
  //       const int = setInterval(async () => {
  //       if(sessionData('read', 'currentUser')){
  //         const res = await app.getOrdersTime(navigate)
  //         setOrders(res.sort((a, b) => b.date - a.date))
  //         const ph = await app.getPhotosTime(navigate)
  //         setPhotos(ph)
  //       }
  //       else{
  //         // console.log('pause update orders')
  //       }
  //       sessionStorage.setItem('interval', int)
  //     }, await app.timeUpdate())
  // }

  const getPhotos = async () => {
    const res = await app.getPhotos()
    console.log(res)
    setPhotos(res ? res : [])
  }

  const getOrders = async () => {
    // console.log(await app.getOrdersActiv())
    const res = await app.getOrders()
    console.log(res[0])
    setOrders(res.sort((a, b) => b.date - a.date))
  }
  const getText = async () => {
    setText(await app.getText())
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
    const res = await fixNavBarItems(await app.getText(), leng)
    setNavBar(res)
  }
  const getAppColor = async () => {
    const res = await app.getColorApp()
    setAppColor(res)
  }
  
  if(navBar && appColor && text && serviceSettings && orders && newSet && filter){

    const screen = () => {
      
      const listScreens = [
        <ServiceScreen leng={leng} app={app} getOrders={getOrders} text={text} orders={orders} setOrders={setOrders} filter={filter} serviceSettings={serviceSettings} newSet={newSet} textFilter={textFilter}/>,
        <NewOrderScreen getPhotos={getPhotos} leng={leng} setPhotos={setPhotos} app={app} photos={photos} getOrders={getOrders} orders={orders} defaultValue={defaultValue} value={value} setValue={setValue} serviceSettings={serviceSettings}/>,
        <SettingsScreen leng={leng} app={app} text={text} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings}/>,
        <GroupUsersScreen leng={leng} app={app} text={text} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings}/>,
        <AdminScreen leng={leng} app={app} text={text} serviceSettings={serviceSettings} setServiceSettings={setServiceSettings}/>,
        <OwnerScreen leng={leng} app={app} text={text} subCamp={subCamp} setSubCamp={setSubCamp}/>,
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
          text={text}
          leng={leng} 
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
