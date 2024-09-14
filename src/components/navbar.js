import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/Logo_ActoCero_en_blanco__1__page-0001-removebg-preview.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        {/* Logo alineado a la izquierda */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Actocero" style={{ height: '100%', maxHeight: '60px' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Aquí se aplica 'ms-auto' para alinear los enlaces a la derecha */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white disabled" to="/presentacion">
                Actocero
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/integrantes">
                Integrantes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/obras">
                Obras
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contacto">
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
