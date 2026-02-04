import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'
import Product from './assets/pages/Product'
import Navbar from './assets/components/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App
