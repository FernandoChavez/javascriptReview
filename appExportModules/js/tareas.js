
export default class Tarea {
    //Cada vez que se crea una clase, se declara el constructor obligatoriamente
    // para pasar los argumentos
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar(){
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}
