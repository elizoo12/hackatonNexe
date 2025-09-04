import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Tablero from "./pages/Tablero";
import Registro from "./pages/Registro";
import Medico from "./pages/Medico";
import Nino from "./pages/Niño";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Tablero" element={<Tablero />} />
      <Route path="/Registro" element={<Registro />} />
      <Route path="/Medico" element={<Medico />} />
      <Route path="/niño" element={<Nino />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
