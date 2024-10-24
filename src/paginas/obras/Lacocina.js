import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import cocina1 from "../../assets/fotosCocina/lacocina1.jpg"; // Ruta de tu imagen
import cocina2 from "../../assets/fotosCocina/lacocina2.jpg"; // Ruta de tu imagen
import cocina3 from "../../assets/fotosCocina/lacocina3.jpg"; // Ruta de tu imagen
import cocina4 from "../../assets/fotosCocina/lacocina4.jpg"; // Ruta de tu imagen

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
          <h1>La Cocina</h1>
          <h5>2023</h5>
          <p>Danza Teatro</p>
          <p>Obra para 2 bailarines y un actor.</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <img
            src={cocina4}
            alt="Frente a usted está"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p style={{ textAlign: "justify" }}>
            “La Cocina”, es una obra de danza-teatro con una duración aproximada
            de 50 minutos, protagonizada por tres intérpretes en escena.
            Inspirada en el trabajo de Pablo Maurette, especialmente en su
            análisis del deseo sexual según Lucrecio, la obra explora la
            necesidad de los amantes de penetrar o fundirse en el cuerpo del
            otro, y la constante frustración que surge al enfrentarse a la
            imposibilidad de traspasar los límites físicos que los separan. Esta
            exploración desprende la angustia que acompaña la aspiración no
            resuelta y el conflicto interno que nos aqueja de forma individual
            como colectiva. La obra plantea la pregunta: ¿Cómo se devela la
            angustia en el cuerpo de los amantes? Desde las disciplinas de la
            danza y el teatro, la obra busca estudiar la manifestación de lo
            táctil en la escena y cómo dicha experiencia sensorial puede
            trasladarse a otros sentidos, en particular el visual y auditivo. A
            través de ello, se busca forjar una nueva dimensión en el lenguaje
            de movimiento, creando así un canal expresivo que ilustre las
            complejidades de las relaciones humanas, especialmente del amor.
          </p>
          <p>Duración 50 min</p>
          <p>Público +16</p>
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
              <p>Dirección: Sofía Riveros Córdova</p>
              <p>Producción: Acto Cero</p>
              <p>Asistencia de Dirección: Carla Jiménez</p>
              <p>
                Interpretación: Belén Vargas Gabriela Guerra Ignacio Peralta
              </p>
              <p>
                Investigaciones de Movimiento: Belén Vargas - Delfina Leonor -
                Pascal Shuck
              </p>
              <p>Música Original: Juan Aylwin Vicente Larroulet José Puga</p>
              <p>Diseño y realización: Arte Ciento Once</p>
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
                Siguiendo la historia de una pareja decidida a preservar su
                amor, la trama se desenvuelve con la metáfora de un cocinero que
                los mantiene cautivos. Este cautiverio simboliza el amor
                obsesivo que los mantiene presos de sí mismos, desafiando las
                adversidades y su propia estabilidad emocional.
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
                2023 Enero Estreno en Espacio La Higuera Enero Festival La
                Cosecha (BAJ) Abril V Festival de Danza del Teatro Azares
              </p>
            </div>
          )}
        </Col>
      </Row>
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
        {/* Cambiado a filas individuales para que las imágenes queden una debajo de la otra */}
        <Row className="mb-4">
          <Col>
            <img
              src={cocina1}
              alt="Foto 1"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }} // Mantiene las proporciones
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <img
              src={cocina2}
              alt="Foto 2"
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
