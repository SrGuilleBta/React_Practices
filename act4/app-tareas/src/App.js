import logo from './logo.svg';
import './App.css';
import ListaDeTareas from './Components/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img 
        src={logo}
        className='logo'
        alt='Logo de React'/>
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
