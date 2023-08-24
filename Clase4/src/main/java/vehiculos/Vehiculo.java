package vehiculos;

/**
 *
 * @author josed
 */
public abstract class Vehiculo {
    public String color = "negro";
    
    public void cambiarColor(String color) {
        this.color = color;
    }
    
    public abstract void arrancar();
}


