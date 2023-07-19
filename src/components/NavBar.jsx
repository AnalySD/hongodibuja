import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'





const NavBar = () => {
  return (



    <Flex bg="black">
      <Box p="2" bg="#0f1d5c" color="#f0e2e2">
        HongoDibuja - Store
      </Box>

      <Spacer />

      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Desplegame
          </MenuButton>
          <MenuList>
            <MenuItem> Categoria 1 </MenuItem>
            <MenuItem> Categoria 2 </MenuItem>
            <MenuItem> Categoria 3 </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Spacer />

      <Box p="2" bg="#0f1d5c" color="#f0e2e2">
        <CartWidget />
      </Box>
    </Flex>
  )
}

export default NavBar