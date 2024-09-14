import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import tiempo2 from "../../assets/fotosTiempo/tiempo2.jpg"; // Ruta de tu imagen
import tiempo3 from "../../assets/fotosTiempo/tiempo3.jpg"; // Ruta de tu imagen

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
          <h1>El tiempo caminó</h1>
          <h5>2023</h5>
          <p>Videoclip</p>
          <p>Videodanza para dos intérpretes, un proyector y un gran estacionamiento vacío</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <img
            src={tiempo2}
            alt="Frente a usted está"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p style={{ textAlign: "justify" }}>
          Videoclip registrado en un estacionamiento de Centro Perdido, Santiago, Chile.
Explora en la vivencia de dos cuerpos atravesados por historias y experiencias conjuntas a lo largo del tiempo. La coreografía dialoga a la manera de contrapunto del video proyectado en la medida en que la pareja decide entrar a esos recuerdos o bien escapar para crear otros.

          </p>
          <p>Duración: 3’14</p>
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
              <p>Cámara y montaje 
Camila Suazo
</p>
              <p>Producción: Acto Cero</p>
              <p>Interpretación 
Natalia Fica y Pascal Schuck
</p>
              <p>
              Coreografía 
Sofía Riveros y Carla Jimenez

              </p>
              <p>
              Música 
y Vicente

              </p>
              <p>Idea original de Acto Cero</p>
              
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
              <Row>
                <Col>
                  <img
                    src={tiempo3}
                    alt="Foto 1"
                    className="img-fluid col-12"
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
