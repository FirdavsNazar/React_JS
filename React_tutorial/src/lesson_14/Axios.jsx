import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Axios = () => {
  const [users, setUsers] = useState([]);

  const gettingdata = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => res.json())
      .then((data) => setUsers(data.data));
  };

  useEffect(() => {
    gettingdata();
  }, []);

  console.log(users);

  return (
    <div>
      {users.map((value) => {
        return (
          <div key={value.id}>
            <h3>
              Id: {value.id} Name: {value.name} Email: {value.email}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Axios;