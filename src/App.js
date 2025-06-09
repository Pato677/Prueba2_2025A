
import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import ListaCursos from './Componentes/ListaCursos';
import CrearCurso from './Componentes/CrearCurso';
import React from 'react';

const cursos = [
 { id: 1, nombre: "Introducción a React", nivel: "Básico", duracion: 20 },
 { id: 2, nombre: "Algoritmos Avanzados", nivel: "Avanzado", duracion: 60 }
]


function App() {
  const [listacursos, setListacursos] = React.useState(cursos);

  const agregarCurso = (curso) => {
    setListacursos([...listacursos, curso]);
  };

  const eliminarCurso = (id) => {
    setListacursos(listacursos.filter(curso => curso.id !== id));
  };
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      
      <Route path="/listar" element={<ListaCursos listacursos={listacursos} oneliminar={eliminarCurso} />}/>
      <Route path="/crearcurso" element={<CrearCurso crearcurso={agregarCurso} />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
