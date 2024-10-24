import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import vicente from "../../assets/fotosMiembros/vicho_presentacion.jpg";
import instagram from "../../assets/logo/instagram.svg";
import "../../styles/index.css";
 // Asegúrate de que la ruta a la imagen sea correcta

const Biografia = () => {
  return (
    <div className="container mt-5 fondo ">
      <div className="row">
        {/* Columna de texto */}
        <div className="col-md-8">
          <h1>Vicente Larroulet Philippi</h1>
          <p className="text-white"><i>Compositor</i></p>
          <p>1995, Santiago de Chile</p>
          <p>
            Vicente Larroulet Philippi se desenvolvió tempranamente en el mundo
            de la música y las letras, lo que más tarde profundizó al estudiar
            paralelamente Composición y Teoría y Literatura de la música en la
            PUC. Su interés por pensar el espacio escénico lo ha conducido a
            participar de muchos colectivos (Acto Cero, Oído Medio y Teatro a
            Vapor), además de trabajar en obras específicas junto a Angelo
            Solari, Anselmo Ugarte, Teatro la Huacha, LabMateria, Teatro la
            Culpable.
          </p>
          <p>
            Desde la música popular sostiene dos proyectos: uno solista (y
            Vicente) y un dúo (José Vicentes), con ambos ha creado cuatro discos
            con buen recibimiento por parte del público en sus lanzamientos en
            Santiago y Valparaíso.
          </p>
          <p>
            Con su obra “DE LEJOS TIEMBLA, DE CERCA TITILA” fue ganador del
            Tercer Concurso de Composición y Arreglos Musicales Jorge Peña Hen
            de la FOJI el año 2021, estrenada meses más tarde en el Teatro
            Municipal de Las Condes y Lo Prado.
          </p>
          <a
            href="https://www.instagram.com/y_vicente_/"
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
            <span>@y_vicente_</span>
          </a>
        </div>

        {/* Columna de imagen */}
        <div className="col-md-4 d-flex justify-content-center">
          <img
            src={vicente}
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
