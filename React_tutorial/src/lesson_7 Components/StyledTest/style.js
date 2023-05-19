import styled from "styled-components"


 export const H1 = styled.h1`
color: ${({hey}) => hey ? 'red' : 'green'};
font-size: 4rem;
text-align: center
`;

  export const Button = styled.button`
background: ${(props) => props.qizil ? 'red' : 'green'};
color: white;
border: none;
padding: 10px;
display: block;
width: 100vw;
`
