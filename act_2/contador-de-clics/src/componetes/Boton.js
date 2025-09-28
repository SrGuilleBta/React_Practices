import React from 'react';
import '../stylesheet/boton.css';

class Boton extends React.Component{
  render(){
    return(
      <button
      className={ this.props.esBotonDeClic ? "botonClic" : "botonReiniciar" }
      onClick={this.props.manejarClic}>
      {this.props.texto}
      </button>
    );
  }
}
/*

function Boton({ texto, esBotonDeClic , manejarClic}){
  return(
    <button
    className={ esBotonDeClic ? "botonClic" : "botonReiniciar" }
    onClick={manejarClic}>
    {texto}
    </button>
  );
}*/


export default Boton;