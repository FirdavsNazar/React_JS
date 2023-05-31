
import React, {useState} from 'react'
import CompA from './CompA'
import CompB from './CompB'

const Index = () => {
    
    const [name, setNama] = useState('Firdavs')


    const onUpdate = () =>{
        if(name=== 'Firdavs'){
            setNama('Abbosbek')
        }else {
            setNama('Firdavs')
        }
    }
  
    return (
    <div>
        
        <CompA name={name} onUpdate={onUpdate}/>
        <CompB name={name} onUpdate={onUpdate}/>
    
    
    </div>
  )
}

export default Index
















// const Index = () => {
    
//     const[count, setCount] = useState(0)

//     const increment = () =>{
//         if(count <= 15){
//             setCount(count+1)
//         }

//     }
//     const decrement = () =>{
//         if(count > -15){
//             setCount(count-1)
//         }

//     }
//     const reset = () =>{
//         setCount(0)

//     }
//   return (
//     <div><Counter count={count} increment={increment} decrement={decrement} reset={reset}/></div>
//   )
// }

// export default Index