import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import jamonFud from "./jamonFud290g.webp";
import cocacola from "./cocacola600ml.webp";
import Agregar from "./Agregar"; 
import Actualizar from "./Actualizar";
import Eliminar from "./Eliminar";

function Inventario() {
  const productos = [
    {
      id: 1,
      nombre: "Jamón de Pavo Virginia",
      precio: "$45",
      descripcion: "Jamón muy rico de pavo",
      categoria: "Alimento Procesado",
      unidad: "290 Gramos",
      stock: 50,
      stockMinimo: 5,
      imagen: jamonFud,
    },
    {
      id: 2,
      nombre: "Coca Cola",
      precio: "$25",
      descripcion: "Refresco muy rico",
      categoria: "Refrescos",
      unidad: "600 ml",
      stock: 50,
      stockMinimo: 5,
      imagen: cocacola,
    },
  ];

  return (
    <div className="inventario-container">
      {/* Encabezado */}
      <header className="inventario-header">
        <div className="header-overlay">
          <h2 className="punto-venta">Punto de Venta</h2>
          <h1 className="titulo">Inventario</h1>
          <div className="botones">
            <button className="btn Ventas">Ventas</button>

            <Link
              to="/actualizar"
              className="btn acualizar"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Actualizar Productos
            </Link>

            <Link
              to="/agregar"
              className="btn agregar"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Agregar Productos
            </Link>

            <Link
              to="/eliminar"
              className="btn eliminar"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Eliminar Productos
            </Link>
          </div>
        </div>
      </header>

      {/* Tabla */}
      <section className="tabla-section">
        <table className="tabla-inventario">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Unidad de Medida</th>
              <th>Stock</th>
              <th>Stock Mínimo</th>
              <th>Imagen del Producto</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nombre}</td>
                <td>{p.precio}</td>
                <td>{p.descripcion}</td>
                <td>{p.categoria}</td>
                <td>{p.unidad}</td>
                <td>{p.stock}</td>
                <td>{p.stockMinimo}</td>
                <td>
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="imagen-producto"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inventario />} />
        <Route path="/agregar" element={<Agregar />} />
        <Route path="/actualizar" element={<Actualizar />} />
        <Route path="/eliminar" element={<Eliminar />} />
      </Routes>
    </Router>
  );
}

export default App;
