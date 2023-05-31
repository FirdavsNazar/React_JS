import React, {useState} from 'react'

const Counter = ({count,increment,decrement,reset}) => {
    

  return (
    <div>
        <button onClick={increment}>Increment</button>
       
        <button onClick={decrement}>decement</button>
        
        <button onClick={reset}>reset</button>
        <h1>Current Count: {count}</h1>
    </div>
  )
}

export default Counter