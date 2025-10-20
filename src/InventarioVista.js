import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import "./App.css";
import jamonFud from "./jamonFud290g.webp";
import cocacola from "./cocacola600ml.webp";

function InventarioVista() {
  const [mostrarFiltro, setMostrarFiltro] = useState(false);
  const filtroRef = useRef(null);

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

  useEffect(() => {
    function manejarClickFuera(event) {
      if (filtroRef.current && !filtroRef.current.contains(event.target)) {
        setMostrarFiltro(false);
      }
    }

    if (mostrarFiltro) {
      document.addEventListener("mousedown", manejarClickFuera);
    } else {
      document.removeEventListener("mousedown", manejarClickFuera);
    }

    return () => document.removeEventListener("mousedown", manejarClickFuera);
  }, [mostrarFiltro]);

  return (
    <div className="inventario-container">
      {/* 🔹 Barra de navegación */}
      <nav className="navbar">
        <h2 className="punto-venta">SupMis</h2>
        <div className="nav-botones">
          <Link to="/ventas" className="btn">
            Ventas
          </Link>
        </div>
      </nav>

      {/* ... el resto del código (Encabezado, Buscador, Tabla) sigue igual ... */}
      <header className="inventario-header">
        <div className="header-overlay">
          <h1 className="titulo">Inventario</h1>
        </div>
      </header>

      <div className="buscador-container" ref={filtroRef}>
        <input type="text" placeholder="Buscar" className="buscador-input" />
        <div
          className="filtro-icono"
          onClick={() => setMostrarFiltro(!mostrarFiltro)}
        >
          <FaFilter />
        </div>
        {mostrarFiltro && (
          <div className="filtro-dropdown">
            <ul>
              <li>Todas las categorías</li>
              <li>Alimento Procesado</li>
              <li>Refrescos</li>
            </ul>
          </div>
        )}
      </div>

      <section className="tabla-section">
        <div className="tabla-responsive-wrapper">
          <table className="tabla-inventario">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th>Categoría</th>
                <th>Unidad</th>
                <th>Stock</th>
                <th>Stock Mínimo</th>
                <th>Imagen</th>
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
        </div>
      </section>
    </div>
  );
}

export default InventarioVista