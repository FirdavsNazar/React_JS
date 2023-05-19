

import React, { Component } from 'react';
import {users} from './read.js';

export default class Update extends Component {

    constructor(props) { 
    super(props)

    this.state = {
        dataList: users,
        name: '',
        status: '',
        id:'' ,
        select: null
      }
    }

  render() {

    

      const filteredInfo = (e) => {
        // console.log(e.target.value);
       let filtered =  users.filter((value) => value.name.toLowerCase().includes(e.target.value.toLowerCase()) || value.status.toLowerCase().includes(e.target.value.toLowerCase()))
      
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

      }

       const onUpdate = ({id,name,status}, isActive) => {
        
        if(isActive){
          let updateValue= this.state.dataList.map((value) => value.id === this.state.select?.id ? {...value, name: this.state.name, status: this.state.status} : value)
            this.setState({
              select:null,
              dataList: updateValue
            
            })

        } else {

            this.setState({
                select: {id,name,status}
            })
        }
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
              <td>
                {
                    this.state.select?.id === id ? <input onChange={onChange} name='name' value={this.state.select.name} type="text" />  : name
                } 
              </td> 
              <td> 
                { 
                    this.state.select?.id === id ? <input onChange={onChange}  value={this.state.select.status} type="text" />  : status
                } 
              </td>
              <td><button onClick={()=>onDelete (id)}>delete</button></td>
              <td>
                <button onClick={()=>onUpdate ({id,name,status}, this.state.select?.id === id )}>
                    {this.state.select?.id === id ? 'save' : 'edit'}
                </button>
              </td>
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