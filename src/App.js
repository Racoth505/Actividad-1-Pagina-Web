// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InventarioProvider } from "./InventarioContext";
import "./App.css";
import Inventario from "./Inventario";
import InventarioVista from "./InventarioVista";
import VentasVista from "./VentasVista";
import Agregar from "./Agregar";
import Actualizar from "./Actualizar";
import Eliminar from "./Eliminar";
import Ventas from "./Ventas";
import Inicio from "./Inicio";

function App() {
  return (
    <InventarioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/inventarioVista" element={<InventarioVista />} />
          <Route path="/agregar" element={<Agregar />} />
          <Route path="/actualizar" element={<Actualizar />} />
          <Route path="/eliminar" element={<Eliminar />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/ventasVista" element={<VentasVista />} />
        </Routes>
      </Router>
    </InventarioProvider>
  );
}

export default App;