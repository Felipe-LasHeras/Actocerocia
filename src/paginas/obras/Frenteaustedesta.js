import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import frente3 from "../../assets/fotosFrente/frente3.jpg"; // Ruta de tu imagen

const App = () => {
  // Estados para manejar los dropdowns
  const [openFichaArtistica, setOpenFichaArtistica] = useState(false);
  const [openReseña, setOpenReseña] = useState(false);
  const [openCurriculum, setOpenCurriculum] = useState(false);

  return (
    <Container className="mt-5" style={{ maxWidth: '800px' }}> {/* Controlar el ancho máximo */}
      <Row>
        <Col style={{ textAlign: 'left' }}> {/* Alineación izquierda */}
          <h1>Frente a usted está</h1>
          <h5>2022</h5>
          <p>Concierto/performance</p>
          <p>Obra para cuarteto de cuerdas, cuarteto de público y sus respectivos 8 instrumentos</p>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <img 
            src={frente3} 
            alt="Frente a usted está" 
            className="img-fluid" 
            style={{ width: '100%' }} 
          />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <p style={{ textAlign: 'justify' }}>
          “”Frente a usted está: ___” aborda el encuentro del público con intérpretes musicales en su rutina de estudio cotidiano. La obra hace un recorrido desde la toma del instrumento y su afinación hasta la repetición obsesiva de un pasaje que no funciona. Los materiales sonoros son sencillos y acotados solamente al rol del arco y la mano derecha en la producción de sonido (todo es con cuerda al aire) generando un puente de fácil acceso para que el público vivencie el funcionamiento primario de un instrumento de cuerda frotada. El cuarteto viene a ser un amplificador de ese estudio personal, transitando desde un caos disperso hasta la total homorritmia. Los movimientos físicos de los intérpretes responsables de generar sonido se abordan separadamente del sonido mismo por lo que en ocasiones solo vemos la mímica del cuarteto tocando una melodía al mismo tiempo (con un silencio total) explotando también todas sus posibilidades coreográficas desde un pensamiento musical (canon, imitaciones, armonías, etc)

            {/* Completa este texto con el contenido que va antes de los dropdowns */}
          </p>
          <p>
            Duración: 30 minutos
          </p>
          <p> Publico: +16</p>
        </Col>
      </Row>

      {/* Botón para Ficha Artística */}
      <Row className="mt-4">
        <Col>
          <Button 
            onClick={() => setOpenFichaArtistica(!openFichaArtistica)} 
            style={{ backgroundColor: '#161616', color: 'white', width: '100%', textAlign: 'left', borderRadius: '5px', padding: '10px' }}
          >
            Ficha Artística
          </Button>
          {openFichaArtistica && (
            <div className="p-3 mt-2" style={{ textAlign: 'justify', backgroundColor: '#000', borderRadius: '5px' }}>
              <p>Dirección: Vicente Larroulet Philippi</p>
              <p>Producción: Acto Cero</p>
              <p>Asistencia de Dirección: Carla Jiménez</p>
              <p>Iluminación y coreografía: Solia Riveros</p>
              <p>Interpretación: Constanza Yáñez, Abigail Sepúlveda...</p>
              <p>Composición: Vicente Larroulet</p>
            </div>
          )}
        </Col>
      </Row>

      {/* Botón para Reseña */}
      <Row className="mt-4">
        <Col>
          <Button 
            onClick={() => setOpenReseña(!openReseña)} 
            style={{ backgroundColor: '#161616', color: 'white', width: '100%', textAlign: 'left', borderRadius: '5px', padding: '10px' }}
          >
            Reseña
          </Button>
          {openReseña && (
            <div className="p-3 mt-2" style={{ textAlign: 'justify', backgroundColor: '#000', borderRadius: '5px' }}>
              <p>
              El público vivencia un encuentro directo con intérpretes musicales en su momento íntimo de estudio personal. Los músicos del cuarteto de cuerda le invitan a sentarse frente a ellos, les entregan un instrumento y hacen juegos de mímicas tipo espejo. Los materiales usados son lo más sencillos posibles y centrados en el rol del arco en la producción de sonido, intentando hacer un puente de fácil acceso para que el público viva como se toca un instrumento, así a medida que el cuarteto comienza a hacer su música y coreografías, los cuatro espectadores manejan una base común desde donde conectar.
                {/* Completa el contenido de la reseña */}
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
            style={{ backgroundColor: '#161616', color: 'white', width: '100%', textAlign: 'left', borderRadius: '5px', padding: '10px' }}
          >
            Curriculum
          </Button>
          {openCurriculum && (
            <div className="p-3 mt-2" style={{ textAlign: 'justify', backgroundColor: '#000', borderRadius: '5px' }}>
              <p>
              Fondo Circulación Nacional: Gira por Valdivia, Frutillar, Puerto Montt y Castro.
                {/* Completa el contenido del curriculum */}
              </p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
