
import React, { Component } from 'react';
import {users} from './data.js';

export default class Data extends Component {

    constructor(props) { 
    super(props)

    this.state = {
        dataList: users
       
      }
    }

  render() {

    

      const filteredInfo = (e) => {
        // console.log(e.target.value);
       let filtered =  users.filter((value) => value.name.includes(e.target.value) || value.status.includes(e.target.value))
      
       this.setState({
        dataList: filtered
       })
      }

    return (
        <div>  
          <input onChange={filteredInfo} type="text" placeholder='search...' /> <br /> <br />
          
<div className="App">
	<table border={1} width={500} >
		<tr>
		<th>Id</th>
		<th>Name</th>
		<th>Status</th>
		</tr>
		{users.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.id}</td>
			<td>{val.name}</td>
			<td>{val.status}</td>
			</tr>
		)
		})}
	</table>
	</div>
           

          
          
        </div>
    )
  }
} 