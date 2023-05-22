import React from 'react'
import { Container,Wrapper, BtnJoin, BtnEmail,FooterButton, FooterHeader,WrapperHeader } from './style'

const Footer = () => {
  return (
    <Container>
        <Wrapper>
           <WrapperHeader>
              <FooterButton>
                  <BtnEmail>
                      Enter your e-mail here
                  </BtnEmail>
                  
                  < BtnJoin>
                       Subscribe Now
                  </BtnJoin>

              </FooterButton>
              <FooterHeader>
                  Sign Up For Our Newsletter
              </FooterHeader>

          </WrapperHeader>
       </Wrapper>
    </Container>
  )
}

export default Footer