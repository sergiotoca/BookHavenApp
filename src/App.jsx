import { useState } from 'react'

import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Shop } from './Pages/Shop'
import { ShopCategory } from './Pages/ShopCategory'
import { Product } from './Pages/Product'
import { LoginSignup } from './Pages/LoginSignup'
import { Cart } from './Pages/Cart'
import { Footer } from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/classic' element={<ShopCategory category="classic"/>}/>
        <Route path='/modern' element={<ShopCategory category="modern"/>}/>
        <Route path='/science' element={<ShopCategory category="science"/>}/>
        <Route path='/history' element={<ShopCategory category="history"/>}/>
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
