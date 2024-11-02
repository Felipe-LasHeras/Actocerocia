import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import miembros from "../assets/fotosMiembros/foto acto cero (1).jpg";
import "../styles/presentacion.css";
import "../styles/index.css";

function Presentacion() {
  return (
    <div className="presentacion fondo d-flex align-items-center">
      <div className="container">
        {/* Fila del título */}
        <div className="row mb-0">
          <div className="col-12 d-flex justify-content-center">
            <h2 className="text-center mb-0 text-white">Actocero</h2>
          </div>
        </div>

        {/* Fila de la imagen */}
        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-center">
            <img
              src={miembros}
              alt="Equipo Acto Cero"
              className="img-fluid rounded custom-img"
            />
          </div>
        </div>

        {/* Fila del texto */}
        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-center">
            <div className="text-container px-3 px-md-5">
              <p className="text-light">
                En Acto Cero somos una convergencia de tres mentes creativas
                provenientes de la danza, música y teatro. Nuestro camino comienza
                en 2020 cuando decidimos unir nuestras perspectivas y habilidades
                para colaborar creativamente. Con cada proyecto, caminamos hacia la
                elaboración y perfeccionamiento de metodologías interdisciplinarias
                que nos permitan llevar al público a un viaje inmersivo donde la
                expresión artística es libre y fluida. Como equipo compartimos un
                interés por generar puestas en escena donde el espectador se
                encuentre directamente involucrado en una experiencia sensorial de
                calidad, pues creemos fielmente que la aproximación visceral
                trasciende todo entendimiento intelectual, creándose una relación
                íntima y primitiva con el espectador. Nuestras obras proponen
                siempre un formato empático para un público general, sin perder
                complejidad en su propuesta. Por otra parte, nuestra metodología se ha caracterizado por la interdisciplinariedad en una aproximación a la creación que contemple la composición (espacial y temporal) de todos los elementos que conforman una escena, explotando los recursos que cada disciplina puede aportar al universo de la obra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentacion;
