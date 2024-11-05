import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/backbutton.css";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Lista de rutas donde el botón no debe aparecer
  const excludedPaths = ['/home', '/', '/integrantes', '/contacto'];
  
  // Estado para controlar si estamos en modo móvil
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Si estamos en una ruta excluida, no mostramos el botón
  if (excludedPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <button 
      onClick={() => navigate(-1)}
      className={`integrated-back-button d-flex align-items-center ${isMobile ? 'back-button' : ''}`}
    >
      <span className="arrow">←</span>
      {!isMobile && <span>Volver</span>}
    </button>
  );
};

export default BackButton;
