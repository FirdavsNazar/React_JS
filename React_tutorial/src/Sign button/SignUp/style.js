import styled from 'styled-components'



const Container = styled.div`
   width: 200px;
   height: 400px;
   background: #FFFFFF;
   box-shadow: 0px 6px 24px #E4E2EE;
   border-radius:14px 14px;
   margin:30px 70px;
   display: flex;
   justify-content: center;
   align-items: center;
   padding-left: 10px
`

const ContainerWrapper = styled.div`



 
`


const H1 = styled.h1`

`

const Input = styled.input`
width: 170px;
height: 20px;
border-radius: 10px;
border: 1px solid black;

margin-top: 10px

`

const Input2 = styled.input`
width: 170px;
height: 20px;
border-radius: 10px;
border: 1px solid black;

margin-top: 10px

`

const Wrapper = styled.div`
display: flex;
gap: 10px;
margin-top: 20px;

`

const Wrapper1 = styled.div`

`



const P = styled.p`
font-style: normal;
  font-weight: 100;
  font-size: 10px;
  line-height: 10px;

`

const P3 = styled.p`

  font-style: normal;
  font-weight: 100;
  font-size: 10px;
  line-height: 10px;
  text-align: center;

`

const Wrapper2 = styled.div`

`

const P1= styled.p`
font-style: normal;
  font-weight: 80;
  font-size: 10px;
  line-height: 10px;
 

`

const Button = styled.button`
width: 170px;
height: 20px;
border-radius: 10px;
border: 1px solid black;
text-align: center;
margin-top: 10px;
background: #6347F9;
margin-bottom: 20px;
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

const Button2 = styled.button`
border:none;
background-color: white;
color: blue;
    border: none;
    cursor: pointer;
    
`

export {Container, ContainerWrapper, Button2, H1, Input, Input2, Wrapper, Wrapper1,P1,Wrapper2, P3, P,Button}