// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Mueve la ventana al inicio
  }, [pathname]); // Cada vez que cambia la ruta, vuelve arriba

  return null; // No necesita renderizar nada
};

export default ScrollToTop;
