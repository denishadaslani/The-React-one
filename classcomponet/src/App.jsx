import { useEffect, useState } from 'react'
import Counter from './counter'


function App() {
  let [count, setCount] = useState(0)

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    }
  }, [count]);

  return (
    <>
      <Counter />
      <h1>Function componet</h1>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(++count)}>+</button> || <button onClick={() => setCount(--count)}>-</button>


    </>
  )
}

export default App
