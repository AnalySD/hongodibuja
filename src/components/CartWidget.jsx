import { useContext } from "react"
import { CartContext } from "../context/ShopCartContext"
import { ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import logocarrito from "../assets/fullbasket.png"

const CartWidget = () => {

    const {cart} = useContext(CartContext);

    const quantity = cart.reduce((acc,curr) => {
        return acc + curr.quantity;
      }, 0)



    return (
        <Flex>
            <Box>
                <img src={logocarrito} />
                
            </Box>
            <Spacer />
            <Box>
            <Text>carrito  <ArrowRightIcon /> {quantity}</Text>  
            </Box>
        </Flex>
    )
}

export default CartWidget