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
            <h2 className="text-center mb-0">Acto Cero</h2>
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
          {" "}
          {/* mt-3 añade margen encima */}
          <div className="col-12 d-flex justify-content-center">
            <button type="button" className="btn btn-primary mx-2">
              Primary
            </button>
            <button type="button" className="btn btn-primary mx-2">
              Primary
            </button>
            <button type="button" className="btn btn-primary mx-2">
              Primary
            </button>
            <button type="button" className="btn btn-primary mx-2">
              Primary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentacion;
