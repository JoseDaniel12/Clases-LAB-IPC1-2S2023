import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <nav className={`navbar bg-dark navbar-expand-lg border-bottom border-body ${styles.navbar}`} data-bs-theme="dark">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/crearPelicula" className="nav-link active">Crear Pelicula</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/verPeliculas" className="nav-link active">Ver Peliculas</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;