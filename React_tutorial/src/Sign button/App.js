import React, {useState} from 'react'
import CompA from './SignUp/CompA'
import CompB from './SignIn/CompB'
import './App.css'

const App = () => {

  const [islogined, setLogined] = useState(true)

  const loginIn = () => {
    setLogined(false)
  }

  const loginUp = () => {
    setLogined(true)
  }

  
  return (
    <div className='Container'>

      {
        islogined
        ?
        <CompA click={loginIn} /> 
        :
        <CompB click={loginUp} />

      }

    

      

    </div>

  )
}

export default App