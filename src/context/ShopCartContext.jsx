import { createContext, useState } from "react"
export const CartContext = createContext(null)



export const ShopCartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  
    // Remover item del carrito
    const deleteItem = (id) => {
      const updatedCart = cart.filter((item) => item.id !== id)
      setCart(updatedCart)
  }


  // Muestra la cantidad total de items
  const totalItems = () => cart.reduce( (acc, item) => acc + item.quantity, 0)

  // Muestra el precio total del carrito 
  const totalPrice = () => {
    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    return parseFloat(total.toFixed(2))
  }
  


  // Vaciar carrito al terminar la compra
  const clearCart = () => setCart([])



  return (
    <CartContext.Provider value={{ cart, setCart, deleteItem, clearCart, totalPrice, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export default ShopCartProvider



