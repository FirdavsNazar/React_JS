import React, {useReducer} from 'react'
 

const reducer = (state, action) => {

  console.log(action.payload);

  switch(action.type) {
    case 'Inc': return state = action.payload;      // state + 1
    case 'Dec': return state = action.payload       //state > 0 ? state-1 : state;
    default: return state
  }
   
}

 const App = () => {
  const [count, dispatch] = useReducer(reducer, 0); 


  return (
    <div>
      <h1>Counter: {count}</h1>
      <button  onClick={()=> dispatch({type: 'Inc', payload: 'Firdavs'})} >Increment</button>
      <button  onClick={()=> dispatch({type: 'Dec', payload: "Abunim"})} > Decrement</button>
    </div>
  )
}


export default App
