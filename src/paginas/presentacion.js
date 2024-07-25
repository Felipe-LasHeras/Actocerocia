import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import miembros from "../assets/fotosMiembros/foto acto cero (1).jpg"
import "../styles/presentacion.css";


function Presentacion() {
  return (
    <div className="imagenequipo">
     <h2>Acto cero</h2>
     <div >
      <img src={miembros} alt="" />
     </div>

    </div>
  );

}

export default Presentacion;