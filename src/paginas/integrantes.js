import React from "react";
import { useNavigate } from "react-router-dom";
import vicente from "../assets/fotosMiembros/vicho_presentacion.jpg";
import sofia from "../assets/fotosMiembros/sofia_presentacion.jpg";
import carla from "../assets/fotosMiembros/carla_presentacion.jpg";
import "../styles/integrantes.css";

const Integrantes = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="container-fluid p-0 fondo">
      <div className="navigation-header">
        <button 
          onClick={() => navigate(-1)}
          className="integrated-back-button"
        >
          ← Volver
        </button>
        <h1 className="text-center my-3">Integrantes</h1>
      </div>

      <div className="d-flex justify-content-between" style={{ height: "calc(100vh - 100px)" }}>
        <button 
          className="btn p-0 flex-grow-1 integrante-container" 
          onClick={() => handleNavigation("/PerfilSofia")}
          style={{ maxWidth: "33.33%" }}
        >
          <img
            src={sofia}
            alt="Integrante 1"
            className="img-fluid h-100"
            style={{ objectFit: "cover", width: "100%" }}
          />
          <div className="integrante-hover-text">
            <h2 className="integrante-title">Sofía</h2>
            <p className="integrante-subtitle">Bailarina y coreógrafa</p>
            <p className="ver-mas">
              Ver más <span className="arrow">→</span>
            </p>
          </div>
        </button>

        <button 
          className="btn p-0 flex-grow-1 integrante-container" 
          onClick={() => handleNavigation("/PerfilVicente")}
          style={{ maxWidth: "33.33%" }}
        >
          <img
            src={vicente}
            alt="Integrante 2"
            className="img-fluid h-100"
            style={{ objectFit: "cover", width: "100%" }}
          />
          <div className="integrante-hover-text">
            <h2 className="integrante-title">Vicente</h2>
            <p className="integrante-subtitle">Compositor</p>
            <p className="ver-mas">
              Ver más <span className="arrow">→</span>
            </p>
          </div>
        </button>

        <button 
          className="btn p-0 flex-grow-1 integrante-container" 
          onClick={() => handleNavigation("/PerfilCarla")}
          style={{ maxWidth: "33.33%" }}
        >
          <img
            src={carla}
            alt="Integrante 3"
            className="img-fluid h-100"
            style={{ objectFit: "cover", width: "100%" }}
          />
          <div className="integrante-hover-text">
            <h2 className="integrante-title">Carla</h2>
            <p className="integrante-subtitle">Bailarina y coreógrafa</p>
            <p className="ver-mas">
              Ver más <span className="arrow">→</span>
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Integrantes;