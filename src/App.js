import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="dress-home" element={<Home />} />
        <Route path="food-home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
