import React from "react";
import "./figmaStyle.css"




class Card extends React.Component{
    render(){
        return(
            <dir className='container'>

                <div className = 'conchild1'></div>
                <div className = 'conchild2'>
                   
                   <div className="textParent">

                         <div className="textChild">
                            <h1 className="text">Enjoy Beauty place in Bali City</h1>
                            
                            </div>  
                   
                    <div className="textChild1">
                             <h1 className="text2">10 Day’s</h1>
                             <h1 className="text2">8 person</h1>
                             <h1 className="text2">4.8  (2.5k Review)</h1>
                    </div>
                            <div className="textChild2">
                             
                             <h1 className="text2">Bali, indonesia</h1>
                             <input type="button" value="12000" className="btn" />

                            </div>
                            
                   </div>
                
                </div>

               
            </dir>
        )
    }
}

export default Card