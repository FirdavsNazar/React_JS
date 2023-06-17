import React from 'react'
import { Container,Link } from './style'


const Navbar = () => {
  return (
    <Container>
      
     
         <Link activeStyle={{color: 'red'}} to={'/'} exact>Logo</Link>
     

     
         <Link activeStyle={{color: 'red'}} to={'/home'}>Home</Link>
        

        
        <Link activeStyle={{color: 'red'}} to={'/about'}>About</Link>
      
         
    
         <Link activeStyle={{color: 'red'}} to={'/projects'}>Projects</Link>
     
   
    
         <Link activeStyle={{color: 'red'}} to={'/contacts'}>Contacts</Link>
  
   


    </Container>
  )
}

export default Navbar