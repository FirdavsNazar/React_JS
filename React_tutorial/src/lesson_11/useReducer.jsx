import React, {useReducer} from 'react'
 

const reducer = (state, action) => {

  switch(action.type) {
    case 'Inc': return state = state +1;
    case 'Dec': return state = state > 0 ? state-1 : state;
    default: return state
  }
   
}

 const App = () => {
  const [count, dispatch] = useReducer(reducer, 0); 


  return (
    <div>
      <h1>Counter: {count}</h1>
      <button  onClick={()=> dispatch({type: 'Inc'})} >Increment</button>
      <button  onClick={()=> dispatch({type: 'Dec'})} > Decrement</button>
    </div>
  )
}


export default App
