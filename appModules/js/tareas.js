
//exportar constante
//export const nombreTarea = 'Pasear al perro';
const nombreTarea = 'Pasear al perro';


//Esto es para que no requiere las llaves en appModules.js
export default nombreTarea;


// exportar una funcion
export const crearTarea = (tarea, urgencia) => {
    return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
}

export const tareaCompletada =() => {
    console.log('La tarea se completó');
}

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

class ComprasPendientes extends Tarea{
    constructor (nombre, prioridad, cantidad){
        super(nombre, prioridad)
        this.cantidad = cantidad;
    }

    //reescribirmos la clase mostrar

    mostrar(){

        /*
        return `${this.nombre} tiene una prioridad de ${this. prioridad}
        y la cantidad de ${this.cantidad}`;
        */
       super.mostrar();
       console.log( `y la cantidad de ${this.cantidad}`)
    }

    hola(){
        return 'hola';
    }
}

// crear los objetos
let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
let tarea2 = new Tarea('Preparar cafe', 'Alta');
let tarea3 = new Tarea('Pasear al perro', 'Media');
let tarea4 = new Tarea('Conocer a mis suegros', 'Baja');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());


//Compras

let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
//console.log(compra1.mostrar());
compra1.mostrar();
console.log(compra1.hola());