//Creando una funcion

//function declaration

function saludar(nombre){
    console.log("Bienvenido " + nombre);
}

saludar("Juan");

//function Expressions
const cliente = function(nombreCliente){
    console.log("Mostrando datos del cliente " + nombreCliente);
}

cliente('Juan');