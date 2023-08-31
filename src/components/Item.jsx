import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Button, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'


const Item = ({ id, name, description, price, image }) => {

  return (
    <Center className='card'>
      <Card maxW='sm'>
        <CardBody>
          <Heading size='sm'>{name}</Heading>
          <Image src={image} alt={name} borderRadius='lg' />

          <Stack mt='6' spacing='3'>
            <Text> {description} </Text>
            <Text> $ {price}</Text>
          </Stack>
          
          <Divider />

          <CardFooter>
            <Link to={`/item/${id}`}>
              <Button variant='solid' colorScheme='purple'>
                Detalles
              </Button>
            </Link>
          </CardFooter>

        </CardBody>
      </Card>
    </Center>

  )
}

export default Item
