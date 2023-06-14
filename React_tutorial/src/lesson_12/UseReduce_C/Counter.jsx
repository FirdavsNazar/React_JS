import React, {useContext} from 'react'
import { InfoContext } from './context';

const Counter = () => {

  const [state,dispatch] = useContext(InfoContext); 


  return (
    <div>
      {state} <hr />
    </div>
  )
}

export default Counter