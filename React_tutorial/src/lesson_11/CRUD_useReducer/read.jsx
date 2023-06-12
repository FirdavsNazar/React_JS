import React, {useReducer} from 'react'

const fredReducer = (state, action)=>{

}


const Read = () => {
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

export default Read