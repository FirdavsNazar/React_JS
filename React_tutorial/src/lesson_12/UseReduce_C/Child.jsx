import React, {useContext} from 'react'
import { InfoContext } from './context';

const Child = () => {
  
  const [state,dispatch] = useContext(InfoContext); 

  return (
    <div>

    </div>
  )
}

export default Child