import React from "react";
import { useNavigate } from "react-router-dom";
import vicente from "../assets/fotosMiembros/vicho_presentacion.jpg";
import sofia from "../assets/fotosMiembros/sofia_presentacion.jpg";
import carla from "../assets/fotosMiembros/carla_presentacion.jpg";

// Asegúrate de importar Bootstrap en tu archivo principal (generalmente index.js o App.js)
// import 'bootstrap/dist/css/bootstrap.min.css';

const Integrantes = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };
  
  return (
    <div className="container-fluid p-0">
      <h1 className="text-center my-3">Integrantes</h1>
      <div className="d-flex justify-content-between" style={{ height: "calc(100vh - 100px)" }}>
        <button 
          className="btn p-0 flex-grow-1" 
          onClick={() => handleNavigation("/pagina1")}
          style={{ maxWidth: "33.33%" }}
        >
          <img
            src={sofia}
            alt="Integrante 1"
            className="img-fluid h-100"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </button>
        <button 
          className="btn p-0 flex-grow-1" 
          onClick={() => handleNavigation("/pagina2")}
          style={{ maxWidth: "33.33%" }}
        >
          <img
            src={vicente}
            alt="Integrante 2"
            className="img-fluid h-100"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </button>
        <button 
          className="btn p-0 flex-grow-1" 
          onClick={() => handleNavigation("/pagina3")}
          style={{ maxWidth: "33.33%" }}
        >
          <img
            src={carla}
            alt="Integrante 3"
            className="img-fluid h-100"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Integrantes;