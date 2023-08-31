import { collection, addDoc, getFirestore } from "firebase/firestore"
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { CartContext } from "../context/ShopCartContext"
import React, { useState, useContext } from 'react'
import { PhoneIcon } from "@chakra-ui/icons"
import Swal from "sweetalert2"

const SendOrder = () => {
  const { cart, totalPrice } = useContext(CartContext)

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [orderId, setOrderId] = useState(null)
  const db = getFirestore()
  const ordersCollection = collection(db, "orders")

  const SendOrder = async ({ name, surname, phone, email }) => {
    const total = totalPrice()

    const order = {
      buyer: { name, surname, phone, email },
      items: cart,
      total: total
    }
    try {
      const docRef = await addDoc(ordersCollection, order)
      setOrderId(docRef.id)
      Swal.fire({
        icon: 'success',
        title: 'Pedido enviado!',
        text: `Tu número de pedido es: ${docRef.id}. Por favor anota ese codigo ya que sera solicitado como referencia para el seguimiento de tu pedido!`,
        confirmButtonText: 'Aceptar',
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error procesando la orden',
        text: 'Hubo un problema al intentar enviar tu pedido. Por favor, intentalo nuevamente.',
      })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    SendOrder({ name, surname, phone, email })
  }

  return (
    <>
      <h1> Formulario Comprobante de Compra  </h1>
      <h2>Completa los siguientes datos </h2>
      <p>A la brevedad nos pondremos en contacto para coordinar tu envio!</p>

      <div className='Checkout-form'>


        <form onSubmit={handleSubmit} >
          <Input type="text" placeholder="Nombre" value={name}
            onChange={(e) => setName(e.target.value)} />

          <Input type="text" placeholder="Apellido" value={surname}
            onChange={(e) => setSurname(e.target.value)} />

          <Input type="text" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} />

          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <PhoneIcon color='gray.300' />
            </InputLeftElement>
            <Input type='tel' placeholder='Phone number' value={phone}
              onChange={(e) => setPhone(e.target.value)} />
          </InputGroup>

          <Button className="Checkout-btn" type="submit" colorScheme='teal' variant='outline'> Enviar informacion </Button>
        </form>
      </div>

      <p> Tu codigo de orden es: {orderId}  </p>

    </>
  )
}

export default SendOrder



