const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'long'
});

db.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

app.get('/api/ventas', (req, res) => {
  const query = `
    SELECT p.nombre, p.precio, v.ventas, (p.precio * v.ventas) AS montoTotal
    FROM productos p
    JOIN ventas v ON p.id = v.producto_id;
  `;
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).json({ error: 'Error al obtener los datos de ventas' });
      return;
    }
    
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
