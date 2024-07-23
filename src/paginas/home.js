import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import cocina1 from "../assets/lacocina1.jpg";
import cocina2 from "../assets/lacocina2.jpg";
import cocina3 from "../assets/lacocina3.jpg";

function Home() {
  return (
    <div className="fondo">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cocina1} class="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={cocina2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={cocina3} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
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
          data-bs-target="#carouselExampleControls"
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
  );
}

export default Home;
