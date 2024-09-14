import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import reloj2 from "../../assets/fotosReloj/reloj2.jpg";
import reloj3 from "../../assets/fotosReloj/reloj3.jpg";
import reloj4 from "../../assets/fotosReloj/reloj4.jpg";
import reloj5 from "../../assets/fotosReloj/reloj5.jpg";
import reloj6 from "../../assets/fotosReloj/reloj6.PNG";
import reloj7 from "../../assets/fotosReloj/reloj7.png"; // Ruta de tu imagen

const App = () => {
  // Estados para manejar los dropdowns
  const [openFichaArtistica, setOpenFichaArtistica] = useState(false);
  const [openReseña, setOpenReseña] = useState(false);
  const [openCurriculum, setOpenCurriculum] = useState(false);
  const [openGaleria, setOpenGaleria] = useState(false); // Estado para Galería

  return (
    <Container className="mt-5" style={{ maxWidth: "800px" }}>
      {" "}
      {/* Controlar el ancho máximo */}
      <Row>
        <Col style={{ textAlign: "left" }}>
          {" "}
          {/* Alineación izquierda */}
          <h1>Reloj viejo de pared</h1>
          <h5>2024</h5>
          <p>Montaje teatral</p>
          <p>Obra para un intérprete y un marote.</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <img
            src={reloj3}
            alt="Frente a usted está"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p style={{ textAlign: "justify" }}>
            Inspirado en entrevistas con relojeros del centro de Santiago, el
            relato sigue a Luis, un relojero octogenario que enviudó
            recientemente. A través de conversaciones telefónicas con un
            cliente, las clases que mantiene con Oliver -su pequeño aprendiz- y
            la intimidad de una conciencia en duelo, la obra propone hacer un
            retrato de la tercera y cuarta edad chilena, indagando en la
            pérdida, la locura y la memoria. La pieza ofrece un complejo viaje
            emocional, lumínico y sonoro que juega entre el tiempo cronológico
            del reloj y el tiempo aletargado de un recuerdo anhelado, todo de la
            mano de una actriz y su marote, un retroproyector de transparencias
            y la amplificación y procesamiento en vivo mediante max/msp de
            relojes en escena.
          </p>
          <p>Duración: 50 minutos</p>
          <p>Público: todo espectador</p>
        </Col>
      </Row>
      {/* Botón para Ficha Artística */}
      <Row className="mt-4">
        <Col>
          <Button
            onClick={() => setOpenFichaArtistica(!openFichaArtistica)}
            style={{
              backgroundColor: "#161616",
              color: "white",
              width: "100%",
              textAlign: "left",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            Ficha Artística
          </Button>
          {openFichaArtistica && (
            <div
              className="p-3 mt-2"
              style={{
                textAlign: "justify",
                backgroundColor: "#000",
                borderRadius: "5px",
              }}
            >
              <p>Dirección: Vicente Larroulet</p>
              <p>Asistencia de dirección: Carla Jiménez</p>
              <p>Producción: Sofía Riveros</p>
              <p>
                <p>Dramaturgia: Xabier Usabiaga</p>
              </p>
              <p>Diseño y composición: sonora Luciano Altair</p>
              <p>Diseño escenográfico: Tomás Kipreos</p>
              <p>Diseño marote: Valentina Tapia</p>
              <p>Realización escenográfica: Elisa Modak</p>
              <p>Elenco: Elisa Osorio</p>
            </div>
          )}
        </Col>
      </Row>
      {/* Botón para Reseña */}
      <Row className="mt-4">
        <Col>
          <Button
            onClick={() => setOpenReseña(!openReseña)}
            style={{
              backgroundColor: "#161616",
              color: "white",
              width: "100%",
              textAlign: "left",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            Reseña
          </Button>
          {openReseña && (
            <div
              className="p-3 mt-2"
              style={{
                textAlign: "justify",
                backgroundColor: "#000",
                borderRadius: "5px",
              }}
            >
              <p>
                La muerte de su esposa y compañera de trabajo desencadena en
                Luis, un octogenario relojero, un intenso viaje emocional
                atravesado por la frustración ante un reloj que no logra reparar
                y un exasperante joven aprendiz que intenta averiguar más de él.
                En este monólogo protagonizado por una marioneta de tamaño real,
                veremos una puesta en escena cuyo sonido e imágenes son operados
                en vivo amplificando el mundo interno de Luis, desdibujando los
                límites entre la realidad, el recuerdo y el anhelo del
                protagonista.
              </p>
            </div>
          )}
        </Col>
      </Row>
      {/* Botón para Curriculum */}
      <Row className="mt-4">
        <Col>
          <Button
            onClick={() => setOpenCurriculum(!openCurriculum)}
            style={{
              backgroundColor: "#161616",
              color: "white",
              width: "100%",
              textAlign: "left",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            Curriculum
          </Button>
          {openCurriculum && (
            <div
              className="p-3 mt-2"
              style={{
                textAlign: "justify",
                backgroundColor: "#000",
                borderRadius: "5px",
              }}
            >
              <p>
                2024 Proyecto seleccionado en Programa de residencia artística
                Balmaceda Arte Joven 2024. Temporada de funciones Sala Tessier
              </p>
            </div>
          )}
        </Col>
      </Row>
      {/* Botón para Galería de Fotos */}
      {/* Botón para Galería de Fotos */}
<Row className="mt-4">
  <Col>
    <Button
      onClick={() => setOpenGaleria(!openGaleria)}
      style={{
        backgroundColor: "#161616",
        color: "white",
        width: "100%",
        textAlign: "left",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      Galería de Fotos
    </Button>
    {openGaleria && (
      <div
        className="p-3 mt-2"
        style={{
          textAlign: "justify",
          backgroundColor: "#000",
          borderRadius: "5px",
        }}
      >
        {/* En vez de usar varias columnas, usamos filas individuales */}
        <Row className="mb-4">
          <Col>
            <img
              src={reloj2}
              alt="Foto 1"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }} // Mantiene las proporciones
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <img
              src={reloj4}
              alt="Foto 2"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }} // Mantiene las proporciones
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <img
              src={reloj5}
              alt="Foto 3"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }} // Mantiene las proporciones
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <img
              src={reloj6}
              alt="Foto 4"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }} // Mantiene las proporciones
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <img
              src={reloj7}
              alt="Foto 5"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }} // Mantiene las proporciones
            />
          </Col>
        </Row>
      </div>
    )}
  </Col>
</Row>

    </Container>
  );
};

export default App;
