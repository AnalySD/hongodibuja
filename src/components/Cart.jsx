import { Link } from "react-router-dom"
import { useContext } from "react" 
import { CartContext } from "../context/ShopCartContext"
import { Button, ButtonGroup, Card, CardBody,CardFooter, Center, Divider, Heading, Stack, Text } from "@chakra-ui/react"

const Cart = () => {

const {cart, deleteItem, totalPrice} = useContext(CartContext)

//   // Leer el carrito desde localStorage cuando se carga el componente
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       const parsedCart = JSON.parse(storedCart);
//       setCart(parsedCart);
//     }
//   }, [setCart])


// const removeFromCart = (productId) => {
//   // Filtrar los productos en el carrito y eliminar el producto con el ID proporcionado
//   const updatedCart = cart.filter((item) => item.id !== productId);
//   setCart(updatedCart);
// };

// const adjustQuantity = (productId, newQuantity) => {
//   // Actualizar la cantidad de un producto en el carrito
//   const updatedCart = cart.map((item) => {
//     if (item.id === productId) {
//       return { ...item, quantity: newQuantity };
//     }
//     return item;
//   });
//   setCart(updatedCart);
// };


//   return (
//     <div>

//       <h1> Por aqui veras los productos adquiridos </h1>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             <p>{item.name}</p>
//             <p>Cantidad: {item.quantity}</p>
//             <button onClick={() => removeFromCart(item.id)}>Eliminar de la lista</button>
//             <button onClick={() => adjustQuantity(item.id, item.quantity + 1)}>Sumar</button>
//             <button onClick={() => adjustQuantity(item.id, item.quantity - 1)}>Restar</button>
//           </li>
//         ))}
//       </ul>

//     </div>
//   )
// }

if (cart.length === 0) {
  return (
    <div className="itemsNo">
      <h2 className="titleitems">NO HAY ITEMS EN TU CARRITO</h2>
      <Link className="link" to={"/catalogue"}>
        <Button className="FormButton">Volver al Catalogo</Button>
      </Link>
    </div>
  )
} else {


  return (
    <>
      <h1>Por aqui veras los itemos adquiridos</h1>

      {cart.map((item) => {
        return (
          <div key={item.id}>
            <Center>
              <Card>
                <CardBody>
                  <Heading size='md'>{item.name}</Heading>
                  <Stack mt='6' spacing='3'>
                    <Divider />
                    <Text> {item.price}</Text>
                    <Text> Cantidad: {item.quantity}</Text>
                    <Divider />
                    <Text>  Sub-total: $ {item.price * item.quantity} </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <ButtonGroup size='md' isAttached variant='outline'>
                    <Button variant="warning" onClick={() => deleteItem(item.id)}> Delete  </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Center>
          </div>
        )
      })}

      <Text>Total: $ {totalPrice()}</Text>
      <div>
        <Link to={"/catalogue"}>
          <Button variant="warning">Continuar Comprando</Button>
        </Link>

        <Link to={"/checkout"}>
          <Button variant="warning"> Confirmar Compra </Button>
        </Link>

      </div>

    </>
  )
}
}

export default Cart