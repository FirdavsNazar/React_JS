
import React from 'react';
import {Container, Wrapper, Img, Span,Link,Button} from './style.js';
import logo from '../../assets/logo.png';
import {navLink} from '../data.js'


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
         
         <Wrapper.Logo>
            <Img src={logo} alt="" />
            <Span> Explore</Span> 
         </Wrapper.Logo>
        
         < Wrapper.Link>
         {
            navLink.map((value)=> {
               return(
                  <Link>{value.title}</Link>
              )
            })
         }
          <Button>Sign UP</Button>
         </Wrapper.Link>
       </Wrapper>
    </Container>
  )
}

export default Navbar