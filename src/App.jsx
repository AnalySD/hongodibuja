import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Cart from './components/Cart'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ShopCartContext from './context/ShopCartContext'


const App = () => {


  return (
    <BrowserRouter>
    <ShopCartContext>
      <NavBar />

      <Routes>

        <Route exact path='/' element={<Home/>}/>

        <Route exact path='/cart' element={<Cart/>}/>

        <Route exact path='/item/:id' element= {<ItemDetailContainer/>}/>

        <Route exact path='/category/:category' element= {<ItemListContainer/>}/>

      </Routes>

      </ShopCartContext>

    </BrowserRouter>
  )
}

export default App
