import { Route, Routes } from "react-router"
import Header from "./componet/header"
import AddProduct from "./componet/Addproduct/Addproduct"
import Product from "./componet/Product/home"
import Editproduct from "./componet/Editproduct/editproduct"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product" element={<AddProduct />} />
        <Route path="/editproduct/:id" element={<Editproduct/> } />
      </Routes >
    </>
  )
}

export default App
