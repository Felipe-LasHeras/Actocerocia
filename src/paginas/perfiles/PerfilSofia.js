import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import sofia from "../../assets/fotosMiembros/sofia_presentacion.jpg";
import "../../styles/index.css";
 // Asegúrate de que la ruta a la imagen sea correcta

const Biografia = () => {
  return (
    <div className="container mt-5 fondo">
      <div className="row">
        {/* Columna de texto */}
        <div className="col-md-8">
          <h1>Sofía Riveros Córdova</h1>
          <p className="text-white"><i>Bailarina y coreógrafa</i></p>
          <p>1997, Santiago de Chile</p>
          <p>
          Licenciada en Danza con mención en Coreografía en la Universidad Academia de Humanismo Cristiano (2021). Cuenta con estudios de ballet clásico y danzas de carácter certificados por la Royal Academy of Dance de Londres.
          </p>
          <p>
          Se ha desarrollado como intérprete en piezas coreográficas de José Luis Vidal, Mauro Barahona, Colectivo Irreverente, sumado al trabajo con coreógrafos emergentes en la escena nacional. Participa como coreógrafa en la obra de teatro Las mujeres de afuera (2021, Acto Cero). Autora de la obra Amarte es un milagro, y yo te amé (2021), predecesora de La Cocina (2023), su primera obra de gran formato.
          </p>
          <p>
          Dirige la compañía de danza Materia Lab. enfocada a entregar a estudiantes de danza la posibilidad de insertarse en un marco profesional. Directora de la obra “El Clan” con 14 intérpretes de la misma compañía, estrenada el 5 de enero 2024 en Espacio Vitrina. Desde el año 2020 es parte de Acto Cero, compañía de producción y laboratorio artístico interdisciplinar. Coreógrafa del programa “Baila Fútbol” (2023-24) de la fundación Fútbol Más en colaboración con NTV.
          </p>
        </div>

        {/* Columna de imagen */}
        <div className="col-md-4 d-flex justify-content-center">
          <img
            src={sofia}
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
