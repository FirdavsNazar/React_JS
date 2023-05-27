import React, { useState } from 'react';
// import axios from 'axios'
import { users } from '../data.js';

export const Delete = () => {
  const [data, setData] = useState(users);

  const handleDelete = (userId) => {
    const updatedData = data.filter((user) => user.id !== userId);
    setData(updatedData);
  };

  return (
    <div>
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




  // const onDelete = (id) => {
  //   axios.delete(data.filter((user) => user.id !== id));
  // };