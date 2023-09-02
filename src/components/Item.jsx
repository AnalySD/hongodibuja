import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Button, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'


const Item = ({ id, name, description, price, image }) => {

  return (
    <>
      <div className='cardContainer'>
        <Card maxW='sm'>
          <CardBody>
            <Heading size='sm'>{name}</Heading>
            <div className='cardImage'>
              <Image src={image} alt={name} borderRadius='lg' className='image' />
            </div>

            <Stack mt='6' spacing='3'>
              <Text> {description} </Text>
              <Text> $ {price}</Text>
            </Stack>

            <Divider />

            <div className='cardBtn'>
              <CardFooter >
                <Link to={`/item/${id}`}>
                  <Button variant='solid' >
                    Detalles
                  </Button>
                </Link>
              </CardFooter>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Item
