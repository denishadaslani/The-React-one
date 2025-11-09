import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Header from './compoent/header/header'
import Faq from './compoent/faq/faq'
import Headerpage from './pages/headerpage'
import Product from './compoent/proudect/proudect'


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Headerpage />} />
        <Route path='/about' element={<h1>About Page</h1>} />
        <Route path='/contact' element={<h1>Contact Page</h1>} />
        <Route path='/product:name' element={<Product />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/*' element={<h1>404 Page not found</h1>} />
        
       
      </Routes>
    </>
  )
}

export default App
