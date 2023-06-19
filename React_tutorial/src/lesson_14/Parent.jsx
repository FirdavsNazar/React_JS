import React, {useState, useMemo, useCallback} from 'react'
import Child from './Child'


const Parent = () => {
    
    const[count,setCount] = useState(0)

    // const student = useMemo(() => {
    //     return  {name:'Firdavs'}
    // }, [])
  

    const studentCall = useCallback(() => {    //ism
        return  {name:'Firdavs'}                        //name:ism
    }, [])
  
  
  
    return (
    <div>
        <h1>Parent Component</h1>
        <h3>Counter: {count} </h3>
        <button onClick={()=> setCount(count+1)}>incr</button>
        <button onClick={()=> setCount(count-1)}>decr</button>
        <hr />

        <Child studentCall={studentCall}/>
    </div>
  )
}

export default Parent