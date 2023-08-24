package ipc1.clase5;

import java.io.Serializable;
import java.util.LinkedList;

/**
 *
 * @author josed
 */
public class Profesor extends Usuario implements Serializable {
    public LinkedList<Curso> cursos = new LinkedList();

    public Profesor(String nombreUsuario, String contrasenia) {
        super(nombreUsuario, contrasenia);
    }
    
    public void agregarCurso(String nombre, int creditos) {
        Curso curso = new Curso(nombre, creditos, this);
        this.cursos.push(curso);
    }
}
