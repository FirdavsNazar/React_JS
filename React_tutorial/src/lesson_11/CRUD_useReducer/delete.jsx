import React, {useReducer} from 'react'

const fredReducer = (state,action)=>{

    switch(action.type){
        case 'DELETE': return state.filter((value)=> value.id !== action.payload.ids);
        default: return state
    }



}


const Delete = () => {
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
                    state.length
                        ?
                    state.map((value)=> {
                        return (
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td><button onClick={()=> dispatch({type:'DELETE', payload: {ids: value.id}})}>Delete</button></td>
                            </tr>
                        )
                        
                    })
                    : 
                    <h1 style={{textAlign: 'center'}}>No Data</h1>
                }
            </tbody>

        </table>
    </div>
  )
}

export default Delete