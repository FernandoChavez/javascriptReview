//Promesas consecutivas
//Añadiendo promesas a una funcion

let usuarios = [{
	id: 1,
	nombre: 'Marcos'
},
{
	id: 2,
	nombre: 'Lena'
	
}];

let telefonos = [{
	id: 1,
	telefono: 12345678
},{
	id: 2,
	telefono: 87654321
}];

const obtenerUsuario = id => {
	//regresa un objeto de tipo promesa
	return new Promise((resolve, reject) => {
		if(usuarios.find(usuario => usuario.id === id)){
			resolve('El usuario existe!');
			//resolve(obtenerTelefono(id));
		}else{
			reject('El usuario no existe');
		}
	});
};

const obtenerTelefono = id => {
	//regresa un objeto de tipo promesa
	return new Promise((resolve, reject) => {
		if(telefonos.find(telefono => telefono.id === id)){
			resolve('El telefono existe!');
		}else{
			reject('El telefono no existe');
		}
	});
};


obtenerUsuario(2)
.then(res => {
	console.log(res);
	obtenerTelefono(2)
	.then(mensaje =>{
		console.log(mensaje);
	})
	.catch(err => {
		console.log(err);
	});
})
.catch(error=>{
	console.error(error);
});