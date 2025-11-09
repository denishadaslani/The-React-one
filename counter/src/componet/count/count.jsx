import { useEffect, useState } from 'react'
import './count.css'
function Count() {
    let [count, setCount] = useState(0)

    useEffect(() => {
        let c = JSON.parse(localStorage.getItem("count"));
        setCount(c);
    }, [setCount]);

    let increment = () => {
        let newcount = count + 1;
        setCount(newcount);
        localStorage.setItem("count", JSON.stringify(newcount));
    }

    let decrement = () => {
        if (count > 0) {
            let newcount = count - 1;
            setCount(newcount);
            localStorage.setItem("count", JSON.stringify(newcount));
        } else {
            alert("Not possible to decrement below 0");
        }
    }
    let reset = () => {
        setCount(0);
        localStorage.setItem("count", JSON.stringify(0));
    }
    return (
        <>

            <div className="counter">
                <h1 align="center">Counter App</h1>
                <h2>{count}</h2>
                <div className="buttons">
                    <button onClick={() => { decrement() }}>-</button>
                    <button onClick={() => { increment() }}>+</button>
                    <button className="reset" onClick={() => reset()}>Reset</button>
                </div>

            </div>
        </>
    )
}
export default Count 