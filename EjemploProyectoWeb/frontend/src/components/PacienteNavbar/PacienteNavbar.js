import { Link } from 'react-router-dom'
import styles from './PacienteNavbar.module.css'

import { useContext } from 'react'
import { UserContext } from '../../App';

function PacienteNavbar() {
    const usuario = useContext(UserContext);

    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/paciente/verMedicinas"><b>{usuario.nombre}</b></Link>
                </li>
                <li>
                    <Link to="/paciente/verMedicinas">Ver verMedicinas</Link>
                </li>
                <li>
                    <Link to="/login">Salir</Link>
                </li>
            </ul>
        </nav>
    )
}

export default PacienteNavbar;