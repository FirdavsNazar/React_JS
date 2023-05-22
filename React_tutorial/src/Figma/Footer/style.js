
import styled from 'styled-components'

const Container = styled.div`
 
 width: 100%;
 height: 950px;
 padding: 0 130px;
 display: flex;
 align-items: center;
 background: #D9D9D9;
 margin-top: 70px

`

const Wrapper= styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;

const WrapperHeader= styled.div`
   display: flex;
   flex-direction:column-reverse;
   align-items: center;
   justify-content: center;
   gap: 26px;
   margin-left: 300px
   
`;

  const FooterHeader = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  text-transform: capitalize;
  color: #22283C;
  `

  const FooterButton = styled.button`
  width: 714px;
  height: 56px; 
  background: #22283C;
  border-radius: 4px;
  display: flex;
  align-items:center;
  justify-content: space-between
  `
  const BtnEmail = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;
  text-align: center;
  color: #FFFFFF;
  padding-left: 20px
  `

  const BtnJoin = styled.button`
  width: 170px;
  height: 56px;
  background: #6347F9;
  border-radius: 0px 4px 4px 0px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;

  
  
  `







export {Container, BtnJoin, BtnEmail, FooterButton, Wrapper, FooterHeader, WrapperHeader}