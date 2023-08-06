import React from 'react'
import Item from './Item'


const ItemList = ({productS}) => {

    return (
        <>
            <h1>Lista de todos los Productos</h1>
                {
                    productS.length > 0 &&
                    productS.map((p) => {
                        return (
                            <Item key={p.id} id={p.id} name = {p.name} description = {p.description}/> 
                        )
                    })
                }
            
        </>
    )
}

export default ItemList