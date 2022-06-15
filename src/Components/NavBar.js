import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { mobileDevice } from '../Responsive';
const NavBar = () => {
  return (
    <Container>
       <Wrapper>
          <Left>
              <Language>
                  EN
              </Language>
              <SearchBar>
                  
             <Input/>

                     <SearchIcon  style={{color: "gray", fontSize:16}}/>
                
                  
              </SearchBar>
          </Left>
          <Center>
            <Logo>
              Market Fever
            </Logo>
          </Center>
          <Right>
            <MenuItems>Register</MenuItems>
            <MenuItems>Sign In</MenuItems>
            <MenuItems>
            <Badge badgeContent={10} color="success">
                <ShoppingCartTwoToneIcon color="action" />
            </Badge>
            </MenuItems>
          </Right>
       </Wrapper>
    
    </Container>
  )
}

export default NavBar


const Container = styled.div`
 
`

const Wrapper = styled.div`
 padding: 10px 20px;
 display:flex;
 align-items: center;
 justify-content: space-between;

 ${mobileDevice({
    padding: "10px 0px"
  })}
`

const Left = styled.div`
 flex:1;
 display: flex;
 align-items: center;
`

 const Language = styled.div`
  font-size:14px;
  cursor: pointer; 
  ${mobileDevice({
    display: "none"
  })}
 `
const Center = styled.div`
 flex:1;
`

const Logo = styled.h1`
 font-weight: bold;
 text-align: center;
 ${mobileDevice({
    fontSize: "20px"
  })}
`

const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobileDevice({
    justifyContent: "center",
    flex:"2"
  })}
`

const MenuItems = styled.div`
 font-size: 14px;
 cursor: pointer;
 margin-left: 25px;
 ${mobileDevice({
    fontSize: "12px",
    marginLeft: "10px"
  })}
`

const SearchBar = styled.div`
 border: .5px solid lightgrey;
 display: flex;
 align-items: center;
 margin-left: 25px;
 padding: 5px; 
`

const Input = styled.input`
 border: none;
 ${mobileDevice({
    width: "50px"
  })}
`