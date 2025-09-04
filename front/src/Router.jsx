import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Tablero from "./pages/Tablero";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Tablero" element={<Tablero />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
