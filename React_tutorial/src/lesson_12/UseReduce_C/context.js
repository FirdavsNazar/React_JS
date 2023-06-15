import React, {createContext, useReducer} from 'react'
import {reducer} from './reducer'

export const InfoContext = createContext();





 const GlobalContext = ({children}) => {

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    name: ''
  })
    
  return (
    <InfoContext.Provider value={[state,dispatch]}>
        
        {children}

    </InfoContext.Provider>
  )
}

export default GlobalContext