
import React, {useReducer} from 'react'

const fredReducer = (state, action)=>{

    switch(action.type){

        case 'update': return{
            ...state, 
            select: action.payload.mock.id,
            title: action.payload.mock.name,
        }
        case 'GETNAME': return{
            ...state,
            title: action.payload.titleEvent
        }
        case 'SAVE' : return{
            data: state.data.map((value)=> value.id === state.select ? {...value, name: state.title} : value)
        }
        default: return state
    }

}



const Update = () => {
    const [state,dispatch] = useReducer(fredReducer,
       {
          data: [
                   {id: 1, name: 'Firdavs'},
                   {id: 2, name: 'Anvar'},
                   {id: 3, name: 'Jasur'},
                ],
               select: null,
               title: ''   
    } 
        )
        // console.log(state.title);
        
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
                    state.data.map((value)=> {
                        return (
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>
                                    {
                                        state.select === value.id
                                        ?
                                        <input value={state.title} onChange={(e) => dispatch({type: 'GETNAME', payload: {titleEvent: e.target.value}})} type="text" />
                                        :
                                        value.name
                                    }
                                    </td>
                                <td>
                                    {
                                        state.select === value.id
                                        ?
                                        <button onClick={()=> dispatch({type: 'SAVE' })}>save</button>
                                        :
                                       <button onClick={()=> dispatch({type: 'update', payload: {mock: value}})}>edit</button>
                                    }
                                    </td>
                            </tr>
                        )
                        
                    })
                }
            </tbody>

        </table>
    </div>
  )
}

export default Update