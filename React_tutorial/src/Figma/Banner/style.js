import styled from 'styled-components'
import bg from '../../assets/bg.png'
import {ReactComponent as vector} from '../../assets/Icons/banner.svg';

const Container = styled.div`
width: 100%; 
background-image:url(${bg});
height: 310px;
position: relative;
margin: 20px 0 100px 0;

`

const BannerIcon = styled(vector)`
  width: 100%;
  padding-bottom: 400px
`

/* const BannerHearder = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 28px;
  color: #1F3347;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 28px;
  color: #1F3347;
` */

export {Container,BannerIcon}