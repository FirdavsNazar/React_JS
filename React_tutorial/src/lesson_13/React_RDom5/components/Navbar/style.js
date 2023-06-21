import styled from 'styled-components'

import {NavLink} from 'react-router-dom'


const Container = styled.div`

width: 100%;
height: 80px;
background-color: black;
display: flex;
align-items: center;
justify-content: space-evenly;
`

const Link = styled(NavLink)`
color: ${({active}) => (active ? 'red' : 'white')};
font-family: 'Courier New', Courier, monospace;
font-weight: 700;
text-decoration:none

`

export {Container, Link}