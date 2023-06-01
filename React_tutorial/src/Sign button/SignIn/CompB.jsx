import React from 'react'
import {Container, ContainerWrapper, H1, Input, Input2, Wrapper, P2,Option,Span,Wrapper2, P,Button} from './style'

const SignIn = () => {
  return (
    <div>
        <Container>
           <ContainerWrapper>

             <H1>Sign up</H1>

             <Input type="email"  placeholder='email'/> <br />
             <Input type="email" placeholder='email' /><br />
             <Input2 type="password" placeholder='password' /><br />
             <Input2 type="password" placeholder='password' />

             
                   
            <P>By signing up you accept the <a href="#">Term of service</a>  and <a href="#">Privacy Policy</a> </P>
              

             <Button>Sign Up</Button>

             <P2> Already I have an account <a href="./SignUp/CompA">Sign In</a> </P2>



           </ContainerWrapper>



        </Container>






    </div>
  )
}

export default SignIn