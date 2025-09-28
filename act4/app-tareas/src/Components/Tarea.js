import React from "react";
import '../stylesheets/Tarea.css';
import {AiOutlineCloseSquare} from 'react-icons/ai'


function Tarea({id,texto, completado, completarTarea, eliminarTarea}) {
  return(
    <div className={completado ? 'tarea-contenedor completada': 'tarea-contenedor'} >
      <div className="tarea-texto"
      onClick= {() => completarTarea(id)}>
        {texto}
      </div>

      
      <div className="tarea-contendor-iconos"
      onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseSquare className="tarea-icono"/>
      </div>
      
    </div>
  );
}


export default Tarea