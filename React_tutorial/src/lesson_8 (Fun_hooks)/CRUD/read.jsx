

import {useState} from 'react'
import {users} from '../data.js'



export const Read = () => {

  const[ values, setValues] = useState({
    name: '',
    status: ''
});

    const [data, setData] = useState(users);
    const [search, setSearch] = useState('');
    
  


    //    Searching function

    const filteredInfo = (e) => {
      let filtered =  users.filter((value) => `${value[search]}`.toLowerCase().includes(e.target.value.toLowerCase()))

    setData(filtered);
  };


    // Input function

    const multiFunction = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
  }

   // Select 

   const onSelect = (e) =>{
    setSearch(e.target.value)
}
 
  return (

    <div>
      <select onChange={onSelect}>
            <option value="id">id</option>
            <option value="name">name</option>
            <option value="status">status</option>
        </select>
        <input onChange={filteredInfo} type="text" placeholder='search...' /> <br /> <br />
        <h1>Name: {values.name}</h1>
        <h1>Status: {values.status}</h1>
        <input onChange={multiFunction} name='name' type="text" placeholder='name' />
        <input onChange={multiFunction} name='status'type="text" placeholder='status' />
        <hr /> <br />

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





