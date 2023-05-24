import React from 'react'
import {users} from './data.js'

const key = () => {
  return (
    <div>
        {
            users.map((value) =>{
                return(
                    <div key={value.id}>

                    <h1>
                        {value.id} {value.name} {value.status}
                    </h1>

                    </div>
                )
            })
        }
    </div>
  )
}

export default key