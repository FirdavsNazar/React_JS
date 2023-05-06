
import React, { Component } from 'react'

 class Lesson1 extends Component {
  render() {
    return (
      <div> 
        <h3>WelCome to </h3>
        <h1> {this.props.city} life </h1>
        <h5> {this.props.city} has {this.props.population || 'unknown'}  population  </h5>
      </div>
    )
  }
}



// class Lesson2 extends Component {
//   render() {
//     return (
//       <div> 
//         <h1>HELLO </h1>
//         <h3>hELLO Uzbekistan</h3>
//       </div>
//     )
//   }
// }


export default  Lesson1;
// export { Lesson2 }