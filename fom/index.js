const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // cambia esto si tu usuario de MySQL es diferente
  password: '',       // cambia esto si tienes contraseña
  database: 'registro_alumnos'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para obtener colegios
app.get('/colegios', (req, res) => {
  db.query('SELECT * FROM colegios', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Ruta para registrar alumnos
app.post('/alumnos', (req, res) => {
  const { nombre, apellido, edad, colegioId } = req.body;
  const sql = 'INSERT INTO alumnos (nombre, apellido, edad, colegioId) VALUES (?, ?, ?, ?)';
  db.query(sql, [nombre, apellido, edad, colegioId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send('Alumno registrado');
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
