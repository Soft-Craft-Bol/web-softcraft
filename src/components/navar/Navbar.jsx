import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImagenesApp from '../../assets/ImagenesApp';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={ImagenesApp.logo} alt="Logo" />
        <h4>SoftCraft</h4>
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`} id="nav">
        <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
        <Link to="/servicios" onClick={() => setIsOpen(false)}>Servicios</Link>
        <Link to="/trabajos" onClick={() => setIsOpen(false)}>Trabajos</Link>
        <Link to="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link>
        <Link to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link>

        <div className="redes">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      <div className="menu-icon" id="icono-nav" onClick={toggleMenu}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;