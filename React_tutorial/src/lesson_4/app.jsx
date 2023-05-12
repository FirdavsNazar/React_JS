
import React, { Component } from 'react'

export default class App extends Component {

   constructor(props){
    super(props)
    this.state = {
        count:0,
        title:''
    }
   }

  render() {

// const getValue = (e) => {
//     // console.log(event.target.value);
//     this.setState({title : e.target.value})

// }


return (
    <div>
        <button onClick={() => this.setState({count: this.state.count + 1})}> + </button>
        <h1>{this.state.count}</h1>
        <h2>{this.state.title}</h2>
    <input onChange={(e) => this.setState({title : e.target.value})} type="text" placeholder='title' />
      </div>
    )
}
}


//select/option

// {/* <select onChange={onSelect} >
//     <option value="uzb">uzb</option>
//     <option value="usa">usa</option>
//     <option value="kor">kor</option>
    
//     </select> */}








// const increase = () =>{
    //     if(this.state.count < 15){
        
        //         this.setState({count : this.state.count+1})
//     }
// }

// const decrease = () =>{
//     if(this.state.count > 1){

//         this.setState({count : this.state.count-1})
//     }


// {/* <button onClick={increase}>+</button>
// <h2>{this.state.count}</h2>
// <button onClick={decrease}>-</button> <br /> <br /> */}






//Simple way with veriable

// let count = 0;

// const increase = () =>{
//     count = count + 1
//     console.log(count);
// }

// const decrease = () =>{
//     count = count - 1
//     console.log(count);
// }