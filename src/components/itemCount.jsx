import { useState, useContext } from 'react'
import { ButtonGroup, Button, IconButton } from '@chakra-ui/react'
import { AddIcon, MinusIcon, RepeatClockIcon } from '@chakra-ui/icons'
import { CartContext } from "../context/ShopCartContext"
import { Link } from 'react-router-dom'




const ItemCount = ({ product }) => {

    const [cart, setCart] = useContext(CartContext)
    const [counter, setCounter] = useState(0)

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    const increment = () => {
        setCounter(counter + 1)
    }

    const addToCart = () => {
        if (counter > 0) {
          const newItem = {
            ...product,
            quantity: counter,
          };
      
          const updatedCart = [...cart, newItem];
       
          setCart(updatedCart);
      
          // Guardar el carrito en localStorage
          localStorage.setItem('cart', JSON.stringify(updatedCart));
      
          console.log ("carrito es de:", updatedCart)
          setCounter(0);
        }
      };

    
      

    const goToCart = cart.length > 0



    return (
        <>
            <h3> Cuantos queres?  → </h3>
            <div>
                <ButtonGroup size='md' isAttached variant='outline'>
                    <IconButton onClick={decrement} icon={<MinusIcon />} />
                    <Button>{counter}</Button>
                    <IconButton onClick={increment} icon={<AddIcon />} />
                    <IconButton onClick={() => setCounter(0)} icon={<RepeatClockIcon />} />
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