import React from 'react'
import { Container,Link } from './style'
import { Outlet, NavLink } from 'react-router-dom'
import { navbar } from '../../utils/navbar';


const active =(url) => {
  return window.location.pathname.includes(url);

};



const Navbar = () => {
  return (
    <>
    
    
    <Container>

      {
        navbar.map((item) => {
          return <Link to={item.path} active={active(item.path)}> {item.title} </Link>
        })
      }
      
    </Container>
    <Outlet/>
    </>
  )
}

export default Navbar