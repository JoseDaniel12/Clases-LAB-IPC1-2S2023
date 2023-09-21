package ipc1.clase8;

import java.util.Observable;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JLabel;

/**
 *
 * @author josed
 */
public class Temporizador implements Runnable {

    AtomicBoolean isPaused = new AtomicBoolean(false);
    private int horas, minutos, segundos;
    JLabel label;
    
    public Temporizador(JLabel label) {
        this.label = label;
    }
    
    public String toString(int numero) {
        if (numero < 10) {
            return '0' + Integer.toString(numero);
        }
        return Integer.toString(numero);
    }
    
    @Override
    public void run() {
        while (true) {
            while (this.isPaused.get()) {}
            
            try {
                Thread.sleep(1000);
            } catch (InterruptedException ex) {
                Logger.getLogger(Temporizador.class.getName()).log(Level.SEVERE, null, ex);
            }
            
            segundos++;
            if (segundos == 60) {
                minutos++;
                segundos = 0;
            }
            
            if (minutos == 60) {
                horas++;
                minutos = 0;
            }
            
            label.setText(toString(horas) + ":" + toString(minutos)+ ":" + toString(segundos));
        }
    }
    
    public void pausa() {
        isPaused.set(true);
    }

    public void continuar() {
        isPaused.set(false);
    }

}
 