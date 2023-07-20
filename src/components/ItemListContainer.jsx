import React from 'react'

const ItemListContainer = ({ greeting }) => {

    return (
        <div className='greeting'>

            <div>  <h1> {greeting} </h1> </div>
        </div>

    )
}

export default ItemListContainer