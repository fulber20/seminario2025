import React from 'react';
import logo from './14.png';
import './App.css';

const Producto = ({ nombre, descripcion, precio, imagen }) => (
  <div className="producto">
    <img src={imagen} alt={nombre} className="imagen" />
    <h3>{nombre}</h3>
    <p>{descripcion || "Producto de alta calidad"} </p>
    <strong>S/. {precio}</strong>
    <button>Añadir al carrito</button>
  </div>
);

const productos = [
  { nombre: "Epson EcoTank L3250", precio: 800, imagen: "https://www.tiendakrear3d.com/wp-content/uploads/2023/09/ANYCUBIC-KOBRA-2-NEO-1.webp" },
  { nombre: "Kobra 2 Neo", precio: 35, imagen: "https://www.tiendakrear3d.com/wp-content/uploads/2024/04/Creality-CR-PLA-Gris-1.75mm-200G-600x600.webp" },
  { nombre: "Resina Estandar Gris 500g", precio: 60, imagen: "https://www.tiendakrear3d.com/wp-content/uploads/2020/11/resina-estandar-gris-1-600x600.webp" },
  { nombre: "Gafas de Realidad Virtual Quest 3S 128GB", precio: 2150, imagen: "https://www.tiendakrear3d.com/wp-content/uploads/2024/10/Gafas-de-Realidad-Virtual-Meta-Quest-3S-128GB_y5.webp" },
  { nombre: "Flip (DJI RC 2) (GL)", precio: 3149, imagen: "https://www.tiendakrear3d.com/wp-content/uploads/2025/01/DJI-Flip-DJI-RC-2-GL_k3-600x600.webp" },
  { nombre: "3DMakerpro Seal Lite", precio: 1800, imagen: "https://www.tiendakrear3d.com/wp-content/uploads/2023/11/3DMakerpro-Seal-Lite_y5-600x600.webp" },
  { nombre: "Proyector de Hologramas 3D 43cm", precio: 500, imagen: "https://www.tiendakrear3d.com/wp-content/uploads/2025/03/IMAGEN-VENTILADOR-3D-2-600x600.png" },
  { nombre: "TwoTrees TTS-20 Pro 20W", precio: 3500, imagen: "https://www.tiendakrear3d.com/wp-content/uploads/2023/10/Two-Trees-TTS-20-Pro-20W_y6-600x600.webp" },
  { nombre: "Film para Modulo de Liberacion Reflex", precio: 220, imagen: "https://www.tiendakrear3d.com/wp-content/uploads/2025/02/Modulo-de-Film-de-Liberacion-Pulsada-Reflex-600x600.webp" },
  { nombre: "Avata 2 Fly More Combo", precio: 5949, imagen: "https://www.tiendakrear3d.com/wp-content/uploads/2024/07/DJI-Avata-2-Fly-More-Combo_k3-600x600.webp" },
];

const App = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <img src={logo} alt="Logo" className="hero-logo" />
          <h1 className="hero-title">Bienvenido a TecShop</h1>
          <p className="hero-subtitle">Tecnología, diseño y rendimiento para tu negocio o pasión</p>
          <a href="#productos" className="hero-button">Ver productos</a>
        </div>
      </section>

      <div className="contenedor" id="productos">
        <h2 className="titulo">Nuestros Productos</h2>
        <p className="subtitulo">Explora las mejores opciones del mercado</p>
        <div className="grid">
          {productos.map((prod, index) => (
            <Producto key={index} {...prod} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
