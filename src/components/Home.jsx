import React from 'react'
import { Button, } from '@chakra-ui/react'
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

      <Link to={`/catalogue`}>
        <Button className="Home-btn" leftIcon={<ViewIcon />} colorScheme='purple' variant='solid'>
          Go Shopping!
        </Button>
      </Link>

      <br />

    </div>
  )
}

export default Home