// import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./home/Home";
import Navbar from "./components/Navbar";
import Products from "./products/Products";
import DetailProduct from "./products/DetailProduct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<DetailProduct />} />
      </Routes>
    </>
  );
}

export default App;
