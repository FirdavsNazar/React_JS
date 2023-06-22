import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom'


const Contacts = () => {

  const navigate = useNavigate()
  const onSave = () => {
    if(loginRef.current.value == 'webbrain' && 
    pwRef.current.value === '1234')
    {
      localStorage.setItem('token', true);
      navigate('/projects')
    } else {
      localStorage.setItem('token', false)
      alert('Check id or password')

    }

  }
  const loginRef = useRef()
  const pwRef = useRef()
  return (
    <div><br /> Contacts <hr />
      <input  ref={loginRef} type="text" />
      <input  ref={pwRef}    type="text" />
      <button onClick={onSave}>submit</button>
    </div>
  )
}

export default Contacts