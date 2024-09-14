import React from "react";
import { useNavigate } from "react-router-dom";
import frente from "../assets/fotosFrente/frente1.JPG";
import elreloj from "../assets/fotosReloj/reloj1.jpg";
import tiempo from "../assets/fotosTiempo/tiempo1.jpg";
import mujeres from "../assets/fotosMujeres/mujeres3.jpg";
import cocina from "../assets/fotosCocina/lacocina1.jpg";

import "../styles/index.css";


// Asegúrate de importar Bootstrap en tu archivo principal (generalmente index.js o App.js)
// import 'bootstrap/dist/css/bootstrap.min.css';

const Integrantes = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };
  
  return (
    <div className="container-fluid p-0 fondo">
      <h1 className="text-center my-3">Obras</h1>
      <div className="d-flex justify-content-between" style={{ height: "calc(100vh - 100px)" }}>
        <button 
          className="btn p-0 flex-grow-1" 
          onClick={() => handleNavigation("/Frenteaustedesta")}
          style={{ maxWidth: "33.33%" }}
        >
          <img
            src={frente}
            alt="Integrante 1"
            className="img-fluid h-100"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </button>
        <button 
          className="btn p-0 flex-grow-1" 
          onClick={() => handleNavigation("/elreloj")}
          style={{ maxWidth: "33.33%" }}
        >
          
          <img
            src={elreloj}
            alt="Integrante 2"
            className="img-fluid h-100"
            style={{ objectFit: "cover", width: "100%" }}
            />
            
        </button>
        <button 
          className="btn p-0 flex-grow-1" 
          onClick={() => handleNavigation("/eltiempocamino")}
          style={{ maxWidth: "33.33%" }}
        >
          <img
            src={tiempo}
            alt="Integrante 3"
            className="img-fluid h-100"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </button>
        <button 
          className="btn p-0 flex-grow-1" 
          onClick={() => handleNavigation("/Lasmujeresdeafuera")}
          style={{ maxWidth: "33.33%" }}
        >
          <img
            src={mujeres}
            alt="Integrante 1"
            className="img-fluid h-100"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </button>
        <button 
          className="btn p-0 flex-grow-1" 
          onClick={() => handleNavigation("/Lacocina")}
          style={{ maxWidth: "33.33%" }}
        >
          
          <img
            src={cocina}
            alt="Integrante 2"
            className="img-fluid h-100"
            style={{ objectFit: "cover", width: "100%" }}
            />
            
        </button>
      </div>
    </div>
  );
};

export default Integrantes;