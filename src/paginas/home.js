import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import cocina1 from "../assets/fotosCocina/lacocina1.jpg";
import cocina2 from "../assets/fotosCocina/lacocina2.jpg";
import cocina3 from "../assets/fotosCocina/lacocina3.jpg";
import logo from "../assets/logo/Logo_ActoCero_en_blanco__1__page-0001-removebg-preview.png";
import "../styles/index.css";

function Home() {
  return (
    <div className="fondo">
      <div
        id="carouselExampleControls1"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner carouselUp">
          <div className="carousel-item active">
            <img src={cocina1} className="carouselUp d-flex w-60 l-60" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cocina2} className="carouselUp d-flex w-60" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cocina3} className="carouselUp d-flex w-60" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls1"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls1"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="segundoCarusel">
        <div
          id="carouselExampleControls2"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner carouselUp">
            <div className="carousel-item active">
              <img src={cocina1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={cocina2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={cocina3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls2"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls2"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
