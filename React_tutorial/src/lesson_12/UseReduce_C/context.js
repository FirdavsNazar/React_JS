
import React, {createContext, useReducer} from 'react'

export const InfoContext = createContext();

export const GlobalContext = ({children}) => {
    
  return (
    <InfoContext.Provider value={{}}>
        
        {children}

    </InfoContext.Provider>
  )
}