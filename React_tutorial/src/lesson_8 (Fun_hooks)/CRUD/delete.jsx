import {useState} from 'react'
import {users} from '../data.js'


export const Delete = () => {
    const [data, setData] = useState(users);
    const [filteredData, setFilteredData] = useState([]);
  
    const onDelete = (userId) => {
      const updatedData = data.filter((user) => user.id !== userId);
      setFilteredData(updatedData);
    };
  
    return (
      <div>
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
         users.length ?
      users.map(({id,name,status}) => {
        return(
          <tbody key={id}>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{status}</td>
              <td><button onClick={()=>onDelete (id)}>delete</button></td>
              <td><button>edit</button></td>
            </tr>
          </tbody>
        )
      })
      : 

      <tbody>
        <tr>
            <th colSpan={5}>
         
                <h1> No user</h1>

            </th>
        </tr>
          
      </tbody>
      
    }
	</table>
	</div>
      </div>
    );
  };
  
  export default Delete;
  
