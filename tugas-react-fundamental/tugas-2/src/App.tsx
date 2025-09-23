// import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./home/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
