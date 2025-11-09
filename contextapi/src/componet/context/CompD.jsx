import { useContext } from "react";
import { Usercontext } from "./CompA";

const CompD = () => {
    const person  = useContext(Usercontext);
    console.log(person);    
    return(
        <>
            <h1>CompD - {person.email}</h1>
        </>
    )
}
export default CompD;