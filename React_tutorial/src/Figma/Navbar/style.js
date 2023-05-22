import styled from "styled-components"



const Container = styled.div`
width: 100%;
height: 90px;
padding: 0 130px;
display: flex;
align-items: center;
/* background: black */
`

const Img = styled.img`

`

const Wrapper= styled.div`
  width: 100%;
  max-width: 1440px;
  /* background: coral; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;
  
  Wrapper.Logo = styled.div`
  display: flex;
  align-items: center;
`
  Wrapper.Link = styled.div`
  display: flex;
  gap: 15px;
  align-items: center
  
  `

  

const Span = styled.span`
   font-style: normal;
   font-weight: 600;
   font-size: 36px;
   line-height: 28px;
   color: #181818;
   margin-left: 17px

`

const Link = styled.a`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #1F3347;
    cursor: pointer;
`

const Button = styled.button`
    width: 90px;
    height: 36px;
    background: #6347F9;
    border-radius: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    
    &:active{
      transform: scale(0.98)
    }

    &:hover{
      background-color: green;
    }

`



export {Container, Wrapper, Img, Span,Link,Button}