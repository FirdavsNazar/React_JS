
import React, {Component} from "react";



export class index extends Component {
    
    constructor(props){
        super(props)
        this.state = {favouriteColor: 'red'}
        console.log('constructor..');
    }

    //   componentDidMount(){
    //     console.log('didmount');
    //     setTimeout(()=> {
    //         this.setState({favouriteColor: 'yellow'})
    //     },2000)
    //   }

      shouldComponentUpdate(){
        return true
      }

      change = () => {
        this.setState({favouriteColor: 'yellow'})
      }

    componentDidUpdate(){
        console.log('Yangilandi');
    }



  render() {
    console.log('render');
    return (
      <div>
        
        <h1>My favourite color is {this.state.favouriteColor}</h1>
        <button onClick={this.change}>Change color</button>
      
      </div>
    )
  }
}

export default index