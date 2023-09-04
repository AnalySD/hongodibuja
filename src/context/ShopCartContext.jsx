import { createContext, useState } from "react"
export const CartContext = createContext(null)



export const ShopCartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

    // Remover items del carrito
    const deleteItem = (id) => {
      const itemToRemoveIndex = cart.findIndex((item) => item.id === id)
      if (itemToRemoveIndex !== -1) {
        const updatedCart = [...cart]
        const itemToRemove = updatedCart[itemToRemoveIndex]
        if (itemToRemove.quantity > 1) {
          updatedCart[itemToRemoveIndex] = { ...itemToRemove, quantity: itemToRemove.quantity - 1 }
        } else {
          updatedCart.splice(itemToRemoveIndex, 1)
        }   
        setCart(updatedCart)
      }
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



