import styled  from 'styled-components'
import { mobileDevice } from '../Responsive'

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
            <Input type="text" placeholder = "name"/>
            <Input type="text" placeholder = "last name"/>
            <Input type="text" placeholder = "username"/>
            <Input type="email" placeholder = "eamil"/>
            <Input type="password" placeholder = "password"/>
            <Input type="password" placeholder = "confirm password"/>
            <Button>Create Account</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:   url("https://img.freepik.com/free-photo/model-being-covered-by-shopping-bags-copy-space_23-2148674119.jpg?w=2000") center;
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
 background-image: linear-gradient(135deg, #de2b38 85%, white 10%);
 margin-right:700px ;
 
 ${mobileDevice({
    width: "20%"
  })}
`

const Title = styled.h1`
 font-style: 20px;
 font-weight: 300;
 color: white;
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
 background-color:  #585f6a;
 color: white;
 cursor: pointer;
 margin: 15px;
 box-shadow: 1px 2px 1px rgba(255,255,255, .8) ;
`


