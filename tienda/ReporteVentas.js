import React, { useEffect, useState } from 'react';
import ReporteVentas from './ReporteVentas';
const ReporteVentas = () => {
  const [ventas, setVentas] = useState([]);
  const [totales, setTotales] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/api/ventas')
      .then(res => res.json())
      .then(data => {
        setVentas(data);

        const resumen = {};
        data.forEach(({ producto, precio }) => {
          if (!resumen[producto]) resumen[producto] = 0;
          resumen[producto] += precio;
        });
        setTotales(resumen);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Totales de Ventas</h2>
      <ul>
        {Object.entries(totales).map(([producto, total]) => (
          <li key={producto}>
            {producto}: S/. {total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReporteVentas;
