import React from "react"; 
import '../stylesheets/cuadro.css';


function Cuadro(props){
  return(
    <div className="contenedor-C">
      <img className="imagen-C"
      src={require(`../img/img-${props.imagen}.png`)}
      alt="Foto de Agusta"/>
      <div className="contenedor-texto">
        <p className="nombre-personaje"><strong>{props.nombre}</strong></p>
        <p className="elemento-personaje">{props.elemento}</p>
        <p className="texto-personaje">{props.texto}</p>
      </div>
      
    </div>
  );
}




export default Cuadro; //exportancion por defecto o nombrada