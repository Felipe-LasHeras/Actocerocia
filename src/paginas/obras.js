import React from "react";
import { useNavigate } from "react-router-dom";
import frente from "../assets/fotosFrente/frente1.JPG";
import elreloj from "../assets/fotosReloj/reloj1.jpg";
import tiempo from "../assets/fotosTiempo/tiempo1.jpg";
import mujeres from "../assets/fotosMujeres/mujeres3.jpg";
import cocina from "../assets/fotosCocina/lacocina1.jpg";

import "../styles/index.css";

const Integrantes = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };
  
  return (
    <div className="container-fluid p-0 fondo">
      <h1 className="text-center my-3">Obras</h1>
      
      {/* Contenedor para las imágenes */}
      <div className="row g-3">
        {/* Primera imagen */}
        <div className="col-12 col-md-4">
          <button 
            className="btn p-0 w-100 h-100" 
            onClick={() => handleNavigation("/Frenteaustedesta")}
          >
            <img
              src={frente}
              alt="Integrante 1"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", height: "300px" }}
            />
          </button>
        </div>

        {/* Segunda imagen */}
        <div className="col-12 col-md-4">
          <button 
            className="btn p-0 w-100 h-100" 
            onClick={() => handleNavigation("/elreloj")}
          >
            <img
              src={elreloj}
              alt="Integrante 2"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", height: "300px" }}
            />
          </button>
        </div>

        {/* Tercera imagen */}
        <div className="col-12 col-md-4">
          <button 
            className="btn p-0 w-100 h-100" 
            onClick={() => handleNavigation("/eltiempocamino")}
          >
            <img
              src={tiempo}
              alt="Integrante 3"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", height: "300px" }}
            />
          </button>
        </div>

        {/* Cuarta imagen */}
        <div className="col-12 col-md-4">
          <button 
            className="btn p-0 w-100 h-100" 
            onClick={() => handleNavigation("/Lasmujeresdeafuera")}
          >
            <img
              src={mujeres}
              alt="Integrante 4"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", height: "300px" }}
            />
          </button>
        </div>

        {/* Quinta imagen */}
        <div className="col-12 col-md-4">
          <button 
            className="btn p-0 w-100 h-100" 
            onClick={() => handleNavigation("/Lacocina")}
          >
            <img
              src={cocina}
              alt="Integrante 5"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", height: "300px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Integrantes;
