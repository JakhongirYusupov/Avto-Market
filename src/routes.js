import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Types from "./pages/Types/Types";
import Detail from "./pages/Detail/Detail";
import Admin from "./pages/Admin/Admin";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/model-types" element={<Types />} />
      <Route path="/model" element={<Detail />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
