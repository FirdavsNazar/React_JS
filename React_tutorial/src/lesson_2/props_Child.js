import React from "react";


//Without Destructure

// const Child = (props) => {

//     return (
//         <div>

//             <h1>
//                 {props.text} {props.status}
//             </h1>

//         </div>
//     )
// }




// With Destructure
// 1-way



const Child = (props) => {
    const{text, status} = props
    return (
        <div>

            <h1>
                {text} {status}
            </h1>
            {props.children}

        </div>
    )
}




// With Destructure
// 2-way



// const Child = ({text,status}) => {
   
//     return (
//         <div>

//             <h1>
//                 {text} {status}
//             </h1>

//         </div>
//     )
// }





// How to call props to Class Components

// class Child extends React.Component{
//     render(){
//         return (
//             <div>
//                 {this.props.text} {this.props.status}

//             </div>
//         )
//     }
// }



export default Child