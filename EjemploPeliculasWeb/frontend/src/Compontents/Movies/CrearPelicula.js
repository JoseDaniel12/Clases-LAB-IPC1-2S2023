import styles from './CrearPelicula.module.css'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function CrearPelicula() {
    const navigate = useNavigate();

    const [file, setFile] = useState(null);

    const handleFileChange = e => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0])
    }

    const handleSubmitForm = async e => {
        e.preventDefault();
        const movie = new FormData(e.target);

        const response = await fetch('http://localhost:4000/movies/crearPelicula', {
            method: 'POST',
            headers: {
                'enctype': 'multipart/form-data',
            },
            body: movie
        })

        if (response.status === 200) {
            navigate('/verPeliculas')
        } else {
            alert("error al crear pelicula")
        }
    }

    return (
        <div className={`container ${styles.containers}`}>
            <form onSubmit={handleSubmitForm} encType="multipart/form-data">
                <div className={`row mb-4`}>
                    <div className="col-12 text-center">
                        <h1>Crear Pelicula</h1>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="form-group col-6">
                        <label forhtml="nombre" className="form-label">Nombre Pelicula:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            className="form-control"
                            placeholder="Nombre de la pelicula"
                        ></input>
                    </div>

                    <div className="form-group col-6">
                        <label forhtml="genero" className="form-label">Genero Pelicula:</label>
                        <select id="genero" name="genero" className="form-select">
                            <option value="Accion">Accion</option>
                            <option value="Ciencia Ficcion">Ciencia Ficcion</option>
                            <option value="Comedia">Comedia</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="form-group col-6">
                        <label forhtml="minutos" className="form-label">Cantidad de Minutos:</label>
                        <input type="number" id="minutos" name="minutos" className="form-control" placeholder="Duración en minutos"></input>
                    </div>

                    <div className="form-group col-6">
                        <label forhtml="aptitudMenores" className="form-label">Audiencia:</label> <br />
                        <input type="checkbox" id="aptitudMenores" name="aptitud" value="Apto para menores" className="form-check-input me-2"></input>
                        <label forhtml="aptitudMenores">Apto para menores</label><br></br>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="form-group col-12">
                        <label forhtml="descripcion" className="form-label">Descripción:</label>
                        <textarea id="descripcion" name="descripcion" className={`form-control ${styles.descripcion}`} placeholder="Descripción de la pelicula"></textarea>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="form-group col-6">
                        <label forhtml="fechaInicio" className="form-label">Fecha de Inicio:</label>
                        <input type="date" id="fechaInicio" name="fechaInicio" className="form-control"></input>
                    </div>

                    <div className="form-group col-6">
                        <label forhtml="fechaFin" className="form-label">Fecha de Fin:</label>
                        <input type="date" id="fechaFin" name="fechaFin" className="form-control"></input>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="form-group col-6">
                        <input type="file" name="imagen" accept='image/*' onChange={handleFileChange} className="form-control"></input>
                    </div>
                    <div className="form-group col-6">
                        {
                            file ? (
                                <img src={URL.createObjectURL(file)} className={styles.imagen}></img>
                            ) : (
                                <img className={styles.imagen}></img>
                            )
                        }

                    </div>
                </div>

                <div className={`row mb-3`}>
                    <div className="col-12 d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">Crear Pelicula</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CrearPelicula;