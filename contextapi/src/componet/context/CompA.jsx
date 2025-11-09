import { createContext } from "react";
import CompB from "./CompB";

export const Usercontext = createContext();

const CompA = () => {
    const name = "denisha";
    const person = {
        name: "denisha",
        email: "denisha@123",
        gender: "female",
        course: "mern stack"
    }
    return (
        <>
            <h1>CompA - {name} </h1>
            {/* <CompB  name={name}/> */}
            <Usercontext.Provider value={person} >
                <CompB />
            </Usercontext.Provider>
        </>
    )
}
export default CompA;