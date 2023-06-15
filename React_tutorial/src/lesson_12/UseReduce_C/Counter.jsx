import React, {useContext} from 'react'
import  {InfoContext} from './context'

const Counter = () => {

  const [state] = useContext(InfoContext)


  return (
    <div>
      {state.count} <hr />
   
    </div>
  )
}

export default Counter