

import {useState} from 'react'
import {users} from '../data.js'



export const Read = () => {

    const [data, setUsers] = useState(users);
    const [filter, setFilter] = useState('');
  
    const filteredInfo = (e) => {
      const filterData = users.filter(
        (value) =>
          value.name.includes(e.target.value) || value.status.includes(e.target.value)
      );
      setFilter(filterData);
    };

        
  return (

    <div>
        <input onChange={filteredInfo} type="text" placeholder='search...' /> <br /> <br />

        <div className="App">
	<table border={1} style={{borderCollapse:'collapse'}} width={'50%'} >
    <thead>

		<tr>
		<th>Id</th>
		<th>Name</th>
		<th>Status</th>
		<th>Delete</th>
		<th>Edit</th>
   
		</tr>
    
    </thead>
		{
      users.map(({id,name,status}) => {
        return(
          <tbody key={id}>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{status}</td>
              <td><button>delete</button></td>
              <td><button>edit</button></td>
            </tr>
          </tbody>
        )
      })
    }
	</table>
	</div>
    </div>
  )
}

export default Read





