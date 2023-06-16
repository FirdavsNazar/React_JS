import React from 'react'
import { Container,Link } from './style'


const Navbar = () => {
  return (
    <Container>
      
     
         <Link activeStyle={{color: 'red'}} to={'l'}>Logo</Link>
     

     
         <Link activeStyle={{color: 'red'}} to={'/home'}>Home</Link>
        

        
        <Link activeStyle={{color: 'red'}} to={'/about'}>About</Link>
      
         
    
         <Link activeStyle={{color: 'red'}} to={'/projects'}>Projects</Link>
     
   
    
         <Link activeStyle={{color: 'red'}} to={'/context'}>Context</Link>
  
   


    </Container>
  )
}

export default Navbar