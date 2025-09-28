import React from 'react';
import './App.css';
import Boton from './componetes/Boton';
import Contador from './componetes/contador';
import logowuwa from './img/Wuthering_Waves_logo.svg.png';
import { useState } from 'react';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      numClics: 0
    };
  }
  manejarClic = () => {
        this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
    }

    reiniciarContador = () => {
        this.setState({ numClics: 0 });
    }

  render(){
    return (
      <div className='App'>
        <div className='logo-contenedor'>
          <img
          className='logo'
          src={logowuwa}
          alt='Logo de wuthering waves' />
        </div>

        <div className='contenedor-contador'>
          <Contador numClics={this.state.numClics}
          />


          <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={this.manejarClic} />

          <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );
    }
}



/*

function App() {
  
  const [numClics,setNumClics]= useState(0);

  const manejarClic =() => {
    setNumClics(numClics +1);
  };

  const reiniciarContador=() => {
    setNumClics(0);
  };
  


  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
        className='logo'
        src={logowuwa}
        alt='Logo de wuthering waves' />
      </div>

      <div className='contenedor-contador'>
        <Contador numClics={numClics}
        />


        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />

        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}
*/
export default App;
