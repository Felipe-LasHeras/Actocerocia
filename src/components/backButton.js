import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/backbutton.css";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Lista de rutas donde el botón no debe aparecer
  const excludedPaths = ['/home', '/', '/integrantes', '/contacto'];
  
  // Si estamos en una ruta excluida, no mostramos el botón
  if (excludedPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <button 
      onClick={() => navigate(-1)}
      className="integrated-back-button d-flex align-items-center"
    >
      <span className="arrow">←</span>
      <span>Volver</span>
    </button>
  );
};

export default BackButton;