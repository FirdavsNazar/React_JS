import React,{useState} from 'react'


const CompA = ({name, onUpdate}) => {
  
  return (
    <div>
        <h1>ComponentA</h1>
        
        <h4>Name is: {name}</h4>
        <button onClick={onUpdate}>Click me</button>
        
    </div>
  )
}

export default CompA