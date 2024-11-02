import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/Logo_ActoCero_en_blanco__1__page-0001-removebg-preview.png";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Actocero Logo" className="navbar-logo" />
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/presentacion" onClick={() => setIsOpen(false)}>
                Actocero
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/integrantes" onClick={() => setIsOpen(false)}>
                Integrantes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/obras" onClick={() => setIsOpen(false)}>
                Obras
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto" onClick={() => setIsOpen(false)}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;