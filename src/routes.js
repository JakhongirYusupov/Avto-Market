import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Types from "./pages/Types/Types";
import Detail from "./pages/Detail/Detail";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/model-types" element={<Types />} />
      <Route path="/model" element={<Detail />} />
    </Routes>
  );
}
