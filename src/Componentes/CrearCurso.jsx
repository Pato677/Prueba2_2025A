import React from "react";
import { useNavigate } from "react-router-dom";

const CrearCurso = ({crearcurso}) => {
    const navigate = useNavigate();


    const [curso , setCurso] = React.useState({
        id: "",
        nombre: "",
        nivel: "",
        duracion: ""
    });
     const [errores, setErrores] = React.useState({});
 
    const validar = () => {
        const nuevosErrores = {};
        if (!curso.id || !/^\d+$/.test(curso.id)) {
            nuevosErrores.id = "ID es obligatorio y debe ser un número entero.";
        }
        if (!curso.nombre || curso.nombre.length < 5) {
            nuevosErrores.nombre = "Nombre es obligatorio y mínimo 5 caracteres.";
        }
        if (!curso.nivel || !["Básico", "Intermedio", "Avanzado"].includes(curso.nivel)) {
            nuevosErrores.nivel = "Nivel es obligatorio y debe ser válido.";
        }
        if (
            !curso.duracion ||
            !/^\d+$/.test(curso.duracion) ||
            Number(curso.duracion) < 10 ||
            Number(curso.duracion) > 100
        ) {
            nuevosErrores.duracion = "Duración es obligatoria, entre 10 y 100 horas.";
        }
        return nuevosErrores;
    };

    const handlerChange = (e) => {
        const { name, value } = e.target;
        setCurso({
            ...curso,
            [name]: value
        });
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        const erroresVal = validar();
        if (Object.keys(erroresVal).length > 0) {
            setErrores(erroresVal);
            return;
        }
        crearcurso(curso);
        setCurso({
            id: "",
            nombre: "",
            nivel: "",
            duracion: ""
        });
        setErrores({});
    };

    const handlervolver = () => {
        navigate("/listar");
    }

    return (
        <form onSubmit={handlerSubmit}>
           
            <div>
                <label>ID:</label>
                <input
                    type="text"
                    name="id"
                    value={curso.id}
                    onChange={handlerChange}
                    onBlur={(e) => {
                        const nuevosErrores = validar();
                        if (nuevosErrores.id) {
                            setErrores(prev => ({ ...prev, id: nuevosErrores.id }));
                        } else {
                            setErrores(prev => {
                                const { id, ...rest } = prev;
                                return rest;
                            });
                        }
                    }}
                    onFocus={() => {
                        setErrores(prev => ({ ...prev, id: errores.id }));
                    }}
                    required
                />
                {errores.id && <span style={{color: "red"}}>{errores.id}</span>}
            </div>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={curso.nombre}
                    onChange={handlerChange}
                    onBlur={(e) => {
                        const nuevosErrores = validar();
                        if (nuevosErrores.nombre) {
                            setErrores(prev => ({ ...prev, nombre: nuevosErrores.nombre }));
                        } else {
                            setErrores(prev => {
                                const { nombre, ...rest } = prev;
                                return rest;
                            });
                        }
                    }}
                    onFocus={() => {
                        setErrores(prev => ({ ...prev, nombre: errores.nombre }));
                    }}
                    required
                />
                {errores.nombre && <span style={{color: "red"}}>{errores.nombre}</span>}
            </div>
            <div>
                <label>Nivel:</label>
                <select
                    name="nivel"
                    value={curso.nivel}
                    onChange={handlerChange}
                    onBlur={(e) => {
                        const nuevosErrores = validar();
                        if (nuevosErrores.nivel) {
                            setErrores(prev => ({ ...prev, nivel: nuevosErrores.nivel }));
                        } else {
                            setErrores(prev => {
                                const { nivel, ...rest } = prev;
                                return rest;
                            });
                        }
                    }}
                    onFocus={() => {
                        setErrores(prev => ({ ...prev, nivel: errores.nivel }));
                    }}
                    required
                >
                    <option value="">Seleccione...</option>
                    <option value="Básico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                </select>
                {errores.nivel && <span style={{color: "red"}}>{errores.nivel}</span>}
            </div>
            <div>
                <label>Duración (horas):</label>
                <input
                    type="text"
                    name="duracion"
                    value={curso.duracion}
                    onChange={handlerChange}
                    onBlur={(e) => {
                        const nuevosErrores = validar();
                        if (nuevosErrores.duracion) {
                            setErrores(prev => ({ ...prev, duracion: nuevosErrores.duracion }));
                        } else {
                            setErrores(prev => {
                                const { duracion, ...rest } = prev;
                                return rest;
                            });
                        }
                    }}
                    onFocus={() => {
                        setErrores(prev => ({ ...prev, duracion: errores.duracion }));
                    }}
                    required
                />
                {errores.duracion && <span style={{color: "red"}}>{errores.duracion}</span>}
            </div>
            <button
                type="submit"
                disabled={Object.keys(errores).length > 0} onClick={handlervolver}
            >
                Guardar
            </button>
        </form>
    );

}

export default CrearCurso;