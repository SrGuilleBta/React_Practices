import React from 'react';
import './App.css';
import Cuadro from './componentes/Cuadro.js';

class App extends React.Component{
  render(){
    return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Top 3 dps en Wuthering Waves</h1>
      <Cuadro 
        nombre='Agusta'
        imagen='p1'
        elemento='Electro'
        texto='Augusta in Wuthering Waves is a 5 Stars Electro character who wields a Broadblade as their weapon type. Ephor of Septimont. The undying sun eternally ablaze, and a banner under which defeat does not exist. She comes. She sees. She conquers. With blade held high, she awaits the next challenger or the fate that claims it cannot be defied.'      
      />
      <Cuadro 
        nombre='Cartethyia'
        imagen='p2'
        elemento='Aero'
        texto='Cartethyia in Wuthering Waves is a 5 Stars Aero character who wields a Sword as their weapon type. Cartethyia, the wandering knight who travels across Rinascita. Formerly known as the Blessed Maiden, the vessel of Divinity, and the Queen of Gale and Tide, she went by the name Fleurdelys. Now, she is simply a free and unfettered wandering knight.'      
      />
      <Cuadro 
        nombre='Zani'
        imagen='p3'
        elemento='Espectro'
        texto='Zani in Wuthering Waves is a 5 Stars Spectro character who wields a Gauntlets as their weapon type. A member of Averardo Vaults security team and holder of "Best Employee" for longer than she cares to count. She has made plenty of plans for her free time, but for now, her biggest mission is simple: clocking out on time.'      
      />
      </div>
    </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Top 3 dps en Wuthering Waves</h1>
      <Cuadro 
        nombre='Agusta'
        imagen='p1'
        elemento='Electro'
        texto='Augusta in Wuthering Waves is a 5 Stars Electro character who wields a Broadblade as their weapon type. Ephor of Septimont. The undying sun eternally ablaze, and a banner under which defeat does not exist. She comes. She sees. She conquers. With blade held high, she awaits the next challenger or the fate that claims it cannot be defied.'      
      />
      <Cuadro 
        nombre='Cartethyia'
        imagen='p2'
        elemento='Aero'
        texto='Cartethyia in Wuthering Waves is a 5 Stars Aero character who wields a Sword as their weapon type. Cartethyia, the wandering knight who travels across Rinascita. Formerly known as the Blessed Maiden, the vessel of Divinity, and the Queen of Gale and Tide, she went by the name Fleurdelys. Now, she is simply a free and unfettered wandering knight.'      
      />
      <Cuadro 
        nombre='Zani'
        imagen='p3'
        elemento='Espectro'
        texto='Zani in Wuthering Waves is a 5 Stars Spectro character who wields a Gauntlets as their weapon type. A member of Averardo Vaults security team and holder of "Best Employee" for longer than she cares to count. She has made plenty of plans for her free time, but for now, her biggest mission is simple: clocking out on time.'      
      />
      </div>
    </div>
  );
}
*/
export default App;
