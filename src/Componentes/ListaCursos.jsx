import React from "react";
import { useNavigate } from "react-router-dom";


const ListaCursos = (props) => {
    const { listacursos, oneliminar } = props;
    const navigate = useNavigate();
   
    const handlercrear = () => {
        navigate("/crearcurso");
    }

    
    return (
        <div>
        <h1>Lista de Cursos</h1>
         <button onClick={handlercrear}>crear</button>
        {listacursos.map((curso) => (
            <div key={curso.id}>
            <h2>Curso: {curso.nombre}</h2>
            <p>ID: {curso.id}</p>
            <p>Nivel: {curso.nivel}</p>
            <p>Duración: {curso.duracion} horas</p>
            <button onClick={() => oneliminar(curso.id)}>Eliminar</button>
           
            </div>
        ))}
        </div>
    );
}
export default ListaCursos;