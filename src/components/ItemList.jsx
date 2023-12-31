import React from 'react'
import Item from './Item'


const ItemList = ({ products }) => {

    return (
        <>
            <h1>Lista de Productos</h1>
            <div className='cardContainerList'>
                {
                    products.map((p) => (
                        <Item key={p.id}
                            id={p.id}
                            name={p.name}
                            description={p.description}
                            price={p.price}
                            image={p.image}
                        />

                    ))
                }
            </div>

        </>
    )
}

export default ItemList