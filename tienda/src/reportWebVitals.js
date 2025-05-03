import React, { useState, useEffect } from 'react';
import './VentasProductos.css';

const VentasProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/ventas')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al obtener los productos:', error));
  }, []);

  // Calcular el total de todas las ventas
  const totalVentas = productos.reduce((acum, prod) => acum + Number(prod.montoTotal), 0);

  return (
    <div className="ventas-container">
      <h1 className="titulo">Ventas de Productos</h1>
      <table className="tabla-ventas">
        <thead>
          <tr>
            <th>Nombre del Producto</th>
            <th>Precio</th>
            <th>Ventas</th>
            <th>Monto Total</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.nombre}>
              <td>{producto.nombre}</td>
              <td>s/. {producto.precio}</td>
              <td>{producto.ventas}</td>
              <td>s/. {producto.montoTotal}</td>
            </tr>
          ))}
          {/* Fila final con el total acumulado */}
          <tr className="fila-total">
            <td colSpan="3" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total General:</td>
            <td style={{ fontWeight: 'bold', color: '#d4af37' }}>s/. {totalVentas.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VentasProductos;
