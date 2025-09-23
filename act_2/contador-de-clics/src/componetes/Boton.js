import React from 'react';
import '../stylesheet/boton.css';

function Boton({ texto, esBotonDeClic , manejarClic}){
  return(
    <button
    className={ esBotonDeClic ? "botonClic" : "botonReiniciar" }
    onClick={manejarClic}>
    {texto}
    </button>
  );
}


export default Boton;