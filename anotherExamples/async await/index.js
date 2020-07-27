//Fetch es una funcion que nos permite hacer llamadas http
const  fetch = require('node-fetch')

function getNombre(username){
	const url = `https://api.github.com/users/${username}`
	//La funcion fetch retorna una promesa
	//Esa promesa la recibimos como "respuesta" y lo parseamos para transformarlo en json
	//Una vez parseado, el metodo retorna una promesa y una vez tomado ese json, imprimimos el json
	fetch(url)
		.then(respuesta => respuesta.json())
		.then(json => {
			console.log(json.name)
		})
}

getNombre('FernandoChavez')