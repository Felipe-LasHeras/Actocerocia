import React from "react";
import { useNavigate } from "react-router-dom";
import frente from "../assets/fotosFrente/frente1.JPG";
import elreloj from "../assets/fotosReloj/reloj1.jpg";
import tiempo from "../assets/fotosTiempo/tiempo1.jpg";
import mujeres from "../assets/fotosMujeres/mujeres3.jpg";
import cocina from "../assets/fotosCocina/lacocina1.jpg";

import "../styles/obras.css";

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
        <div className="col-12 col-md-4 position-relative">
          <button 
            className="btn p-0 w-100 h-100 position-relative obra-container" 
            onClick={() => handleNavigation("/Frenteaustedesta")}
          >
            <img
              src={frente}
              alt="Frente a usted está"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", height: "300px" }}
            />
            <div className="obra-hover-text">
              <h2 className="obra-title">Frente a usted está</h2>
              <p className="obra-subtitle">concierto/performance</p>
              <p className="ver-mas">
                Ver más <span className="arrow">→</span>
              </p>
            </div>
          </button>
        </div>

        {/* Segunda imagen */}
        <div className="col-12 col-md-4 position-relative">
          <button 
            className="btn p-0 w-100 h-100 position-relative obra-container" 
            onClick={() => handleNavigation("/elreloj")}
          >
            <img
              src={elreloj}
              alt="El Reloj"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", height: "300px" }}
            />
            <div className="obra-hover-text">
              <h2 className="obra-title">El Reloj</h2>
              <p className="obra-subtitle">Montaje teatral</p>
              <p className="ver-mas">
                Ver más <span className="arrow">→</span>
              </p>
            </div>
          </button>
        </div>

        {/* Tercera imagen */}
        <div className="col-12 col-md-4 position-relative">
          <button 
            className="btn p-0 w-100 h-100 position-relative obra-container" 
            onClick={() => handleNavigation("/eltiempocamino")}
          >
            <img
              src={tiempo}
              alt="El Tiempo Camino"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", height: "300px" }}
            />
            <div className="obra-hover-text">
              <h2 className="obra-title">El Tiempo Camino</h2>
              <p className="obra-subtitle">Videoclip</p>
              <p className="ver-mas">
                Ver más <span className="arrow">→</span>
              </p>
            </div>
          </button>
        </div>

        {/* Cuarta imagen */}
        <div className="col-12 col-md-4 position-relative">
          <button 
            className="btn p-0 w-100 h-100 position-relative obra-container" 
            onClick={() => handleNavigation("/Lasmujeresdeafuera")}
          >
            <img
              src={mujeres}
              alt="Las Mujeres de Afuera"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", height: "300px" }}
            />
            <div className="obra-hover-text">
              <h2 className="obra-title">Las Mujeres de Afuera</h2>
              <p className="obra-subtitle">Montaje teatral </p>
              <p className="ver-mas">
                Ver más <span className="arrow">→</span>
              </p>
            </div>
          </button>
        </div>

        {/* Quinta imagen */}
        <div className="col-12 col-md-4 position-relative">
          <button 
            className="btn p-0 w-100 h-100 position-relative obra-container" 
            onClick={() => handleNavigation("/Lacocina")}
          >
            <img
              src={cocina}
              alt="La Cocina"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", height: "300px" }}
            />
            <div className="obra-hover-text">
              <h2 className="obra-title">La Cocina</h2>
              <p className="obra-subtitle">Danza Teatro</p>
              <p className="ver-mas">
                Ver más <span className="arrow">→</span>
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Integrantes;
