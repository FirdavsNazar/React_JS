
import React, {useState} from 'react'

const Controlled = () => {

    const[name,setName] = useState('')


  return (
    <div>
        <h1>Controlled Component: {name}</h1>  <hr />
        <input  onChange={(e)=> setName(e.target.value)} type="text" placeholder='controlled name' /> 
        <hr />
    </div>
  )
}

export default Controlled