// RegistroAlumno.jsx
import React, { useState } from 'react';
import axios from 'axios';
import ColegiosSelect from './ColegiosSelect';

function RegistroAlumno() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    colegioId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSelectChange = (colegioId) => {
    setFormulario({ ...formulario, colegioId });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/alumnos', formulario)
      .then(() => alert('Alumno registrado exitosamente'))
      .catch(error => console.error('Error al registrar alumno:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
      <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} required />
      <input type="number" name="edad" placeholder="Edad" onChange={handleChange} required />

      {/* Modificamos ColegiosSelect para pasar el ID del colegio seleccionado */}
      <ColegiosSelect onSelectChange={handleSelectChange} />

      <button type="submit">Registrar</button>
    </form>
  );
}

export default RegistroAlumno;
