import { ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import logocarrito from "../assets/fullbasket.png"

const CartWidget = () => {
    return (
        <Flex>
            <Box>
                <img src={logocarrito} />
            </Box>
            <Spacer />
            <Box>
                <h4> carrito  <ArrowRightIcon /> 7 </h4> 
            </Box>
        </Flex>
    )
}

export default CartWidget