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
            <Link to= {`/category/${'pokemon'}`}> Pokemon </Link>
            </MenuItem>


            <MenuItem> 
            <Link to= {`/category/${'retro'}`}> Retro  </Link>
            </MenuItem>


            <MenuItem> 
            <Link to= {`/category/${'city pop'}`}> City Pop </Link>
            </MenuItem>

            <MenuItem> 
            <Link to= {`/category/${'chibis'}`}> Chibis </Link>
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