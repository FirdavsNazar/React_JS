

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
          <input onChange={filteredInfo} type="text" placeholder='search...' /> 
           {
            this.state.dataList.map((value) => {
                return (
                    <div key = {value.id}>
                        <h1>{value.id} {value.name} {value.status}</h1>
                    </div>
                )
            })
           }
        </div>
    )
  }
} 



/// CRUD => CREATE, READ, UPDATE, DELETE