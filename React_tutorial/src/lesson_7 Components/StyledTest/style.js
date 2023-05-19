import styled from "styled-components"

const Container = styled.div`
background: yellow;
`

const H1 = styled.h1`
color: ${({hey}) => hey ? 'red' : 'green'};
font-size: 4rem;
text-align: center
`;

const Button = styled.button`
background: ${(props) => props.qizil ? 'red' : 'green'};
color: white;
border: none;
padding: 10px;
display: block;
width: 100vw;
`
export { Container, H1, Button}