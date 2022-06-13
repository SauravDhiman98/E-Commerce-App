import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
           <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
            <Input type="text" placeholder = "username"/>
            
            <Input type="password" placeholder = "password"/>
      
            <Button>Log in</Button>
            <Link>Forgot your Password or Username</Link>
            <Link>Don't have Account</Link>
        </Form>
      </Wrapper>
    </Container>
    </Container>
  )
}

export default Login

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:   url("https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80") center;
  background-size:cover ;
  display: flex;
  align-items:center ;
  justify-content:center;
`
// background-color: #ff4e00;
// #FEDE00
// background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);

const Wrapper = styled.div`
 padding: 20px;
 width: 40%;
 background: rgba(121, 94, 59, .8) ;

`

const Title = styled.h1`
 font-style: 20px;
 font-weight: 500;
 color: #252920;
`

const Form = styled.form`
 display: flex;
  flex-direction:column ;
 align-items:center;
 justify-content:center;
`

const Input = styled.input`
 flex: 1;
 min-width:40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`

const Button = styled.button`
 width:30%;
 border:none;
 padding: 10px;
 background-color:  rgb(39, 58, 38);
 color: white;
 cursor: pointer;
 margin: 15px;
 box-shadow: 1px 2px 1px rgba(255,255,255, .8) ;
`

const Link = styled.a`
 
 &:hover
 {
  color: #f2a715;
  cursor: pointer;
 }
`
