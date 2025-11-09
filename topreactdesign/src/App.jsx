import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './componet/banner/banner'
import Header from './componet/header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
    
      <Banner />
    </>
  )
}

export default App
