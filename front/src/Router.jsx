import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
