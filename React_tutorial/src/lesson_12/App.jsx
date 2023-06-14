import React from 'react'
import Counter from './Counter'
import Child from './Child'

const contextA_UseR = () => {
  return (
    <div>
        <Counter/>
        <Child/>

    </div>
  )
}

export default contextA_UseR




// context + useReducer = redux