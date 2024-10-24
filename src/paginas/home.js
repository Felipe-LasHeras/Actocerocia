import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import mujeresc1 from "../assets/fotosCarusel/mujeresc1.jpg";
import mujeresc2 from "../assets/fotosCarusel/mujeresc2.jpg";
import mujeresc3 from "../assets/fotosCarusel/mujeresc3.jpg";
import cocinac1 from "../assets/fotosCarusel/cocinac1.jpg";
import cocinac2 from "../assets/fotosCarusel/cocinac2.jpg";
import cocinac3 from "../assets/fotosCarusel/cocinac3.jpg";
import relojc1 from "../assets/fotosCarusel/relojc1.jpg";
import relojc2 from "../assets/fotosCarusel/relojc2.jpg";
import relojc3 from "../assets/fotosCarusel/relojc3.jpg";
import logo from "../assets/logo/Logo_ActoCero_en_blanco__1__page-0001-removebg-preview.png";
import "../styles/index.css";

function Home() {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [sliding1, setSliding1] = useState(false);
  const [sliding2, setSliding2] = useState(false);
  const [direction1, setDirection1] = useState(null);
  const [direction2, setDirection2] = useState(null);

  const carousel1Images = [mujeresc1, relojc1, cocinac1, mujeresc2, relojc2];
  const carousel2Images = [cocinac2, mujeresc3, relojc3, cocinac3];

  // Función para el cambio automático del primer carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      handleCarousel1Navigation('next', new Event('auto'));
    }, 5000); // 5 segundos

    return () => clearInterval(interval);
  }, [activeIndex1]);

  // Función para el cambio automático del segundo carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      handleCarousel2Navigation('next', new Event('auto'));
    }, 5000); // 5 segundos

    return () => clearInterval(interval);
  }, [activeIndex2]);

  const handleCarousel1Navigation = (direction, e) => {
    if (e.type !== 'auto') {
      e.preventDefault();
    }
    if (sliding1) return;

    setDirection1(direction);
    setSliding1(true);

    const newIndex = direction === 'next'
      ? (activeIndex1 === carousel1Images.length - 1 ? 0 : activeIndex1 + 1)
      : (activeIndex1 === 0 ? carousel1Images.length - 1 : activeIndex1 - 1);

    setTimeout(() => {
      setActiveIndex1(newIndex);
      setSliding1(false);
    }, 600);
  };

  const handleCarousel2Navigation = (direction, e) => {
    if (e.type !== 'auto') {
      e.preventDefault();
    }
    if (sliding2) return;

    setDirection2(direction);
    setSliding2(true);

    const newIndex = direction === 'next'
      ? (activeIndex2 === carousel2Images.length - 1 ? 0 : activeIndex2 + 1)
      : (activeIndex2 === 0 ? carousel2Images.length - 1 : activeIndex2 - 1);

    setTimeout(() => {
      setActiveIndex2(newIndex);
      setSliding2(false);
    }, 600);
  };

  const getItemClassName = (index, activeIndex, sliding, direction, isCarousel1) => {
    const images = isCarousel1 ? carousel1Images : carousel2Images;
    let className = 'carousel-item';
    
    if (index === activeIndex) {
      className += ' active';
    }

    if (sliding) {
      if (direction === 'next') {
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        if (index === nextIndex) {
          className += ' carousel-item-next';
        }
        if (index === activeIndex) {
          className += ' carousel-item-start';
        }
      } else {
        const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        if (index === prevIndex) {
          className += ' carousel-item-prev';
        }
        if (index === activeIndex) {
          className += ' carousel-item-end';
        }
      }
    }

    return className;
  };

  return (
    <div className="fondo">
      <div className="carousel-container">
        <div
          id="carouselExampleControls1"
          className="carousel slide"
        >
          <div className="carousel-inner carouselUp position-relative">
            {carousel1Images.map((img, index) => (
              <div
                key={index}
                className={getItemClassName(index, activeIndex1, sliding1, direction1, true)}
              >
                <img src={img} className="carouselUp d-block w-100" alt={`Slide ${index + 1}`} />
              </div>
            ))}
            <div 
              className="position-absolute top-0 start-0 h-100 w-50" 
              style={{ cursor: 'pointer', zIndex: 2 }}
              onClick={(e) => handleCarousel1Navigation('prev', e)}
            />
            <div 
              className="position-absolute top-0 end-0 h-100 w-50" 
              style={{ cursor: 'pointer', zIndex: 2 }}
              onClick={(e) => handleCarousel1Navigation('next', e)}
            />
          </div>
        </div>
      </div>

      <div className="logo-container logo">
        <img src={logo} alt="Logo ActoCero" className="logo-image" />
      </div>

      <div className="carousel-container">
        <div
          id="carouselExampleControls2"
          className="carousel slide"
        >
          <div className="carousel-inner carouselUp position-relative">
            {carousel2Images.map((img, index) => (
              <div
                key={index}
                className={getItemClassName(index, activeIndex2, sliding2, direction2, false)}
              >
                <img src={img} className="carouselUp d-block w-100" alt={`Slide ${index + 1}`} />
              </div>
            ))}
            <div 
              className="position-absolute top-0 start-0 h-100 w-50" 
              style={{ cursor: 'pointer', zIndex: 2 }}
              onClick={(e) => handleCarousel2Navigation('prev', e)}
            />
            <div 
              className="position-absolute top-0 end-0 h-100 w-50" 
              style={{ cursor: 'pointer', zIndex: 2 }}
              onClick={(e) => handleCarousel2Navigation('next', e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;