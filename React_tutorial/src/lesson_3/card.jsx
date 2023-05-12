import React from "react";
import "./figmaStyle.css"
import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
import img3 from "./images/img3.png"
import img4 from "./images/img4.png"





class Card extends React.Component{
    render(){
        return(
            <dir className='container'>

                <div className = 'conchild1'></div>
                <div className = 'conchild2'>
                   
                   <div className="textParent">

                         <div className="textChild">
                            <h1 className="text">{this.props.title}</h1>
                            
                         </div>  
                   
                    <div className="textChild1">
                        <div className="img_wrapper">

                             <img className="img" src={img1} alt="" />
                             <h1 className="text2">10 Day’s</h1>

                             <img className="img" src={img2} alt="" />
                             <h1 className="text2">8 person</h1>

                             <img className="img" src={img3} alt="" />
                             <h1 className="text2">4.8  (2.5k Review)</h1>
                        </div>

                    </div>
                            <div className="textChild2">

                            <img className="img2" src={img4} alt="" />
                             <h1 className="text3">Bali, Indonesia</h1>
                             <input type="button" value="12000" className="btn_2" />

                            </div>    
                            
                   </div>
                
                </div>

               
            </dir>
        )
    }
}

export default Card