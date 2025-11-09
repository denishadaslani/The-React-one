import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router'
import Header from './Compontes/Header'
import AddProperty from './Compontes/AddProperty/AddProperty'
import Home from './Compontes/Home/Home'
import EditProperty from './Compontes/EditProperty/EditProperty'

// import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddProperty" element={<AddProperty />} />
        <Route path="/edit-property/:id" element={<EditProperty />} />
      </Routes>
    </>
  )
}

export default App
