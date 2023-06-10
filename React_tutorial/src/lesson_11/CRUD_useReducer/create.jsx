import React, {useReducer, useState} from 'react'
import {users} from './data.js'



const fredReducer = (state,action)=>{

switch(action.type) {
    
    //searching
    case 'FINDING': return users.filter((value) => value.name.toLowerCase().includes(action.payload.toLowerCase()))
    //createing 
    case 'Create' : return [...state, {
        id: state.length + 1,
        name: action.payload.ism
    }]

}
}

const Create = () => {
    const [ name, setName] = useState('')
    const [ title, setTitle] = useState('')
    const [state,dispatch] = useReducer(fredReducer,
        [
            {id: 1, name: 'Firdavs'},
            {id: 2, name: 'Anvar'},
            {id: 3, name: 'Jasur'},
        
        ]
        )
        // console.log(state);
  return (
    <div>
        <input onChange={(e)=> dispatch({type: 'FINDING', payload: e.target.value})} type="text" placeholder='Search...' />
        <br />
        <input onChange={(e)=> setTitle(e.target.value)} type="text" placeholder='Enter your name' />
        <button onClick={()=> dispatch({type: 'Create', payload: {ism:title}})}>Create</button>
        <table width={'40%'} border='2' style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map((value)=> {
                        return (
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td><button>Delete</button></td>
                            </tr>
                        )
                        
                    })
                }
            </tbody>

        </table>
    </div>
  )
}

export default Create