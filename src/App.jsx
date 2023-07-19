import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer 
      greeting= "Hongo les da la bienvenida"
      />

    </>
  )
}

export default App
