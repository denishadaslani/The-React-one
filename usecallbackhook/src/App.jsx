import { use, useEffect, useState } from 'react';
import './App.css';
import Buttoncomp from './Buttoncomp/Buttoncomp';
import { useCallback } from 'react';
import Calculator from './calculator/calculator';
import Hoc from './Hoc/hoc';




function App() {

  // const [isloading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count => count + 1);

  }, []);

  const handleDecrement = useCallback(() => {
    setCount(count => count - 1);
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>

      <Calculator />
      <Buttoncomp name='Increment' handelClick={handleIncrement} />&nbsp;&nbsp;
      <Buttoncomp name='Decrement' handelClick={handleDecrement} />
    </>
  );
}

export default App;
