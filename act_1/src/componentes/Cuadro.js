import React from "react"; 
import '../stylesheets/cuadro.css';


class Cuadro extends React.Component{
  render(){
    return(
      <div className="contenedor-C">
        <img className="imagen-C"
        src={require(`../img/img-${this.props.imagen}.png`)}
        alt={`Foto de ${this.props.nombre}`} />
        <div className="contenedor-texto">
          <p className="nombre-personaje"><strong>{this.props.nombre}</strong></p>
          <p className="elemento-personaje">{this.props.elemento}</p>
          <p className="texto-personaje">{this.props.texto}</p>
        </div>
      
      </div>
    );
  }
}


/*
function Cuadro(props){
  return(
    <div className="contenedor-C">
      <img className="imagen-C"
      src={require(`../img/img-${props.imagen}.png`)}
      alt="Foto de Agusta" />
      <div className="contenedor-texto">
        <p className="nombre-personaje"><strong>{props.nombre}</strong></p>
        <p className="elemento-personaje">{props.elemento}</p>
        <p className="texto-personaje">{props.texto}</p>
      </div>
      
    </div>
  );
}*/




export default Cuadro; //exportancion por defecto o nombrada