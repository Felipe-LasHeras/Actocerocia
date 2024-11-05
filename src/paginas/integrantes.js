import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import vicente from "../assets/fotosMiembros/vicho_presentacion.jpg";
import sofia from "../assets/fotosMiembros/sofia_presentacion.jpg";
import carla from "../assets/fotosMiembros/carla_presentacion.jpg";
import "../styles/integrantes.css";

const Integrantes = () => {
  const navigate = useNavigate();
  const [activeMember, setActiveMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si el dispositivo es móvil o si el ancho de pantalla es menor a 768px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Ejecuta una vez al cargar el componente
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMemberClick = (path, member) => {
    if (isMobile) {
      // En dispositivos móviles y tabletas
      if (activeMember === member) {
        navigate(path);
      } else {
        setActiveMember(member);
      }
    } else {
      // En pantallas grandes, redirige de inmediato al hacer clic
      navigate(path);
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="navigation-header">
        <button 
          onClick={() => navigate(-1)}
          className="integrated-back-button"
        >
          ← Volver
        </button>
        <h1 className="text-center my-3">Integrantes</h1>
      </div>

      <div className="integrantes-container">
        <button 
          className={`btn p-0 integrante-container ${activeMember === "Sofia" ? "active" : ""}`}
          onClick={() => handleMemberClick("/PerfilSofia", "Sofia")}
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
          className={`btn p-0 integrante-container ${activeMember === "Vicente" ? "active" : ""}`}
          onClick={() => handleMemberClick("/PerfilVicente", "Vicente")}
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
          className={`btn p-0 integrante-container ${activeMember === "Carla" ? "active" : ""}`}
          onClick={() => handleMemberClick("/PerfilCarla", "Carla")}
        >
          <img
            src={carla}
            alt="Integrante 3"
            className="img-fluid h-100"
            style={{ objectFit: "cover", width: "100%" }}
          />
          <div className="integrante-hover-text">
            <h2 className="integrante-title">Carla</h2>
            <p className="integrante-subtitle">Actriz y esteta</p>
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
