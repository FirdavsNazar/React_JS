import React from 'react'
import { Container, Img, Day5, IconWrap5, Icon4, LastWrapper, IconWrap4, Icon3, IconWrap3, Header, IconWrap2, Icon, Day,IconWrap,BigWrapper,Icon2 } from './style'

const Card = ({info}) => {
  return (
    <Container>
      <Img src={info.img} alt="" />
      <Header>{info.title}</Header>
      
      
      
      <BigWrapper>

      <IconWrap>

            <Icon src={info.icon} alt='icon' />
            <Day>{info.day}</Day>
  

      </IconWrap>

      <IconWrap2>

           <Icon2 src={info.icon1} alt='icon' />
           <Day>{info.person}</Day>


      </IconWrap2>

      <IconWrap3>

            <Icon3 src={info.icon2} alt='icon' />
            <Day>{info.rating}</Day>
            <Day>{info.review}</Day>


      </IconWrap3>

      </BigWrapper>

      <LastWrapper>
        
      <IconWrap4>

           <Icon4 src={info.icon3} alt='icon' />
           <Day>{info.location}</Day>


      </IconWrap4>

      <IconWrap5>

           
           <Day5>{info.price}</Day5>


      </IconWrap5>
       


      </LastWrapper>
      
    </Container>
  )
}

export default Card