import React, {useState} from 'react'
import A from '../Prop Drilling/A.jsx'



const App = () => {

    const [name, setName] = useState('Firdavsbek')
  return (
    <div>
        <A name={name}/>
    </div>
  )
}

export default App