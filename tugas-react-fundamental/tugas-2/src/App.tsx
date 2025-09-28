// import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Products from "./pages/products/Products";
import DetailProduct from "./pages/products/DetailProduct";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<DetailProduct />} />
      </Routes>
    </>
  );
}

export default App;
