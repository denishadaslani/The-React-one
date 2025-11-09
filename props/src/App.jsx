import { useState } from "react";
import Country from "./country";


function App() {
  let [info, setInfo] = useState ({ country: "india", state: "gujarat", city: "surat" });
  return (
    <>
      <h1>country</h1>
    
   <Country data={info} />
    </>
  )
}

export default App