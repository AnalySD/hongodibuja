import React, { useState } from 'react'
import { ButtonGroup, Button, IconButton } from '@chakra-ui/react'
import { AddIcon, MinusIcon, RepeatClockIcon } from '@chakra-ui/icons'



const itemCount = () => {

    const [counter, setCounter] = useState(0)

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (

        <>
            <h3> Cuantos queres?  → </h3>
           
            <div>

                <ButtonGroup size='md' isAttached variant='outline'>
                    <IconButton onClick={decrement} icon={<MinusIcon />} />
                    <Button>{counter}</Button>
                    <IconButton onClick={() => setCounter(counter + 1)} icon={<AddIcon />} />
                    <IconButton onClick={() => setCounter(0)} icon={<RepeatClockIcon />} />
                </ButtonGroup>

            </div>
        
        </>
    )
}

export default itemCount