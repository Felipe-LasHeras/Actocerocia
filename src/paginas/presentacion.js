import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import miembros from "../assets/fotosMiembros/foto acto cero (1).jpg";
import "../styles/presentacion.css";
import "../styles/index.css";

function Presentacion() {
  return (
    <div className="presentacion fondo">
    <div className="container">
      {/* Fila del título */}
      <div className="row mb-0">
        <div className="col-12 imagenequipo d-flex justify-content-center">
          <h2 className="text-center mb-0">Actocero</h2>
        </div>
      </div>
  
      {/* Fila de la imagen */}
      <div className="row mt-0">
        <div className="col-12 d-flex justify-content-center">
          <img
            src={miembros}
            alt="Equipo Acto Cero"
            className="img-fluid"
            style={{
              maxWidth: "100%",
              height: "auto",
              maxHeight: "500px",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
  
      {/* Fila de los botones */}
      <div className="row mt-3">
        <div className="col-12 d-flex justify-content-center">
          <div className="d-flex justify-content-between" style={{ width: "100%", maxWidth: "500px" }}>
            <button type="button" className="btn btn-secondary mx-1 flex-grow-1">
              Acta
            </button>
            <button type="button" className="btn btn-light mx-1 flex-grow-1">
              Misión
            </button>
            <button type="button" className="btn btn-secondary mx-1 flex-grow-1">
              Visión
            </button>
            <button type="button" className="btn btn-secondary mx-1 flex-grow-1">
              Metodología
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  
  );
}

export default Presentacion;
