import React from 'react'
import { Button, Stack } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <h1> Hola!. Bienvenidos a mi Home </h1>
      <h2> Me dicen Hongo, soy diseñadora grafica </h2>
      <br />
      <h3>pero en mis tiempos libres me gusta mucho hacer dibujitos</h3>
      <br />


      <p> Te invito a que conozcas un poco de lo que hago </p>

      <Stack direction='row' spacing={4}>
        <Link to={`/catalogue`}>
          <Button colorScheme='blue' variant='custom'>
            Go Shopping!
          </Button>
        </Link>
      </Stack>




      <br />

    </div>
  )
}

export default Home