import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Tablero from "./pages/Tablero";
import Registro from "./pages/Registro";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Tablero" element={<Tablero />} />
      <Route path="/Registro" element={<Registro />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
