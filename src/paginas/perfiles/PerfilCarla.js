import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import carla from "../../assets/fotosMiembros/carla_presentacion.jpg";
import "../../styles/index.css";
 // Asegúrate de que la ruta a la imagen sea correcta

const Biografia = () => {
  return (
    <div className="container mt-5 text-white fondo">
      <div className="row">
        {/* Columna de texto */}
        <div className="col-md-8">
          <h1>Sofía Riveros Córdova</h1>
          <p className=" text-white"><i>Bailarina y coreógrafa</i></p>
          <p>1997, Santiago de Chile
          </p>
          <p>
          Actriz egresada de la PUC con mención en Estudios Teatrales. Licenciada en Estética en la misma institución. Cursó un Diplomado de Literaturas del Mundo en la Universidad de Chile. Forma parte del elenco estable en Cía. La Culpable, colectivo que tematiza el crimen con perspectiva de género a través de puestas en escena intermediales (obras Evidencia, Testigxs, parte de la trilogía Comparecer).
          </p>
          <p>
          “Las Mujeres de Afuera” (FONDART Circulación Nacional 2023), obra testimonial de la compañía interdisciplinaria Acto Cero, de la cual es co-fundadora. Dentro de este mismo colectivo ha realizado labores de Producción y Asistencia de Dirección en distintos montajes. Miembro activo del colectivo EMA Ensamble, agrupación en la que colabora desde  Actriz de cortometraje Kiss Me Goodbye, corto seleccionado en festival SANFIC, FECICH - Premio a Mejor Actuación - y Festival de Cine del Mar -Mejor cortometraje iberoamericano-.
          </p>
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
