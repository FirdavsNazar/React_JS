import React, { useState } from 'react';
import { users } from '../data.js';

export const Delete = () => {

  const[ values, setValues] = useState({
    name: '',
    status: ''
});
  const [data, setData] = useState(users);
  const [search, setSearch] = useState('');



  //   Delete function

  const handleDelete = (userId) => {
    const updatedData = data.filter((user) => user.id !== userId);
    setData(updatedData);
  };

  //   Searching function

  const filteredInfo = (e) => {
    let filtered =  users.filter((value) => `${value[search]}`.toLowerCase().includes(e.target.value.toLowerCase()))

  setData(filtered);
};

  // Input function
  const multiFunction = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
}

//  Select

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
        <table border={1} style={{ borderCollapse: 'collapse' }} width={'50%'}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          {data.length ? (
            <tbody>
              {data.map(({ id, name, status }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{status}</td>
                  <td>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <th colSpan={5}>
                  <h1>No users</h1>
                </th>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Delete;



