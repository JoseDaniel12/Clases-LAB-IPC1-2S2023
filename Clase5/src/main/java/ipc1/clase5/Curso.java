package ipc1.clase5;

import java.io.Serializable;
import java.util.LinkedList;

/**
 *
 * @author josed
 */
public class Curso implements Serializable {
    public String nombre;
    public int creditos;
    
    Profesor profesor;
    LinkedList<Estudiante> estudiantes = new LinkedList();
    
    public Curso(String nombre, int creditos, Profesor profesor) {
        this.nombre = nombre;
        this.creditos = creditos;
        this.profesor = profesor;
    }
 }
