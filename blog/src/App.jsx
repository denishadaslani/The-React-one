import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let fruits = ["apple", "banana", "cherry"];

  return (

    <>
      <h1>app</h1>
      <p>{fruits[0]}</p>
    
      {fruits.map((v,i)=>{
        return <p key={i}>{v}</p>
      })}
    </>
  )
}

export default App
