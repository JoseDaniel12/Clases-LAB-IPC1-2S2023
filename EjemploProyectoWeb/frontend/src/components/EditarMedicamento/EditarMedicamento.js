import styles from './EditarMedicamento.module.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditarMedicamento() {
    const navigate = useNavigate();
    const location = useLocation();
    const medicina = location.state.medicina;

    // Campos para crear una medicina nueva
    const [nombre, setNombre] = useState(medicina.nombre);
    const [descripcion, setDescripcion] = useState(medicina.descripcion);
    const [precio, setPrecio] = useState(medicina.precio);
    const [cantDisponible, setCantDisponible] = useState(medicina.cantDisponible);

    const handleModificarMedicamento = async e => {
        e.preventDefault();

        const URL = 'http://localhost:4000/enfermera/actualizarMedicina';
        const response = await fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idMedicina: medicina.idMedicina,
                nombre,
                descripcion,
                precio,
                cantDisponible
            })
        })
        const data = await response.json();

        if (response.status === 200) {
            return navigate('/enfermera/cargarMedicina');
        }

        alert(data.error);

    }

    return (
        <form onSubmit={handleModificarMedicamento} className={styles.contenedor}>
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
                <button className={`${styles.boton} ${styles.regresar}`} onClick={() => navigate('/enfermera/cargarMedicina')}>Regresar</button>
                <button type="submit" className={`${styles.boton} ${styles.modificar}`}> Modificar Medicamento</button>
            </div>
        </form >
    )
}

export default EditarMedicamento;