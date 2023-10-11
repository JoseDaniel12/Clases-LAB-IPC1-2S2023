import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListaPeliculas() {
    const [peliculas, setPeliculas] = useState([]);

    const getMovies = async () => {
        const response = await fetch('http://localhost:4000/movies/peliculas');
        const data = await response.json();
        setPeliculas(data.peliculas);
    }

    useEffect(() => {
        getMovies();
    }, [])

    const handleEliminar = async (id) => {
        const response = await fetch(`http://localhost:4000/movies/borrarPelicula/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        })

        console.log(response.status)

        if (response.status === 200) {
            setPeliculas(peliculas => peliculas.filter(p => p.id !== id))
        }

    }

    return (
        <div className="container-lg">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {peliculas.map(pelicula => (
                    <div className="col" key={pelicula.id}>
                        <div className="card mb-2" >
                            {
                                pelicula.imagen ? <img src={`data:image/png;base64,${pelicula.imagen}`} className="card-img-top"></img> : <div></div>
                            }


                            <div className="card-body">
                                <h5 className="card-title">{pelicula.nombre}</h5>
                                <p className="card-text">{pelicula.descripcion}</p>

                                <div className="d-flex gap-3 mb-1">
                                    <div>
                                        <label><b>Genero:</b></label>
                                        <p className="card-text">{pelicula.genero}</p>
                                    </div>
                                    <div>
                                        <label><b>Cant. Minutos:</b></label>
                                        <p className="card-text">{pelicula.minutos}</p>
                                    </div>
                                    <div>
                                        <label><b>Audiencia:</b></label>
                                        <p className="card-text">Apto para niños</p>
                                    </div>
                                </div>

                                <div className="d-flex gap-3 mb-1">
                                    <div>
                                        <label><b>Fecha Inicio:</b></label>
                                        <p className="card-text">{pelicula.fechaInicio}</p>
                                    </div>
                                    <div>
                                        <label><b>Fecha Fin:</b></label>
                                        <p className="card-text">{pelicula.fechaFin}</p>
                                    </div>
                                </div>

                                <div className="d-flex gap-2 mt-3">
                                    <Link className="btn btn-warning">Editar</Link>
                                    <button className="btn btn-danger" onClick={() => handleEliminar(pelicula.id)}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListaPeliculas;