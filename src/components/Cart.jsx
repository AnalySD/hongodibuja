import { Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Heading, Stack, Text } from "@chakra-ui/react"
import { CartContext } from "../context/ShopCartContext"
import { Link } from "react-router-dom"
import { useContext } from "react"

const Cart = () => {
  const { cart, deleteItem, totalPrice } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <>
        <h1>NO HAY ITEMS EN TU CARRITO! </h1>
        <Link to={"/catalogue"}>
          <Button >Volver al Catalogo</Button>
        </Link>
        <h2> Hecha un vistazo a lo que hay..</h2>
      </>
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