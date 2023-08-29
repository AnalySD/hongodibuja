import { PhoneIcon } from "@chakra-ui/icons"
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { collection, addDoc, getFirestore } from "firebase/firestore"
import React, { useState } from 'react'

const SendOrder = () => {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [orderId, setOrderId] = useState(null)
  const db = getFirestore()

  const handleSubmit = (e) => {
    e.preventDefault()
    addDoc(ordersCollection, order).then(({ id }) =>
      setOrderId(id))
    SendOrder()
  }

  const order = {
    name,
    surname,
    email,
    phone
  }
  const ordersCollection = collection(db, "orders")


  const SendOrder = () => {
    const order = {
      buyer: { name: "Ann", surname: "Wolf", phone: "1234567890", email: "mail@unmail.com" },
      items: [{ name: "Producto A", price: 1500 }],
      total: 1500
    }
    const ordersCollection = collection(db, "orders")

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
  }


  return (
    <>
      <h1> Formulario Comprobante de Compra  </h1>
      <h2>Completa los siguientes datos </h2>
      <p>A la brevedad nos pondremos en contacto para coordinar tu envio!</p>

      <form onSubmit={handleSubmit} >
        <Input type="text" placeholder="Nombre"
          onChange={(e) => setName(e.target.value)} />

        <Input type="text" placeholder="Apellido"
          onChange={(e) => setSurname(e.target.value)} />

        <Input type="text" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />

        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <PhoneIcon color='gray.300' />
          </InputLeftElement>
          <Input type='tel' placeholder='Phone number'
            onChange={(e) => setPhone(e.target.value)} />
        </InputGroup>

        <Button type="submit" colorScheme='teal' variant='outline'> Enviar informacion </Button>
      </form>

      <p> Tu codigo de orden es: {orderId}  </p>




    </>
  )
}

export default SendOrder



