import { Route, Routes } from "react-router"
import Header from "./comopents/Header"
import AddStudent from "./comopents/AddStudent"
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/AddStudent' element={<AddStudent />} /> 
      </Routes>
    </>
  )
}

export default App
