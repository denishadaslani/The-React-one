import { memo, useMemo } from "react";

const Calculator = memo(() => {

    let total = useMemo(() => {
        let sum = 0;
        for (let i = 1; i < 100; i++) {
            sum += i;
        }
        return sum;
    },[]
    )
    return (
        <>
            <h1>Calculator</h1>
            <p>Total:{total}</p>

        </>
    )
});
export default Calculator;