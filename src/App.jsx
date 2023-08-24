import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Cart from './components/Cart'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ShopCartContext from './context/ShopCartContext'
import ComponenteA from './components/ComponenteA'
import SendOrder from './components/SendOrder'


const App = () => {


  return (
    <BrowserRouter>
    <ShopCartContext>
      <NavBar />

      <Routes>

        <Route exact path='/' element={<Home/>}/>

        <Route exact path='/cart' element={<Cart/>}/>

        <Route exact path='/catalogue' element= {<ComponenteA/>} />

        <Route exact path='/category/:category' element= {<ItemListContainer/>}/>

        <Route exact path='/item/:id' element= {<ItemDetailContainer/>}/>

        <Route exact path='/checkout' element={<SendOrder/>} />

      </Routes>

      </ShopCartContext>

    </BrowserRouter>
  )
}

export default App
