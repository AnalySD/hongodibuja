import {doc, getDoc, getFirestore} from 'firebase/firestore'
import React, { useEffect, useState } from "react" 
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState ([])
    const {id} = useParams()

    useEffect (() => {
      const db = getFirestore()
      const oneItem = doc(db, "dibujos", `${id}` ) 
      
      getDoc (oneItem).then((snapshot) => {
        if(snapshot.exists()) {
          const docs = snapshot.data()
          setProduct(docs)
        }
      })
    },[])

    return (
        <>
        <ItemDetail 
                products={product} />
        </>
    )
}

export default ItemDetailContainer