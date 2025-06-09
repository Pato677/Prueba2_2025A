import React from "react";

import { Link } from "react-router-dom";

const Curso = (props) => {
    const { id, nombre, nivel , duracion , oneliminar} = props;
  
    return(
     <div>
        <h2>Curso: {nombre}</h2>
        <p>ID: {id}</p>
        <p>Nivel: {nivel}</p>
        <p>Duración: {duracion} horas</p>
        <button onClick={() => oneliminar(id)}>Eliminar</button>
        <hr />
     </div>


    )
  
}
