import { useState } from "react"

function App() {
  let [name, setName] = useState("denisha");
  let [age, setAge] = useState(20);
  let [gender, setGender] = useState("female");
  let [firstname, setFirstName] = useState("Daslani");
  let [student, setstudent] = useState({ name: "denisha", age: 20, gender: "female" });
  let [city, setCity] = useState(["surat","rajkot","baroda","ahmedabad"]);
  let changeGender = () => {
    setGender("male");
  }
  let ChangeFirstName = () => {
    setFirstName("Denu");
  }
  let changecity = (pos,cityName) =>{
    let newcity = [...city];
    newcity[pos] = cityName;
    setCity(newcity);
  }
  return (
    <>

      <p>Name:{name}</p>
      <button onClick={() => setName("denu")}>Change</button>
      <p>Age:{age}</p>
      <button onClick={() => setAge(21)}>Change</button>
      <p>Gender:{gender}</p>
      <button onClick={() => changeGender()}>Change</button>
      <p>FirstName:{firstname}</p>
      <button onClick={() => ChangeFirstName()}>Change</button>
      <br />

      <h1>Student Information</h1>
      <p>Name:- {student.name}</p>
      <button onClick={() => { setstudent({ ...student, ['name']: 'denu' }) }}>Change</button>
      <p>Age:- {student.age}</p>
      <button onClick={() => {setstudent({...student, ['age']: 21})}}>Change</button>
      <p>Gender:- {student.gender}</p>
      <button onClick={() => {setstudent({...student, ['gender']: 'male'})}}>Change</button>
    <h3>City:-</h3>
      <ul>
        {city.map((v,i)=>{
          return(
            <>
            <li>{v}</li>
            <button onClick={()=>{changecity(i,"Amreli")}}>Change</button>
            </>
          )
        })}
      </ul>
    </>
  )
}

export default App
