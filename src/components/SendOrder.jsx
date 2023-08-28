import {collection, addDoc, getFirestore} from "firebase/firestore"
import React, { useState } from 'react'

const SendOrder = () => {

//   const [name, setName] = useState ("")
//   const [email, setEmail] = useState ("")
//   const [orderId, setOrderId]= useState (null)

  
//   const handleSubmit =(e) => {
//     e.preventDefault()
//     addDoc(ordersCollection, order).then(({id})=>
//     setOrderId (id))
//   }
  
//   const order = {
//     name,
//     email
//   }

// const ordersCollection = collection (db, "orden")

  const [orderId, setOrderId]= useState (null)

const SendOrder = () => {
  const buyer = {
    buyer: {name: "Samuel", apellido: "Bile", email: "unmail@gmail.com"},
    items: [{name: "producto A", price: 1000}],
    total: 1000
  }
  
  const db = getFirestore ()
  const ordersCollection = collection (db, "orders")
  
  addDoc (ordersCollection, orderId).then (({id})=> setOrderId (id))
}








  return (
    <>
      <h1> Enviando Ordenes  </h1>

      <form onSubmit={handleSubmit} >
        <input type="text" placeholder="Nombre y Aellido" 
        onChange={(e)=> setName(e.target.value)} />

        <input type="text" placeholder="Email" 
        onChange={(e)=> setEmail(e.target.value)} />

        <button type="submit">  Enviar informacion </button>
      </form>

      <p> Tu codigo de orden es: {orderId}  </p>

        


    </>
  )
}

export default SendOrder