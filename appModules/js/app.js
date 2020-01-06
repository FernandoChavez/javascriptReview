// Está importando (No declarando) la variable nombreTarea de
//./tareas.js
//import { nombreTarea } from './tareas.js'

//cuando Agregas el export default, ya no requieres las llaves
//Se usa el property "module" en el html para que funcione los modulos
// pero tambien se necesita que se corrar en un servidor local
import {crearTarea, tareaCompletada} from './tareas.js';
import nombreTarea from './tareas.js';

console.log(nombreTarea);


const tarea1 = crearTarea('Pasear al perro', 'Media');

console.log(tarea1);

tareaCompletada();