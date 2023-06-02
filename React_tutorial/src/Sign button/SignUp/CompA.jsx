
import React from 'react'
import {Container, ContainerWrapper, Button2, H1, P3, Input, Input2, Wrapper, Wrapper1,Option,P1,Wrapper2, P,Button} from './style'

const SignIn = ({click}) => {
  return (
    <div>
        <Container>
           <ContainerWrapper>

             <H1>Sign in</H1>

             <Input type="email" placeholder='email'/>
             <Input2 type="password" placeholder='password' />

             <Wrapper>
                <Wrapper1>
                  
                    <P1>Remember Me</P1>
                </Wrapper1>
                <Wrapper2>
                   
                    <P> <a href="">Forgot Password</a> </P>

                </Wrapper2>
             </Wrapper>

             <Button>Sign In </Button>

             <P3> Don't have an account? <Button2 onClick={click}> <P3>Create new one</P3> </Button2>  </P3>

           </ContainerWrapper>



        </Container>

        






    </div>
  )
}

export default SignIn