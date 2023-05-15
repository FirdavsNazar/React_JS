


//function call
//multi state change
//student list


// 1. function call


import React, { Component } from 'react'

export default class state extends Component {

    constructor(props) { 
    super(props)

    this.state = {
        name: '',
        status: ''
    }
    }

  render() {


    const nameChange = (e) => {

        // console.log(e);

        this.setState({name: e.target.value })

    }


    const statusChange = (e) => {

        // console.log(e.target.value);
        this.setState({status: e.target.value})
        
    }
    return (
        <div>   
            <h1>Name: {this.state.name}</h1>
            <h1>Status: {this.state.status}</h1>
            <input onChange={ nameChange} type="text" placeholder='name' />
            <input onChange={ statusChange} type="text" placeholder='status' />
        </div>
    )
  }
} 
