// Escribir clases

class Tarea {
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

// crear los objetos
let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
let tarea2 = new Tarea('APreparar cafe', 'Alta');
let tarea3 = new Tarea('Pasear al perro', 'MMedia');
let tarea4 = new Tarea('ApConocer a mis suegros', 'Baja');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());