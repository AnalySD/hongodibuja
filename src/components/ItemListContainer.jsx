import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const { category } = useParams()    

    useEffect(() => {
        const db = getFirestore() // llamo a la base de datos
        const itemsCollection = category
        ? query (collection (db, "dibujos"), where ("category", "==", category))
        :collection (db, "dibujos")

        getDocs(itemsCollection).then((response) => {
            const prodCategory = response.docs.map((doc) => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(prodCategory)
        })
        .catch ((error)=>{
            console.log (error)
        })
    }, [category])

    
    return (
        <>
         <ItemList products={products} /> 
            
        </>
    )
    
}

export default ItemListContainer
