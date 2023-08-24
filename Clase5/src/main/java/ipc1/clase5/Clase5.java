package ipc1.clase5;

import gui.LoginJFrame;

/**
 *
 * @author josed
 */
public class Clase5 {

    public static void main(String[] args) {
        AppState.deserializar();
        
        if (AppState.usuarios.isEmpty()) {
            Profesor profesorPrueba = new Profesor("jose", "123");
            AppState.usuarios.push(profesorPrueba);
            
            profesorPrueba.agregarCurso("mate", 5);
            
            Estudiante estudiantePrueba = new Estudiante("daniel", "123");
            AppState.usuarios.push(estudiantePrueba);
            
        }
        
        LoginJFrame loginJframe = new LoginJFrame();
    }
}
