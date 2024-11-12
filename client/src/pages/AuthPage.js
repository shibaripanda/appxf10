import '@mantine/core/styles.css'
import { useEffect, useState } from 'react'
import { AuthenticationPassword } from '../components/Auth/AuthenticationPassword.tsx'
import { AuthenticationEmail } from '../components/Auth/AuthenticationEmail.tsx'
import { validateEmail } from '../modules/validateEmail.js'
import { AuthenticationNew } from '../components/Auth/AuthenticationNew.tsx'
import { LoaderItem } from '../components/Loader/LoaderItem.tsx'
import { useNavigate } from 'react-router-dom'
import { CampSelect } from '../components/Auth/CampSelect.tsx'
import { sessionData } from '../modules/sessionData.js'
import { AuthClass } from '../clasess/AuthClass.js'
import { AppClass } from '../clasess/AppClass.js'

function AuthPage() {
  const navigate = useNavigate()
  const [camps, setCamps] = useState([])
  const [step, setStep] = useState(1)
  const [newServiceName, setNewServiceName] = useState(false)
  const [email, setEmail] = useState(false)
  const [password, setPassword] = useState(false)
  const [errorInputData, setErrorInputData] = useState('')
  const [errorInputName, setErrorInputName] = useState('')
  const [activBotton, setActivBotton] = useState(false)
  const [activBottonName, setActivBottonName] = useState(false)
  const [serverError, setServerError] = useState('')
  const [text, setText] = useState(false)
  const [avLeng, setAvLeng] = useState(false)
  
  const auth = new AuthClass()
  const app = new AppClass()

  const [leng, setLengx] = useState('en')

  useEffect(() => {
    getText()
    userLenguage()
  }, [])

  async function userLenguage(){
    const systemLenguage = window.navigator.language.substring(0,2) ? window.navigator.language.substring(0,2) : 'en'
    const avLengs = await app.getAvailableLanguages()
    setAvLeng(avLengs)
    if(!avLengs.map(item => item.index).includes(systemLenguage)){
      setLeng('en')
    }
    else{
      setLeng(systemLenguage)
    }
  }

  const setLeng = (lenguage) => {
    sessionData('write', 'leng', lenguage)
    setLengx(lenguage)
  }

  const getText = async () => {
    setText(await app.getText())
  }
  const startRequest = async () => {
    await auth.startRequest({email: email})
    .then((res) => {
      // console.log(res)
      setStep(2)
    })
    .catch((error) => {
      setServerError(text[error.response.data.message])
    })
  }
  const startPasswordRequest = async () => {
    await auth.startPasswordRequest({authcode: password, email: email})
    .then(async (res) => {
      sessionData(`write`, 'currentUser', res.data.email + '#' + res.data.name + '#' + res.data.token)
      sessionData(`write`, 'activUsers', res.data.email + '#' + res.data.name + '#' + res.data.token)
      await getMyCamps()
    })
    .catch((error) => {
      setServerError(error.response.data.message)
    })
  }
  const createNewCamp = async () => {
    await auth.createNewCamp({newServiceName: newServiceName, email: email, password: 'password'})
    .then(() => {
      setStep(2)
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
  }
  const stepSet = (step) => {
    setEmail(false)
    setPassword(false)
    setNewServiceName(false)
    setActivBotton(false)
    setActivBottonName(false)
    setErrorInputName('')
    setErrorInputData('')
    setStep(step)
  }
  const setValidatedEmail = (email) => {
    setErrorInputData('')
    setActivBotton(false)
    const res = validateEmail(email)
    if(res){
      setEmail(email.toLowerCase())
      setErrorInputData('')
      setActivBotton(true)
    }
    else if(email === ''){
      setActivBotton(false)
      setErrorInputData('')
    }
    else{
      setActivBotton(false)
      setErrorInputData(text.errorInputEmail[leng])
    }
  }
  const setValidatedPassword = (password) => {
    setErrorInputData('')
    setActivBotton(false)
    const res = /^\d+$/.test(password)
    if(res){
      setPassword(password)
      setErrorInputData('')
      setActivBotton(true)
    }
    else if(password === ''){
      setActivBotton(false)
      setErrorInputData('')
    }
    else{
      setActivBotton(false)
      setErrorInputData(text.errorInputEmail[leng])
    }
  }
  const setValidatedNameNew = (name) => {
    setErrorInputName('')
    setActivBottonName(false)
    const res = /^[A-z\d]+$/.test(name)
    if(res){
      setNewServiceName(name)
      setErrorInputName('')
      setActivBottonName(true)
    }
    else if(name === ''){
      setActivBottonName(false)
      setErrorInputName('')
    }
    else{
      setActivBottonName(false)
      setErrorInputName(text.errorInputEmail[leng])
    }
  }
  const getMyCamps = async () => {
    await app.getMyCamp()
    .then((res) => {
      setCamps(res.data)
      if(res.data.length) setStep(4)
      else setStep(3)
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
  }
  const selectCamp = (camp, role) => {
    sessionData(`write`, 'campId', camp)
    sessionData('write', 'role', role)
    navigate('/main')
  }

  if(step === 1 && text && leng && avLeng){
      return (
            <div>
              <AuthenticationEmail
              setLeng={setLeng}
              leng={leng}
              text={text}
              avLeng={avLeng}
              serverError={serverError} 
              setStep={stepSet}
              setEmail={setValidatedEmail} 
              clickOnBut={startRequest} 
              errorInputData={errorInputData} 
              activBotton={activBotton}
              />
            </div>
      )
  }
  else if(step === 2){
    return (
          <div>
            <AuthenticationPassword
            setLeng={setLeng}
            leng={leng}
            text={text}
            avLeng={avLeng}
            setStep={stepSet}
            setPassword={setValidatedPassword} 
            clickOnBut={startPasswordRequest} 
            errorInputData={errorInputData} 
            activBotton={activBotton}
            />
          </div>
    )
  }
  else if(step === 3){
    return (
          <div>
            <AuthenticationNew
            setLeng={setLeng}
            leng={leng}
            text={text}
            avLeng={avLeng}
            setStep={stepSet}
            setValidatedNameNew={setValidatedNameNew}  
            setEmail={setValidatedEmail}
            errorInputData={errorInputData}
            errorInputName={errorInputName} 
            clickOnBut={createNewCamp}
            activBotton={activBotton}
            activBottonName={activBottonName}
            />
          </div>
    )
  }
  else if(step === 4){
    if(!camps.length){ 
      getMyCamps()
    }
    if(camps.length){
      return (
        <div>
          <CampSelect
          setLeng={setLeng}
          leng={leng}
          text={text}
          avLeng={avLeng}
          camps={camps}
          clickOnBut={selectCamp}
          setStep={setStep} 
          />
        </div>
      )
    }
    else{
      return (
        <div className={'mainScreenLoader'}><LoaderItem/></div>
      )
    }
    
  }
  else{
    return (
      <div className={'mainScreenLoader'}><LoaderItem/></div>
    )
  }

}

export default  AuthPage
