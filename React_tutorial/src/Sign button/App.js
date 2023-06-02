import React, {useState} from 'react'
import CompA from './SignUp/CompA'
import CompB from './SignIn/CompB'
import './App.css'

const App = () => {

  const [isLoggedIn, setLoggedIn] = useState(true)

  const handleSignIn = () => {
    setLoggedIn(false)
  }

  const handleSignUp = () => {
    setLoggedIn(true)
  }
  return (
    <div className='Container'>

      {
        isLoggedIn
        ?
        <CompA  click={handleSignIn} />
        :
        <CompB  click={handleSignUp} />

      }

    </div>

  )
}

export default App