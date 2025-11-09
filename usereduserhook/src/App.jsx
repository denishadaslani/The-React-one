import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usereducer from './component/usereducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Usereducer/>
    </>
  )
}

export default App
