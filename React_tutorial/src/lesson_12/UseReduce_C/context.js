
import React, {createContext, useReducer} from 'react'

export const InfoContext = createContext();

const reducer = (state, action) => {
  switch(action.type) {


  }
}

export const GlobalContext = ({children}) => {

  const [state, dispatch] = useReducer(reducer, 0)
    
  return (
    <InfoContext.Provider value={{state,dispatch}}>
        
        {children}

    </InfoContext.Provider>
  )
}