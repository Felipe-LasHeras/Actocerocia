import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import mujeres1 from "../../assets/fotosMujeres/mujeres1.jpg"; // Ruta de tu imagen
import mujeres2 from "../../assets/fotosMujeres/mujeres2.jpg"; // Ruta de tu imagen
import mujeres4 from "../../assets/fotosMujeres/mujeres4.png"; // Ruta de tu imagen
import mujeres5 from "../../assets/fotosMujeres/mujeres5.png"; // Ruta de tu imagen

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
          <h1>Las Mujeres De Afuera</h1>
          <h5>2021</h5>
          <p>Montaje teatral</p>
          <p>Obra para seis intérpretes y dos tramoyas.</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <img
            src={mujeres4}
            alt="Frente a usted está"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p style={{ textAlign: "justify" }}>
            Las Mujeres de Afuera es una obra teatral en cuyo proceso de
            creación, la antropología convocó a las demás disciplinas - teatro,
            danza y música - para indagar las múltiples dimensiones del fenómeno
            carcelario, dando pie a una creación escénica que tematiza la cárcel
            trascendiendo sus muros y situándose en las familias directas de los
            privados de libertad. Con el montaje teatral “Las Mujeres de
            Afuera”, Acto Cero prueba materiales distintos y despliega su
            potencial multidisciplinar en una escena en la que los objetos y los
            cuerpos se funden con la realidad y la ficción de quienes componen
            esta numerosa familia.
          </p>
          <p>Duración 70 minutos</p>
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
              <p>Dirección: Carla Jiménez</p>
              <p>Asistencia de dirección: Sofía Riveros</p>
              <p>Producción: Fernanda Morales</p>

              <p>Dramaturgia: Xabier Usabiaga y Florencia Vila</p>

              <p>Diseño y composición sonora: Vicente Larroulet</p>
              <p>
                Realización escenográfica: Consuelo Contreras, Arte Ciento Once
              </p>
              <p>
                Elenco: Sofía Croxatto, Valentina López, Agustín Sanhueza, Sofía
                Fajardo, Elisa Osorio, Valentina Ruz
              </p>
              <p>Tramoyas: Alexis Restrepo y Elisa Modak</p>
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
                Han pasado varios años. Como cada día, Magdalena sacude el polvo
                mientras cocina, ordena el espacio compartido en esta casa tan
                llena de gente. Tatiana entra, Manuel se pasea, Inés aguarda e
                Isabel vigila este Reino. Juana no se atreve aún a tocar la
                puerta, sabe que su única posibilidad es sembrar conflicto. Hoy
                el finao sale de la cárcel. La prole ha estado esperando
                impaciente este día. Espectantes, algo incómodos, cada quien
                hace lo que puede. El retorno del ex convicto invade esta casa
                de anhelos y miedos a punto de hundirla, pero aún queda un breve
                espacio de tiempo y una propuesta encima de la mesa. Apretados
                de espacio y dinero, emerge la posibilidad de un sueño que, con
                amor y con odio, empuja a la familia Durán a mirar su
                experiencia cotidiana de encierro.
              </p>
            </div>
          )}
        </Col>
      </Row>
      {/* Botón para Curriculum */}
      {/* Botón para Galería de Fotos */}
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
                2021 Primer semestre. Apertura de proceso Teatro Aleph, La
                Cisterna Segundo semestre. Estreno en Centro Cultural Espacio
                Matta, La Granja. 2022 Funciones Teatro U Mayor 2023 Fondart
                Circulación Nacional. Regiones de itinerancia: Metropolitana,
                O'Higgins y Valparaíso
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
                    src={mujeres1}
                    alt="Foto 1"
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }} // Mantiene las proporciones
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <img
                    src={mujeres2}
                    alt="Foto 2"
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }} // Mantiene las proporciones
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <img
                    src={mujeres5}
                    alt="Foto 3"
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
