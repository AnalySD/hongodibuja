import { useState, useContext } from 'react'
import { ButtonGroup, Button, IconButton } from '@chakra-ui/react'
import { AddIcon, MinusIcon, RepeatClockIcon } from '@chakra-ui/icons'
import { CartContext } from "../context/ShopCartContext"



const ItemCount = ({id, name, price}) => {
    
    const { cart, setCart } = useContext(CartContext)

    const [counter, setCounter] = useState(0)

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const increment = () =>{
        setCounter (counter + 1)
    }

    // const addToCart = () => {
    //     console.log({...items, counter})
    // }

    const addToCart = () => {
        setCart((items) => {
            const isInCart = items.find((item) => item.id === id);
            if (isInCart) {
                return items.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + counter }
                    } else {
                        return item
                    }
                })
            } else {
                return [...items, { id, quantity: counter, price, name }]
            }
        })
    }

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
                    <Button onClick={() => addToCart()}> Agregar al carrito </Button>
                </ButtonGroup>
            </div>

        </>
    )
}

export default ItemCount