import React from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
   
    const productList = [
        { id: 1, name: "Producto A", description: "Descripcion de producto A", category: "cat1" },
        { id: 2, name: "Producto B", description: "Descripcion de producto B", category: "cat2" },
        { id: 3, name: "Producto C", description: "Descripcion de producto C", category: "cat3" },
        { id: 4, name: "Producto D", description: "Descripcion de producto D", category: "cat2" },
        { id: 5, name: "Producto E", description: "Descripcion de producto E", category: "cat3" },
        { id: 6, name: "Producto F", description: "Descripcion de producto F", category: "cat3" },
        { id: 7, name: "Producto G", description: "Descripcion de producto G", category: "cat1" },
        { id: 8, name: "Producto H", description: "Descripcion de producto H", category: "cat2" },
        { id: 9, name: "Producto I", description: "Descripcion de producto I", category: "cat1" },
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
                productList={productList} />
        </>
    )
}

export default ItemDetailContainer