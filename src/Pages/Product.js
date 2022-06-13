import styled from 'styled-components'
import Annuocement from '../Components/Annuocement'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Newsletter from '../Components/Newsletter'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Add from '@mui/icons-material/AddBox';
import Remove from '@mui/icons-material/RemoveCircle';
import { useState } from 'react'



const Product = () => {

  const [counter, setCounter] = useState(1);

  const Incre = () => 
  {
    if(counter >= 1)
    {
      setCounter((counter) => counter + 1);
    }
  }

  const Dec = () => 
  {
    if(counter > 1)
    {
      setCounter((counter) => counter - 1)
    }
  }
  return (
    <Container>
        <NavBar/>
        <Annuocement/>
        <Wrapper>
            <ImgContainer>
             <Img src="https://media.boohoo.com/i/boohoo/fzz15937_black_xl/womens-black-tie-waist-cuffed-leg-jumpsuit/?w=900&qlt=default&fmt=auto&sm=fit"/>
            </ImgContainer>
            <InfoCOntainer>
                <Title>
              Denim JumpSuit
                </Title>
                <Desc>
                 A garment incorporating trousers and a sleeved top in one piece, worn as a fashion item, protective garment, or uniform.
                </Desc>
                <Price>
               <CurrencyRupeeIcon/>
                1500
                </Price>
                <FilterContainer>
                  <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray"/>
                  </Filter>
                  <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FIlterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FIlterSize>
                  </Filter>
                </FilterContainer>
                <AddContainer>
                  <AmountContainer>
                    
                    <Remove onClick={Dec}/>
                  
                     <Amount>{counter}</Amount>
                    <Add onClick={Incre}/>
                  </AmountContainer>
                  <Button>Add To Cart</Button>
                </AddContainer>
               
            </InfoCOntainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display: flex;

`
const ImgContainer= styled.div`
 flex:1;
`
const Img = styled.img`
 width:100% ;
 height:90vh;
 object-fit:cover ;
`

const InfoCOntainer = styled.div`
 flex:1 ;
 padding: 0px 50px;
`

const Title = styled.h1`
 font-weight: 200;
`

const Desc = styled.p`
margin:20px 0px;
`
const Price  =styled.span`
 font-weight: 100;
 font-size: 40px;
`

const FilterContainer = styled.div`
width:50%;
margin: 30px 0px;
display: flex;
justify-content:space-between ;
`

const Filter = styled.div`
 display: flex;
 align-items:center;
`

const FilterTitle= styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius:50% ;
background-color:${props=> props.color} ;
margin: 0px 5px;
cursor: pointer;
`

const FIlterSize = styled.select`
margin-left:10px;
padding: 5px;

`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width:50% ;
  display: flex;
  align-items:center ;
  justify-content:center;
 
  `
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.div`
 margin: 10px;
 width:30px ;
 height: 30px;
 border-radius:10px;
 border: 1px solid teal;
 display: flex;
 align-items:center ;
 justify-content:center ;
 margin: 0px 5px;

`

const Button = styled.button`
 margin: 10px;
 padding: 15px;
 border: 2px solid teal;
 background-color: white ;
 cursor: pointer;
 font-weight: 600;
 &: hover 
 {
   background-color: #EBE0D0 ;
 }
`