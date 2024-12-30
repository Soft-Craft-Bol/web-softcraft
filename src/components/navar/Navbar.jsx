import { useState } from "react";
import ImagenesApp from "../../assets/ImagenesApp";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookSquare, FaYoutube, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src={ImagenesApp.logo} alt="SoftCraft" />
        <h4>SoftCraft</h4>
      </div>

      <nav id="nav" className={menuOpen ? "nav open" : "nav"}>
        <a
          href="/"
          onClick={closeMenu}
          className={location.pathname === "/" ? "active" : ""}
        >
          Inicio
        </a>
        <a
          href="#servicios"
          onClick={closeMenu}
          className={location.hash === "#servicios" ? "active" : ""}
        >
          Servicios
        </a>
        <a
          href="#habilidades"
          onClick={closeMenu}
          className={location.hash === "#habilidades" ? "active" : ""}
        >
          Acerca de
        </a>
        <a
          href="#trabajos"
          onClick={closeMenu}
          className={location.hash === "#trabajos" ? "active" : ""}
        >
          Trabajos
        </a>
        <a
          href="#contacto"
          onClick={closeMenu}
          className={location.hash === "#contacto" ? "active" : ""}
        >
          Contáctenos
        </a>
      </nav>

      <div id="icono-nav" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
{/* 
      <div className="redes">
        <Link title="Visítanos en YouTube" to="/" onClick={closeMenu}>
          <FaYoutube />
        </Link>
        <Link
          title="No te pierdas nuestros post más recientes en Facebook"
          to="/"
          onClick={closeMenu}
        >
          <FaFacebookSquare />
        </Link>
      </div> */}
    </header>
  );
}

export default Navbar;
