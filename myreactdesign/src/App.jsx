import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header/header'

function App() {
  const [count, setCount] = useState(0)
  var para = {
    color: "green",
    textAlign: "center",
    fontSize: "30px"

  }

  return (
    <>
    <Header />
      <h1 style={{ backgroundColor: "green", color: "white", textAlign: "center" }}>header</h1>
      <p style={para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet quidem temporibus nam praesentium dolores, sit excepturi fugit, ducimus, amet voluptates sapiente doloribus? Sit quo incidunt perspiciatis, enim quasi quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet quidem temporibus nam praesentium dolores, sit excepturi fugit, ducimus, amet voluptates sapiente doloribus? Sit quo incidunt perspiciatis, enim quasi quod.</p>
      <span>hello react world</span>
      <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia quo nostrum ab hic veniam reiciendis modi ratione eum assumenda iusto error quod perferendis asperiores impedit consequatur, temporibus necessitatibus nobis.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia quo nostrum ab hic veniam reiciendis modi ratione eum assumenda iusto error quod perferendis asperiores impedit consequatur, temporibus necessitatibus nobis.
      </p>
      <img src="./vite.svg" height={100} />
      <img src="src/assets/react.svg" height={100} alt="" />
      <img src={reactLogo}  height={150} alt="" />
      <h1 style={{ backgroundColor: "green", color: "white", textAlign: "center" }}>footer</h1>
    </>
  )
}

export default App
