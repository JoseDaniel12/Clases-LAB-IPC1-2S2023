package ipc1.clase5;

import java.io.Serializable;

/**
 *
 * @author josed
 */
public class Usuario implements Serializable {
    public String nombreUsuario;
    public String contrasenia;
    
    public Usuario(String nombreUsuario, String contrasenia) {
        this.nombreUsuario = nombreUsuario;
        this.contrasenia = contrasenia;
    }
}
