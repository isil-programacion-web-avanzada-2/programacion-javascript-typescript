import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Usuarios from "./components/Usuarios";
import Navbar from "./components/Navbar";

export default function App(){
  return (
    //<p>Hola querido profesor, bienvenido</p>
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}>Inicio</Route>
      <Route path="/about" element={<About></About>}>Acerca</Route>
      <Route path="/usuarios" element={<Usuarios></Usuarios>}></Route>
    </Routes>
    </>
  );
}
