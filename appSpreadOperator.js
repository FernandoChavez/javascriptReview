// Spread Operator ..
// Unas de sus funciones es que nos permita combina 2 arreglso diferentes

let lenguajes = ['JavaScript', 'PHP', 'Python'];
let frameworks = ['ReactJS', 'Laravel', 'DJango'];

let combinacion = [...lenguajes,...frameworks];

console.log(combinacion);

// Con el siguiente podras obtener el ultimo valor del arreglo pero
// tambien lenguajes estara volteado
//let[ultimo] = lenguajes.reverse();

//Pero con el spread operator, obtenemos el ultimo sin necesidad de voltearlo
// Basicamente podremos obtener el clon de un arreglo
let[ultimo] = [...lenguajes].reverse();


// on spread

console.log(lenguajes);
console.log(ultimo);


//suma
function suma(a,b,c){
    console.log(a+b+c);
}

const numeros = [1,2,3];

suma(...numeros);