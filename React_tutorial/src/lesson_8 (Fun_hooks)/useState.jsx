
import {useState} from 'react'




 const State = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    // const [status, setStatus] = useState('Developer')

    const increment = () =>{
        setCount(count+1)
    }

    const decrement = () =>{
        setCount(count-1)
    }
    const reset = () =>{
        setCount(0)
    }

    const multiFunction = (e) => {
        setName({ ...name, [e.target.name]: e.target.value });
    }

    // const onStatusChange = (e) => {
    //     setStatus(e.target.value)
    // }



  return (
    <div>
        {/* with inputs */}
        <h1>Name: {name.name}</h1>
        <h1>Status: {name.status}</h1>
        <input onChange={multiFunction} name='name' type="text" placeholder='name' />
        <input onChange={multiFunction} name='status'type="text" placeholder='status' />
        <hr />
        
        
        
        
        
        {/* with buttons */}

        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button> <br />
        <button onClick={reset}>reset</button>
        <h1> Counter:{count}</h1>

    </div>
  )
}




// import React, { useState } from 'react';

// const State = () => {
//   const [name, setName] = useState({}); // Assuming `name` is initially an object

//   const multiFunction = (e) => {
//     setName({ ...name, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <input type="text" name="firstName" onChange={multiFunction} placeholder='fname' />
//       <input type="text" name="lastName" onChange={multiFunction} placeholder='lname' />
//       <p>First Name: {name.firstName}</p>
//       <p>Last Name: {name.lastName}</p>
//     </div>
//   );
// };

export default State
