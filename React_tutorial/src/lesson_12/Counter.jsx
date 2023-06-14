import React, {useContext} from 'react'
import { InfoContext } from './context'



const Counter = () => {

    const {count, SetCount,name} = useContext(InfoContext);

    // console.log(data);
  return (
    <div>
        {count} <hr />
        {/* {name} */}
    </div>
  )
}

export default Counter