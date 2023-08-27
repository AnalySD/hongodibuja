import { useState, useContext } from 'react'
import { ButtonGroup, Button, IconButton } from '@chakra-ui/react'
import { AddIcon, MinusIcon, RepeatClockIcon } from '@chakra-ui/icons'
import { CartContext } from "../context/ShopCartContext"
import { Link } from 'react-router-dom'


const ItemCount = ({ item }) => {
    const {cart, setCart} = useContext(CartContext)
    const [quantity, setquantity] = useState(0)

    const decrement = () => {
        if (quantity > 0) {
            setquantity(quantity - 1)
        }
    }
    const increment = () => {
        setquantity(quantity + 1)
    }

    const addToCart = () => {
        if (quantity > 0) {
          const newItem = {
            ...item,
            quantity: quantity,
          }
      
          const updatedCart = [...cart, newItem]
       
          setCart(updatedCart)
      
  
          console.log ("carrito es de:", updatedCart)
        }
      }

    const goToCart = cart.length > 0



    return (
        <>
            <h3> Cuantos queres?  → </h3>
            <div>
                <ButtonGroup size='md' isAttached variant='outline'>
                    <IconButton onClick={decrement} icon={<MinusIcon />} />
                    <Button>{quantity}</Button>
                    <IconButton onClick={increment} icon={<AddIcon />} />
                    <IconButton onClick={() => setquantity(0)} icon={<RepeatClockIcon />} />
                </ButtonGroup>
            </div>
            <div>
                <ButtonGroup size='md' isAttached variant='outline'>
                    <Button onClick={addToCart}> Agregar al carrito </Button>
                    <Link to={"/cart"}>
                        <Button isDisabled={!goToCart}>Ir a mi Carrito</Button>
                    </Link>
                </ButtonGroup>
            </div>

        </>
    )
}

export default ItemCount