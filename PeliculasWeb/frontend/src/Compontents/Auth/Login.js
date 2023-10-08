import styles from './Login.module.css'

const ingresar = () => {

}

function Login() {
    return (
        <form className={`row g-3 ${styles.formContainer}`}>
            <div class="form-group">
                <label for="usuario" className="form-label">Correo:</label>
                <input type="text" id="usuario" className="form-control" placeholder="correo@gmail.com"></input>
            </div>
            <div class="form-group">
                <label for="contrasenia" className="form-label">Contraseña:</label>
                <input type="password" id="contrasenia" className="form-control" placeholder="*****"></input>
            </div>
            <div class="form-group">
                <button type="submit" className={`btn btn-primary ${styles.btnIngresar}`} onClicked={ingresar}> Ingresar </button>
            </div>
        </form>
    );
}

export default Login;