import React, {useContext} from 'react'
import { InfoContext } from './context'


const Child = () => {

    const {count, SetCount, addOne, addTen, ChangeName, addNum} = useContext(InfoContext); 

  return (
    <div>
        <button onClick={addOne}>addOne</button>
        <button onClick={addTen}>addTen</button>
        <br /> <br />
        <input onChange={(e) => ChangeName(e)} type="text" placeholder='addNum' />
        <button onClick={() => addNum()}>addNum</button>
    </div>
  )
}

export default Child
