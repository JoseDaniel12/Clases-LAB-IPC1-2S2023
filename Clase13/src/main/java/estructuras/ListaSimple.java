package estructuras;

import ipc1.clase13.Usuario;

/**
 *
 * @author josed
 */
public class ListaSimple {
    private NodoListaSimple cabeza;
    private int length = 0;
    
    public int getLength() {
        return length;
    }
    
    public void listarNombres() {
        NodoListaSimple nodoAuxiliar = cabeza;
        while (nodoAuxiliar != null) {
            System.out.print(nodoAuxiliar.getUsuario().nombre + " -> ");
            nodoAuxiliar = nodoAuxiliar.getSiguiente();
        }
        System.out.println("null \n");
    }
    
    public void add(Usuario usuario) {
        NodoListaSimple nuevoNodo = new NodoListaSimple(usuario);
        if (cabeza == null) {
            cabeza = nuevoNodo;
        } else {
            NodoListaSimple nodoAuxiliar = cabeza;
            while (nodoAuxiliar.getSiguiente() != null) {
                nodoAuxiliar = nodoAuxiliar.getSiguiente();
            }
            nodoAuxiliar.setSiguiente(nuevoNodo);
        }
        length++;
    }
    
    public Usuario get(int indice) {
        if (indice < 0 || indice >= length) {
            throw new IllegalArgumentException("Indice fuera de los limites.");
        }
        
        NodoListaSimple nodoAuxiliar = cabeza;
        for (int i = 0; i < indice; i++) {
            nodoAuxiliar = nodoAuxiliar.getSiguiente();
        }
            
        return nodoAuxiliar.getUsuario();
    }
    
    public void delete(Usuario usuario) {
        NodoListaSimple nodoActual = cabeza;
        NodoListaSimple nodoAnterior = null;
        
        while (nodoActual != null && !nodoActual.getUsuario().nombre.equals(usuario.nombre)) {
            nodoAnterior = nodoActual;
            nodoActual = nodoActual.getSiguiente();
        }
        
        // Si no se encontro el nodo a eliminar
        if (nodoActual == null) return;
        
        // Si se encotrno el nodo que se quiere eliminar
        if (nodoAnterior == null) {
            // Si el nodo a eliminar era la cabeza
            cabeza = cabeza.getSiguiente();
        } else {
            // Si el nodo a eliminar era un nodo intermedio
            nodoAnterior.setSiguiente(nodoActual.getSiguiente());
        }
        length--;
    }
}
    
    