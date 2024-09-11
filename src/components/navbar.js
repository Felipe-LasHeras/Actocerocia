import React from "react";
import logo from "../assets/logo/Logo_ActoCero_en_blanco__1__page-0001-removebg-preview.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Actocero" style={{ height: '100%', maxHeight: '60px' }} />
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Presentacion">
                Actocero 
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Integrantes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Obras
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Obras
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;