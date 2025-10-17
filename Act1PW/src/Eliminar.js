import { useNavigate } from "react-router-dom"; 
import "./App.css";

function Eliminar() {
  const navigate = useNavigate();

  return (
    <div className="eliminar-container">
      <header className="eliminar-header">
        <h2 className="punto-venta">Punto de Venta</h2>

        <button
          className="btn inventario"
          onClick={() => navigate("/")}
        >
          Inventario
        </button>
      </header>

      <h1 className="titulo-eliminar">Eliminar</h1>

      <form className="form-eliminar">
        <div className="form-grid-eliminar">
          <div className="form-group-eliminar">
            <label>ID del Producto:</label>
            <input type="text" placeholder="ID" />
          </div>

          <div className="form-group-eliminar">
            <label>Motivo:</label>
            <input type="text" placeholder="Motivo" />
          </div>
        </div>

        <button type="submit" className="btn eliminar-btn">
          Eliminar Producto
        </button>
      </form>
    </div>
  );
}

export default Eliminar;
