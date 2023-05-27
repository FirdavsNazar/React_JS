import React, { useState } from 'react';
import { users } from '../data.js';

export const Search = () => {
  const [data, setData] = useState(users);

  const handleDelete = (userId) => {
    const updatedData = data.filter((user) => user.id !== userId);
    setData(updatedData);
  };

  const filteredInfo = (e) => {
   let filtered =  users.filter((value) => value.name.includes(e.target.value) || value.status.includes(e.target.value))
  
   setData(filtered);
  }

  return (
    <div>
         <input onChange={filteredInfo} type="text" placeholder='search...' /> <br /> <br />
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

export default Search;
