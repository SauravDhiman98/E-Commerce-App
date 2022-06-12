import styled from 'styled-components'
import { productData } from '../Pages/data'
import Product from './Product'



const Products = () => {
 
console.log(productData)
    
  return (
    <Container>
      {
    productData.map((Item) => 
          <Product Item ={Item}/>
        )
      }
    </Container>
  )
}

export default Products


const Container = styled.div`
 padding: 20px;
 display: flex;
 flex-wrap:wrap ;
 justify-content:space-between ;
`