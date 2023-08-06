import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Flex className='NavBar'>
      <Box p="2" bg="#0f1d5c" color="#f0e2e2">
        <Link to={"/"}> | HongoDibuja ~ Store | </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Desplegame
          </MenuButton>
          <MenuList>


            <MenuItem> 
            <Link to= {`/category/${'cat1'}`}> Categoria A </Link>
            </MenuItem>


            <MenuItem> 
            <Link to= {`/category/${'cat2'}`}> Categoria B </Link>
            </MenuItem>


            <MenuItem> 
            <Link to= {`/category/${'cat3'}`}> Categoria C </Link>
            </MenuItem>

          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box p="2" bg="#0f1d5c" color="#f0e2e2">
      <Link to= {"/cart"}> <CartWidget /> </Link>
      </Box>
    </Flex>
  )
}

export default NavBar