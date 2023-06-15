
import React, {useContext} from 'react'
import  {InfoContext} from './context'

const Child = () => {

const [state, dispatch] = useContext(InfoContext)

  return (
    <div>

      <button onClick={()=> dispatch({type: 'ADDONE'})}>addOne</button>
      <br /> <br />
      <input onChange={(e)=> dispatch({type: 'ADDNUM', payload: e.target.value})} type="text" placeholder='addNum' />
      <button onClick={()=> dispatch({type: 'ADD'})}>addNum</button>

    </div>
  )
}

export default Child