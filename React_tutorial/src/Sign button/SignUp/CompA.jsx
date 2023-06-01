
import React from 'react'
import {Container, ContainerWrapper, H1, Input, Input2, Wrapper, Wrapper1,Option,Span,Wrapper2, P,Button} from './style'

const SignIn = () => {
  return (
    <div>
        <Container>
           <ContainerWrapper>

             <H1>Sign in</H1>

             <Input type="email" />
             <Input2 type="password" />

             <Wrapper>
                <Wrapper1>
                    <Option value=""></Option>
                    <Span>Remember Me</Span>
                </Wrapper1>
                <Wrapper2>
                    <P>Forgot Password</P>

                </Wrapper2>
             </Wrapper>

             <Button><a href="./SignIn/CompB">Sign in</a></Button>

           </ContainerWrapper>



        </Container>

        






    </div>
  )
}

export default SignIn