import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, Center, CardBody, Heading, Stack, Text, Divider, CardFooter, ButtonGroup, Img } from '@chakra-ui/react'
import ItemCount from './ItemCount'


const ItemDetail = ({ products }) => {

  const { id } = useParams()

  return (
    <>
      <h1>Detalle de los Productos</h1>
      
          <div key={id}>
            <Center>
              <Card>
                <CardBody>
                  <Heading size='md'>{products.name}</Heading>
                  <Img src={products.image} alt={products.name} borderRadius='sm' />
                  <Stack mt='6' spacing='3'>
                    <Text>  {products.description} </Text>                    
                    <Divider />
                    <Text> {products.price}</Text>
                    <Text> {products.category}</Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                <ButtonGroup size='md' isAttached variant='outline'>

                  <ItemCount item={products}/>

                  </ButtonGroup>

                </CardFooter>
              </Card>
            </Center>
          </div>
        
      
    </>
  )
}

export default ItemDetail