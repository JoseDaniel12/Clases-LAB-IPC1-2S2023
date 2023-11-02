package ipc1.clase13;

import estructuras.ListaSimple;

/**
 *
 * @author josed
 */
public class Clase13 {

    public static void main(String[] args) {
        Usuario u1 = new Usuario("jose");
        Usuario u2 = new Usuario("daniel");
        
        ListaSimple miLista = new ListaSimple();
        miLista.add(u1);
        miLista.add(u2);
            
        miLista.listarNombres();
        miLista.delete(u2);
        miLista.listarNombres();
        System.out.println(miLista.getLength());
    }
}
