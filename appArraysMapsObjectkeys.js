// Arreglo y .map

const carrito = ['producto 1', 'Producto 2', 'Producto 3'];

//console.log(carrito);



// Array

/*
const appContenedor = document.querySelector('#app');

let html = '';
carrito.forEach(producto => {
    html += `<li>${producto}</li>`;
})

appContenedor.innerHTML = html;
*/





//.map conserva el arreglo original y devuelve uno nuevo

/*
 const carrito2 = carrito.map(producto => {
    return 'El producto es ' + producto;
});

console.log(carrito2);

*/


const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador web',
    edad: 500 
}

//En vez de lo siguiente
/*
const {nombre} = persona;
console.log(nombre);
*/

//Usar el object key

console.log(Object.keys(persona));
