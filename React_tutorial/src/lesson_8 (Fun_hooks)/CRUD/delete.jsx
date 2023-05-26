// import React, { useState } from 'react';
// import axios from 'axios'
// import { users } from '../data.js';

// export const Delete = () => {
//   const [data, setData] = useState(users);

//   const onDelete = (id) => {
//     axios
//       .delete(`/api/data/${id}`)
//       .then((response) => {
//         // Handle success
//         const filteredData = data.filter((user) => user.id !== id);
//         setData(filteredData);
//         console.log('Data deleted successfully!');
//       })
//       .catch((error) => {
//         // Handle error
//         console.error('Error deleting data:', error);
//       });
//   };

//   return (
//     <div className="App">
//       <table border={1} style={{ borderCollapse: 'collapse' }} width={'50%'}>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Status</th>
//             <th>Delete</th>
//             <th>Edit</th>
//           </tr>
//         </thead>
//         {data.length ? (
//           <tbody>
//             {data.map(({ id, name, status }) => (
//               <tr key={id}>
//                 <td>{id}</td>
//                 <td>{name}</td>
//                 <td>{status}</td>
//                 <td>
//                   <button onClick={() => onDelete(id)}>Delete</button>
//                 </td>
//                 <td>
//                   <button>Edit</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         ) : (
//           <tbody>
//             <tr>
//               <th colSpan={5}>
//                 <h1>No user</h1>
//               </th>
//             </tr>
//           </tbody>
//         )}
//       </table>
//     </div>
//   );
// };

// export default Delete;




















import {useState} from 'react'
import axios from 'axios'
import {users} from '../data.js'


export const Delete = () => {
    const [data, setData] = useState(users);
    const [filteredData, setFilteredData] = useState([]);
  
    
    const onDelete = (id) => {
      axios
        .delete(`/api/data/${id}`)
        .then((response) => {
          const filteredData = data.filter((user) => user.id !== id);
          setData(filteredData);
          console.log('Data deleted successfully!');
        })
        .catch((error) => {
          console.error('Error deleting data:', error);
        });
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
  

  // const onDelete = (id) => {
  //   axios.delete(data.filter((user) => user.id !== id));
  // };