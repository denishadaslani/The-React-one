import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Header from './componet/header'
import Addmovie from './componet/AddMovie/addmovie'
import Home from './componet/Movie/home'
import EditMovie from './componet/EditMovie/editmovie'


function App() {

  const [count, setCount] = useState(0)

  return (

    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addmovie' element={<Addmovie/>} />
        <Route path="/editmovie/:id" element={<EditMovie/> } />
      </Routes>
    </>

  )
}

export default App
