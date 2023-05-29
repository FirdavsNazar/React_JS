

import React, { useState } from 'react';
import { users } from '../data.js';

export const Update = () => {
    const[ values, setValues] = useState({
        name: '',
        status: ''
    });


  const [data, setData] = useState(users);
  const [select, setSelect] = useState(null);


  
    //  Input function

    const multiFunction = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const onUpdate = ({id,name,status}, isSave) => {
        if(isSave){
            let updated = data.map((value) => value.id === select?.id ? {...value, name:values.name, status: values.status} : value)
            setData(updated);
            setSelect(null);
        } else {

            setValues({
                name:name,
                status: status
            })
            setSelect({id,name,status})

        }
    }
    



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
         
            <tbody>
              {data.map(({ id, name, status }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    {
                        select?.id === id 
                        ? 
                        <input onChange={multiFunction} value={values.name} name='name' type="text" />
                        :
                        name
                    }
                  </td>
                  <td>
                    {
                        select?.id === id
                        ?
                        <input onChange={multiFunction} value={values.status} name='status' type="text" />
                        :
                        status
                    }
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                  <td>
                    <button onClick={() => onUpdate({id,name,status}, select?.id === id)}>
                        {select?.id === id? 'save' : 'edit'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Update;