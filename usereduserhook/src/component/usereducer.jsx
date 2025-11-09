import { useReducer, useState } from "react";
import { Reduser } from "./reduser";

const Usereducer = () => {

    // const [count, setCount] = useState(0);

    const [count, dispatch] = useReducer(Reduser, 0);

    const handelIncrement = () => {
        dispatch({
            type: "inc"
        });
    }
    const handeldecrement = () => {
        dispatch({
            type: "dec"
        });
    }
    return (
        <>
            <br></br>
            <h1>Count App :- <br></br> {count}</h1>
            <button onClick={handelIncrement}>+</button>&nbsp;&nbsp;
            <button onClick={handeldecrement}>-</button>&nbsp;&nbsp;
        </>
    );
};
export default Usereducer;