
import React, {createContext, useState} from 'react'

export const InfoContext = createContext();

export const GlobalContext = ({children}) => {
    
    const [count, SetCount] = useState(0)
    const [name, SetName] = useState('')

    const addOne = () => {
        SetCount(count+1)
    }

    const addTen = () => {
        SetCount(count+10)
    }

    const ChangeName = (e) => {
        SetName(e.target.value)
    }

    const addNum = () => {

        SetCount(count + +name)

    }

   


  return (
    <InfoContext.Provider value={{count, SetCount, addOne, addTen,name, ChangeName, addNum}}>
        
        {children}

    </InfoContext.Provider>
  )
}
