import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const productList = [
        { id: 1, name: "Producto A", description: "Descripcion de producto A", price: 2500, category: "cat1" },
        { id: 2, name: "Producto B", description: "Descripcion de producto B", price: 2000, category: "cat2" },
        { id: 3, name: "Producto C", description: "Descripcion de producto C", price: 3500, category: "cat3" },
        { id: 4, name: "Producto D", description: "Descripcion de producto D", price: 2000, category: "cat2" },
        { id: 5, name: "Producto E", description: "Descripcion de producto E", price: 3500, category: "cat3" },
        { id: 6, name: "Producto F", description: "Descripcion de producto F", price: 3500, category: "cat3" },
        { id: 7, name: "Producto G", description: "Descripcion de producto G", price: 2500, category: "cat1" },
        { id: 8, name: "Producto H", description: "Descripcion de producto H", price: 2500, category: "cat2" },
        { id: 9, name: "Producto I", description: "Descripcion de producto I", price: 2000, category: "cat1" },
    ]
    const getProducts = new Promise((resolve, reject) => {
        if (productList.length > 0) {
            setTimeout(() => {
                resolve(productList)
            }, 2000)
        } else {
            reject(new Error("No hay productos"))
        }
    })
    getProducts
        .then((res) => console.log(res)).catch(error => console.error(error))
    return (
        <>
        <ItemDetail 
                products={productList} />
        </>
    )
}

export default ItemDetailContainer