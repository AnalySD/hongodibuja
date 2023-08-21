import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, Center, CardBody, Heading, Stack, Text, Divider, CardFooter, ButtonGroup } from '@chakra-ui/react'
import ItemCount from './itemCount'


const ItemDetail = ({ productS }) => {

  const { id } = useParams()
  const filteredProducts = productS.filter((product) => product.id == id)
  
  

  return (
    <>
      <h1>Detalle de los Productos</h1>
      {filteredProducts.map((p) => {
        return (
          <div key={p.id}>
            <Center>
              <Card>
                <CardBody>
                  <Heading size='md'>{p.name}</Heading>
                  <Stack mt='6' spacing='3'>
                    <Text>  {p.description} </Text>
                    <Text> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sed dicta culpa sapiente exercitationem alias optio voluptatem veniam nemo </Text>
                    <Divider />
                    <Text> {p.price}</Text>
                    <Text> {p.category}</Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                <ButtonGroup size='md' isAttached variant='outline'>

                  <ItemCount product={p} />

                  </ButtonGroup>

                </CardFooter>
              </Card>
            </Center>
          </div>
        )
      })}
    </>
  )
}

export default ItemDetail