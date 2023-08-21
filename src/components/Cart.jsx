import { useEffect, useContext } from "react" 
import { CartContext } from "../context/ShopCartContext"

const Cart = () => {

const [cart, setCart] = useContext(CartContext)

  // Leer el carrito desde localStorage cuando se carga el componente
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);
    }
  }, [setCart])


const removeFromCart = (productId) => {
  // Filtrar los productos en el carrito y eliminar el producto con el ID proporcionado
  const updatedCart = cart.filter((item) => item.id !== productId);
  setCart(updatedCart);
};

const adjustQuantity = (productId, newQuantity) => {
  // Actualizar la cantidad de un producto en el carrito
  const updatedCart = cart.map((item) => {
    if (item.id === productId) {
      return { ...item, quantity: newQuantity };
    }
    return item;
  });
  setCart(updatedCart);
};


  return (
    <div>

      <h1> Por aqui veras los productos adquiridos </h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Eliminar de la lista</button>
            <button onClick={() => adjustQuantity(item.id, item.quantity + 1)}>Sumar</button>
            <button onClick={() => adjustQuantity(item.id, item.quantity - 1)}>Restar</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Cart