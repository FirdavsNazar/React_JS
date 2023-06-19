import React, {useRef} from 'react'

const Uncontrolled = () => {

const name = useRef('');


  return (
    <div>
     <h1>Uncontrolled component: </h1>
    <input ref={name} type="text" placeholder='uncontrolled' />
    <button onClick={()=> {
     alert(name.current.value)}}>Clicked</button>
 
     </div>
  )
}

export default Uncontrolled