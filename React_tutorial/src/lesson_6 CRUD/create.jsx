


import React, { Component } from 'react';
import {users} from './read.js';

export default class Create extends Component {

    constructor(props) { 
    super(props)

    this.state = {
        dataList: users,
        name: '',
        status: '',
        id:''
      }
    }

  render() {

    

      const filteredInfo = (e) => {
        // console.log(e.target.value);
       let filtered =  users.filter((value) => value.id === 1 || value.name.toLowerCase().includes(e.target.value.toLowerCase()) || value.status.toLowerCase().includes(e.target.value.toLowerCase()))
      
       this.setState({
        dataList: filtered
       })
      }


    



      const onDelete = (id) => {
        let filtered = this.state.dataList.filter((value) => value.id !== id)
        
        this.setState({
            dataList: filtered
        })
      }

      const onChange = (e) => {

        this.setState({
        [e.target.name] : e.target.value
        })

      }


      const onCreate = ()  =>{
         
        let user = {
            id: Date.now(),
            name: this.state.name,
            status: this.state.status
        }

         this.setState({
            dataList: [...this.state.dataList, user],
            name:'',
            status: ''
         })

         console.log(user);

      }

    return (
        <div>  
          <input onChange={filteredInfo} type="text" placeholder='search...' />
          <select>
            <option value="id">id</option>
            <option value="name">name</option>
            <option value="status">status</option>
          </select>
           <br /> <br /> <hr />
          <h1> Name:{this.state.name}</h1>
          <h1>Status:{this.state.status}</h1>
          <input  value={this.state.name} name='name' onChange={onChange} type="text" placeholder='name' />
          <input  value={this.state.status} name='status' onChange={onChange} type="text" placeholder='status' />
          <button onClick={onCreate}>Create</button> <br /><br />
      
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
         this.state.dataList.length ?
      this.state.dataList.map(({id,name,status}) => {
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
    )
  }
} 