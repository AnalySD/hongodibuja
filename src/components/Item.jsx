import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, CardHeader, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({id, name, description, price }) => {

  return (
    <Center>
      <Card maxW='lg'>
      <CardBody>
        <Heading size='sm'>{name}</Heading>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Text>
            {description}
          </Text>
          <Text> {price}</Text>
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