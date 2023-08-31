package ipc1.clase6;

import java.util.ArrayList;

/**
 *
 * @author josed
 */
public class Clase6 {    
    public static void main(String[] args) {
        Profesor p = new Profesor();
        Curso c = new Curso();
        Curso c2 = new Curso();
        c2.nombre = "Ciencias";
        
        p.cursos.add(c);
        p.cursos.add(c2);
        
        ProfesorJFrame pJFrame = new ProfesorJFrame(p);
        
        
    }
}
