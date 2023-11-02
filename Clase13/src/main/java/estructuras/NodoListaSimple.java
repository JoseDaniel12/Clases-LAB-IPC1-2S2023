package estructuras;

import ipc1.clase13.Usuario;

/**
 *
 * @author josed
 */
public class NodoListaSimple {
    private Usuario usuario;
    private NodoListaSimple siguiente;
    
    public NodoListaSimple(Usuario usuario) {
        this.usuario = usuario;
    }
    
    public NodoListaSimple(Usuario usuario, NodoListaSimple siguiente) {
        this.usuario = usuario;
        this.siguiente = siguiente;
    }
    
    public Usuario getUsuario() {
        return usuario;
    }
    
    public NodoListaSimple getSiguiente() {
        return siguiente;
    }
    
    public void setSiguiente(NodoListaSimple siguiente) {
        this.siguiente = siguiente;
    }
}
