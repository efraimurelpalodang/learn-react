// import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./home/Home";
import Navbar from "./components/Navbar";
import Products from "./products/Products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
