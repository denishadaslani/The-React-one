import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompA from './componet/context/CompA'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CompA/>
    </>
  )
}

export default App
