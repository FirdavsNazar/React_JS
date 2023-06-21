import React from 'react'
import { Container,Link } from './style'
import { Outlet, NavLink } from 'react-router-dom'

const active =(url) => {
  return window.location.pathname.includes(url)

}



const Navbar = () => {
  return (
    <>
    
    
    <Container>
      
     
         <Link   to={'/'} exact>Logo</Link>
     

     
         <Link  active={active('/home')}  to={'/home'}>Home</Link>
        

        
        <Link active={active('/about')} to={'/about'}>About</Link>
      
         
    
         <Link  active={active('/projects')}  to={'/projects'}>Projects</Link>
     
   
    
         <Link active={active('/contacts')}  to={'/contacts'}>Contacts</Link>
  
   


    </Container>
    <Outlet/>
    </>
  )
}

export default Navbar