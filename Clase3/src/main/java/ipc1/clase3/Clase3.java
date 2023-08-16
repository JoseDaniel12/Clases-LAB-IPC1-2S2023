package ipc1.clase3;

/**
 *
 * @author josed
 */
public class Clase3 {
    
    public static void imprimirNumeros(int numero) {
        for (int i = 0; i < numero; i++) {
            System.out.println(i);
        }
    }

    public static void main(String[] args) {
        imprimirNumeros(8);
    }
}
