import React, {memo} from 'react'

const Child = (props) => {
    console.log('Child is rendering');
  return (
    <div><h5>Name: {props.studentCall().name}</h5> </div>    //'Abbosbek'
  )
}

export default memo(Child)