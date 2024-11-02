import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import sofia from "../../assets/fotosMiembros/sofia_presentacion.jpg";
import instagram from "../../assets/logo/instagram.svg";
import "../../styles/index.css";

const Biografia = () => {
  return (
    <div className="container mt-5 fondo">
      <div className="row">
        {/* Columna de texto */}
        <div className="col-md-8">
          <h1>Sofía Riveros Córdova</h1>
          <p className="text-white">
            <i>Bailarina y coreógrafa</i>
          </p>
          <p>1997, Santiago de Chile</p>
          <p>
            Licenciada en Danza con mención en Coreografía en la Universidad
            Academia de Humanismo Cristiano (2021). Cuenta con estudios de
            ballet clásico certificados por la Royal Academy of Dance. Se ha
            desarrollado como intérprete en piezas coreográficas de José Luis
            Vidal con funciones en los Festivales Santiago a mil (2018) y
            Barrioarte (2019), Mauro Barahona con estreno en espacio Matucana
            100 (2023), Colectivo Irreverente (2022), sumado al trabajo con
            coreógrafos emergentes en la escena nacional.
          </p>
          <p>
            Coreógrafa de la obra Espectro Dicotómico (2018) presentada en el
            marco del Festival Inter-escuelas de Danza. Además, participa como
            coreógrafa en la obra de teatro Las mujeres de afuera (2021, Acto
            Cero), adjudicándose el Fondo de Circulación para las Artes
            Escénicas entregado por el MINCAP, y "Reloj Viejo de Pared" (2024,
            Acto Cero). Autora de la obra La Cocina (2023), su primera obra de
            gran formato. Directora de la obra El Clan (2024) de la Compañía
            Materia Lab.
          </p>
          <p>
            Desde el año 2020 es miembro activo de Acto Cero, compañía de
            producción y laboratorio artístico interdisciplinar. Directora de la
            obra de pequeño formato "Nora", presentada en el XI Encuentro a
            Cielo Abierto en Quito, Ecuador el año 2024. Facilitadora de "Danzar
            en Dúos", prácticas de danza en pareja junto a la compañía Materia
            Lab en ciudades como Santiago, Quito, Curicó, La Serena, entre
            otros.
          </p>
          <p>
            Directora Creativa de la Cía. Materia Lab., compañía de danza que
            entrega a estudiantes de danza un espacio de práctica escénica y una
            vía de inserción al mundo laboral. Coreógrafa del programa "Baila
            Fútbol" (2023-24) de la fundación Fútbol Más en colaboración con
            NTV.
          </p>
          <p>
            En el año 2024, integra el equipo de Jefes de Sala del Festival
            Santiago a Mil en Teatro Mori Bellavista y la Exposición "Museo 31"
            en CCLM
          </p>

          {/* Enlace a Instagram con logo y nombre */}
          <a
            href="https://www.instagram.com/sofia.ri_/"
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
                filter: "invert(100%)",
              }}
            />
            <span>@sofia.ri_</span>
          </a>
        </div>

        {/* Columna de imagen */}
        <div className="col-md-4 d-flex justify-content-center align-items-start">
          <div style={{
            width: "100%",
            paddingBottom: "133.33%", // Proporción 3:4 común para fotos de retrato
            position: "relative"
          }}>
            <img
              src={sofia}
              alt="Sofía Riveros Córdova"
              className="img-fluid rounded"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "2px solid white",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biografia;