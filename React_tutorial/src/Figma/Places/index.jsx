import React from 'react'
import Card from '../Card/index'
import {Container, Wrapper} from './style.js'
import {cardInfo} from '../data.js'

const Places = () => {
  return (
    <Container>
       <Wrapper>
        {
          cardInfo.map((value)=> {
            return(
              <Card info={value}/>
            )
          })
        }
       </Wrapper>
    </Container>
  )
}

export default Places