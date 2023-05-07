import React from "react";
import Child from "./props_Child";



const Parent = () => {
    return (
        <div>

            <h1>
                I am a Parent Component
            </h1>
            <Child text = 'I am a 1st Child '/>
           

        </div>
    )
}


export default Parent