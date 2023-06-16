import React, {useState} from 'react'

const App = () => {

    const[count, setCount] = useState(Number (localStorage.getItem('count')))

    const increment = () => {
      localStorage.setItem('count', JSON.stringify({count: count+1}))
      setCount(count+1)
    }

    const decrement = () => {
      localStorage.setItem('count', count-1)
      setCount(count-1)
    }

    const remove = () => {
      localStorage.removeItem('count')
    }

    JSON.parse((localStorage.getItem('count')))

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}> decrement</button>
        <button onClick={remove}> remove</button>
        <button onClick={()=> localStorage.clear()}> clear</button>
        
        </div>
  )
}

export default App


//local storage
// react-router-dom5



//localStorage  with Primitive data types


// const increment = () => {
//   localStorage.setItem('count', count+1)
//   setCount(count+1)
// }

// const decrement = () => {
//   localStorage.setItem('count', count-1)
//   setCount(count-1)
// }

// const remove = () => {
//   localStorage.removeItem('count')
// }

