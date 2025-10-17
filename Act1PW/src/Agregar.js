import { useNavigate } from "react-router-dom";
import "./App.css";

function Agregar() {
  const navigate = useNavigate();

  return (
    <div className="agregar-container">
      <header className="agregar-header">
        <h2 className="punto-venta">Punto de Venta</h2>

        <button
          className="btn inventario"
          onClick={() => navigate("/")}
        >
          Inventario
        </button>
      </header>

      <h1 className="titulo-agregar">Agregar</h1>

      <form className="form-agregar">
        <div className="form-grid">
          <div className="form-group">
            <label>ID del Nuevo Producto:</label>
            <input type="text" placeholder="ID" />
          </div>

          <div className="form-group">
            <label>Descripción:</label>
            <input type="text" placeholder="Descripción" />
          </div>

          <div className="form-group">
            <label>Stock Inicial:</label>
            <input type="text" placeholder="Cantidad" />
          </div>

          <div className="form-group">
            <label>Nombre del Producto:</label>
            <input type="text" placeholder="Nombre" />
          </div>

          <div className="form-group">
            <label>Categoria:</label>
            <input type="text" placeholder="Categoria" />
          </div>

          <div className="form-group">
            <label>Stock Mínimo:</label>
            <input type="text" placeholder="Cantidad" />
          </div>

          <div className="form-group">
            <label>Precio del Nuevo Producto:</label>
            <input type="text" placeholder="Precio" />
          </div>

          <div className="form-group">
            <label>Unidad de Medida:</label>
            <input type="text" placeholder="Enteros / Gramos / Mililitros" />
          </div>

          <div className="form-group">
            <label>Imagen del Producto:</label>
            <input type="text" placeholder="Archivo tipo PNG" />
          </div>
        </div>

        <button type="submit" className="btn agregar-btn">
          Agregar Producto
        </button>
      </form>
    </div>
  );
}

export default Agregar;
