import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { InventarioContext } from "./InventarioContext";

export default function Ventas() {
  const { productos, updateProducto } = useContext(InventarioContext);
  const [venta, setVenta] = useState([]); // Productos agregados a la venta
  const [total, setTotal] = useState(0);

  // Función para buscar y agregar un producto
  const buscarProducto = () => {
    const id = prompt("Ingresa el ID del producto:");
    const producto = productos.find((p) => p.id === parseInt(id));
    if (!producto) return alert("Producto no encontrado.");

    const cantidad = parseInt(prompt("¿Cuántas unidades quieres agregar?"), 10);
    if (isNaN(cantidad) || cantidad <= 0) return alert("Cantidad inválida");
    
    const precio = parseFloat(producto.precio.replace("$", ""));
    const item = { ...producto, cantidad, total: precio * cantidad };

    setVenta([...venta, item]);
    setTotal((prev) => prev + item.total);
  };

  // Función para eliminar un producto de la venta
  const eliminarProducto = () => {
    if (venta.length === 0) return alert("No hay productos para eliminar.");

    const id = prompt("Ingresa el ID del producto a eliminar:");
    const producto = venta.find((p) => p.id === parseInt(id));
    if (!producto) return alert("Producto no encontrado en la venta.");

    setVenta(venta.filter((p) => p.id !== producto.id));
    setTotal((prev) => prev - producto.total);
  };

  // Función para cobrar
  const cobrar = () => {
    if (venta.length === 0) return alert("No hay productos para cobrar.");

    const pago = parseFloat(prompt(`Total a pagar: $${total.toFixed(2)}\nIngresa el monto recibido:`));
    if (isNaN(pago) || pago < total) return alert("Monto insuficiente o inválido.");

    const cambio = pago - total;
    alert(`✅ Pago recibido\nCambio: $${cambio.toFixed(2)} M.N`);

    // Actualizar el inventario restando el stock de cada producto vendido
    venta.forEach((item) => {
      const productoActual = productos.find((p) => p.id === item.id);
      if (productoActual) {
        updateProducto(item.id, { stock: productoActual.stock - item.cantidad });
      }
    });

    setVenta([]);
    setTotal(0);
  };

  return (
    <div className="pv-shell">
      {/* ENCABEZADO */}
      <header className="pv-header">
        <div className="pv-brand">SupMis</div>
        <Link to="/inventario" className="btn ventas-btn">
          Inventario
        </Link>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="pv-main">
        {/* Tabla de venta */}
        <section className="pv-table">
          <div className="pv-head">
            <span>ID</span>
            <span>Artículos</span>
            <span>Cantidad</span>
            <span>Total</span>
          </div>
          <div className="pv-rows">
            {venta.length === 0 ? (
              <p style={{ padding: "1rem" }}>No hay productos agregados</p>
            ) : (
              venta.map((p) => (
                <div key={p.id} className="pv-row">
                  <span>{p.id}</span>
                  <span>{p.nombre}</span>
                  <span>{p.cantidad}</span>
                  <span>${p.total.toFixed(2)}</span>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Panel lateral con botones */}
        <aside className="pv-side">
          <button className="pv-card" onClick={cobrar}>
            Cobrar
          </button>
          <button className="pv-card purple" onClick={buscarProducto}>
            Buscar producto
          </button>
          <button className="pv-card red" onClick={eliminarProducto}>
            Eliminar
          </button>
        </aside>
      </main>

      {/* BARRA INFERIOR */}
      <footer className="pv-bottom">
        <div>
          <strong>Cambio (M.N):</strong> —
        </div>
        <div style={{ textAlign: "center" }}>
          <strong>Por pagar (M.N): ${total.toFixed(2)}</strong>
        </div>
        <Link to="/" className="pv-exit">
          Salir
        </Link>
      </footer>
    </div>
  );
}