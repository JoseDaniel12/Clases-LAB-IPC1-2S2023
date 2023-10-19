import { useEffect, useState } from 'react';
import styles from './CargarMedicina.module.css'
import { useNavigate } from 'react-router-dom';

function CargarMedicina() {
    const navigate = useNavigate();
    const [meidicinas, setMedicinas] = useState([]);

    // Campos para crear una medicina nueva
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState(0);
    const [cantDisponible, setCantDisponible] = useState(0);

    const handleCargarMedicamento = async e => {
        e.preventDefault();

        const URL = 'http://localhost:4000/enfermera/cargarMedicina';
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre,
                descripcion,
                precio,
                cantDisponible
            })
        })
        const data = await response.json();

        if (response.status === 400) {
            return alert(data.error);
        }

        setMedicinas(data.medicinas);
    }

    const getMedicinas = async () => {
        const response = await fetch('http://localhost:4000/paciente/stockMedicinas');
        const data = await response.json();
        setMedicinas(data.medicinas);
    }

    useEffect(() => {
        getMedicinas();
    }, [])

    const eliminarMedicina = async (idMedicina) => {
        const URL = `http://localhost:4000/enfermera/eliminarMedicina/${idMedicina}`;
        const response = await fetch(URL, {
            method: 'DELETE'
        })
        const data = await response.json();
        setMedicinas(data.medicinas);
    }


    return (
        <div className={styles.contenedorRaiz}>
            <form onSubmit={handleCargarMedicamento} className={styles.contenedorCarga}>
                <div>
                    <label htmlFor="nombre" className={styles.label}>Nombre: </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="descripcion" className={styles.label}>Descripción: </label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        rows="5"
                        cols="50"
                        value={descripcion}
                        onChange={e => setDescripcion(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="precio" className={styles.label}>Precio:</label>
                    <input
                        type="number"
                        id="precio"
                        name="precio"
                        value={precio}
                        onChange={e => setPrecio(e.target.value)}
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor="cantDisponible" className={styles.label}>Cantidad:</label>
                    <input
                        type="number"
                        id="cantDisponible"
                        name="cantDisponible"
                        value={cantDisponible}
                        onChange={e => setCantDisponible(e.target.value)}
                    >
                    </input>
                </div>
                <div>
                    <button type="submit" className={`${styles.boton} ${styles.cargar}`}> Cargar Medicamento</button>
                </div>
            </form >

            <table className={styles.tablaMedicinas}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        meidicinas.map(medicina => (
                            <tr key={medicina.idMedicina}>
                                <td>{medicina.nombre}</td>
                                <td>{medicina.precio}</td>
                                <td>{medicina.cantDisponible}</td>
                                <td>
                                    <button
                                        className={`${styles.boton} ${styles.modificar}`}
                                        onClick={() => navigate('/enfermera/editarMedicamento', {
                                            state: { medicina }
                                        })}>Modificar</button>
                                    <button
                                        className={`${styles.boton} ${styles.eliminar}`}
                                        onClick={() => eliminarMedicina(medicina.idMedicina)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CargarMedicina;