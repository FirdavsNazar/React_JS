import styled from "styled-components"



const Container = styled.div`
width: 100%;
height: 500px;

`

const Div = styled.div`
display: ${({Navbar}) => Navbar ? 'flex' : 'green'};
justify-content: ${({Navbar}) => Navbar ? 'space-around' : 'green'};
`;

const Div1 = styled.div`
display: ${({Menu}) => Menu ? 'flex' : 'green'};
justify-content:${({Menu}) => Menu ? 'center' : 'green'};
align-items: ${({Menu}) => Menu ? 'center' : 'green'};
gap: ${({Menu}) => Menu ? '20px' : 'green'};

`;

const Button = styled.button`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #FFFFFF;
width: 100px;
height: 30px;
left: 1460px;
top: 17px;
background: #6347F9;
border-radius: 4px;
`;




export {Container, Div, Div1, Button}