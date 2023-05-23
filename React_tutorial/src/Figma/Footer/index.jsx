import React from 'react'
import logo from '../../assets/logo.png';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import { Container,Wrapper,FooterImg, Container4Header, Container4, ContactImges2, ContactImgNum, ContactNumber, ContactImges, ContactImg, ContactSpan, FooterContact, TypeSpan1, TypeHeader, FooterType, FooterImg2, FooterSpan3, FooterNetwork1, FooterNetwork3, FooterNetwork2, FooterSpan2, FooterSpan, FooterNetwork, Container2,FooterAdr, Wrapper2, BtnJoin, BtnEmail,FooterButton, FooterHeader,WrapperHeader, } from './style'

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

       <Container2>
            <Wrapper2>
                 <FooterAdr>
                    <FooterNetwork>
                        <FooterNetwork1>

                              <FooterImg src={logo} alt="" />
                             <FooterSpan>Explore</FooterSpan> 

                        </FooterNetwork1>

                        <FooterNetwork2>

                             <FooterSpan2>Continually productize compelling dome packed with all Elated utilize website and creating  supply next-generation</FooterSpan2> 
                        </FooterNetwork2>

                        <FooterNetwork3>
                            <FooterSpan3>
                            Follow Us On:
                            </FooterSpan3> <br />

                            <FooterImg2 src={img1} alt="" />
                            <FooterImg2 src={img2} alt="" />
                            <FooterImg2 src={img3} alt="" />
                            <FooterImg2 src={img4} alt="" />
                            <FooterImg2 src={img5} alt="" />

                        </FooterNetwork3>
                    </FooterNetwork>

                    <FooterType>
                        <TypeHeader>Tour Type</TypeHeader>
                        <TypeSpan1>Adventure Tours
                                   Grouo Tour
                                   Seasonal Tours
                                   Relaxation Toure
                                   Family Friendly Tour
                        </TypeSpan1>

                    </FooterType>

                      <FooterContact>
                           <ContactSpan>
                                Contact info
                          </ContactSpan>
                         
                    

                          <ContactImges>
                         <ContactImg src={img6} alt="" />  
                          </ContactImges>
                         
                        <ContactImgNum>
                              <ContactNumber>88130-589-745-6987 +1655-456-52</ContactNumber>
                        </ContactImgNum>
                        

                        <ContactImges2>
                            <ContactImg src={img7} alt="" />
                        </ContactImges2>
                        <ContactImgNum>
                              <ContactNumber>Mon-Fri 09:00-18:00(except public holidays)</ContactNumber>
                        </ContactImgNum>

                        <ContactImges2>
                            <ContactImg src={img8} alt="" />
                        </ContactImges2>
                        <ContactImgNum>
                              <ContactNumber>25/2 Vokte Street BuildingMelborn City</ContactNumber>
                        </ContactImgNum>
                      </FooterContact>
                  </FooterAdr>
             </Wrapper2>
       </Container2>
       
       <Container4>
            <Container4Header>   
                    © Copyright 2022. All Rights Reserved by LabArtisan
            </Container4Header>
       </Container4>


    </Container>

    
       
       
       
      


  )
}

export default Footer