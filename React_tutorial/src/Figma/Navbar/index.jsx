
import React from 'react'
import {Container, Div, Div1, Button} from './style.js'


const Navbar = () => {
  return (
    <Container>

<Div Navbar>

        <div logo>
             <img src="" alt="" />
             <h1>Explore</h1>
         </div>

         <Div1 Menu>

            <p>Home</p>
            <p>Tours</p>
            <p>Hotel</p>
            <p>Galary</p>
            <p>Pages</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Login</p>
            
            <Button sign >Sign UP</Button>


         </Div1>


</Div>
       
    </Container>
  )
}

export default Navbar