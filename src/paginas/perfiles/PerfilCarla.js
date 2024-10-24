import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import carla from "../../assets/fotosMiembros/carla_presentacion.jpg";
import instagram from "../../assets/logo/instagram.svg";
import "../../styles/index.css";
 // Asegúrate de que la ruta a la imagen sea correcta

const Biografia = () => {
  return (
    <div className="container mt-5 fondo">
      <div className="row">
        {/* Columna de texto */}
        <div className="col-md-8">
          <h1>Carla Jiménez Ulloa </h1>
          <p className=" text-white"><i>Actriz</i></p>
          <p>1997, Santiago de Chile
          </p>
          <p>
          Actriz egresada de la PUC con mención en Estudios Teatrales. Licenciada en Estética en la misma institución. Cursó un Diplomado de Literaturas del Mundo en la Universidad de Chile. Forma parte del elenco estable en Cía. La Culpable, colectivo que tematiza el crimen con perspectiva de género a través de puestas en escena intermediales (obras Evidencia, Testigxs, parte de la trilogía Comparecer). Ha dirigido Directora del montaje “Las Mujeres de Afuera” (FONDART Circulación Nacional 2023), obra testimonial de la compañía interdisciplinaria Acto Cero. Dentro de este mismo colectivo ha realizado labores de Producción y Asistencia de Dirección. Miembro activo del EMA Ensamble, agrupación en la que colabora a nivel performativo y de locución en EMA podcast. Actriz de cortometraje Kiss Me Goodbye, corto seleccionado en festival SANFIC, FECICH - Premio a Mejor Actuación - y Festival de Cine del Mar -Mejor cortometraje iberoamericano-.
          </p>
          <a
            href="https://www.instagram.com/c.jzu/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center text-white mt-3"
          >
            <img
              src={instagram}
              alt="Logo Instagram"
              style={{
                width: "30px",
                height: "30px",
                marginRight: "10px",
                filter: "invert(100%)", // Para hacer el logo blanco si es un SVG
              }}
            />
            <span>@c.jzu</span>
          </a>
        </div>

        {/* Columna de imagen */}
        <div className="col-md-4 d-flex justify-content-center">
          <img
            src={carla}
            alt="Vicente Larroulet Philippi"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", border: "2px solid white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Biografia;
