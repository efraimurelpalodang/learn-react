// import Header from "./components/Header";
// import Welcome from "./components/Welcome";
// import { Counter } from "./components/Counter";
// import ModalLike from "./components/ModalLike";
import "./App.css";
import { Route, Routes } from "react-router";
import TermsPage from "./pages/TermsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
// import ProfileCard from "./components/ProfileCard";
// import type { Teacher } from "./ts/types";

// const teachers: Teacher[] = [
//   {
//     id: 1,
//     name: "Jhon",
//     job: "Dosen",
//     year: 2000,
//   },
//   {
//     id: 2,
//     name: "Dae",
//     job: "Teknikal analisis",
//     year: 2003,
//   },
//   {
//     id: 3,
//     name: "Alice",
//     job: "Senior developer",
//     year: 1995,
//   },
// ];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* Dynamic Route */}
        <Route path="/product/:slug" element={<ProductDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
