




// 2. multi state change


import React, { Component } from 'react'

export default class multi_state extends Component {

    constructor(props) { 
    super(props)

    this.state = {
        name: '',
        status: '',
        hobby: ''
    }
    }

  render() {

     const multiFunction = (e) => {

        this.setState({[e.target.name]: e.target.value})
        // console.log(e.target.name); 
     }

    
    return (
        <div>   
            <h1>Name: {this.state.name}</h1>
            <h1>Status: {this.state.status}</h1>
            <h1>Hobby: {this.state.hobby}</h1>
            <input name='name' onChange={multiFunction} type="text" placeholder='name' />
            <input name= 'status' onChange={multiFunction} type="text" placeholder='status' />
            <input name= 'hobby' onChange={multiFunction} type="text" placeholder='hobby' />
        </div>
    )
  }
} 

