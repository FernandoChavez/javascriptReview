//Fetch es una funcion que nos permite hacer llamadas http
const  fetch = require('node-fetch')

//A la funcion que queremos implementar el async await para que sea asincrona, debemos de ponerle el keword "async" desde el principio
async function getNombre(username){
	const url = `https://api.github.com/users/${username}`
	//Fetch retorna una promesa y con await esperamos hasta que dicha promesa sea retornada, asigno el valor a la variable "respuesta"
	const respuesta = await fetch(url)
	//Indicamos con el await que esperemos hasta que se termine de parsear el json y asi asignando el valor a la variable "json"
	const json = await respuesta.json()
		//.then(respuesta => respuesta.json())
		//.then(json => {
		//	console.log(json.name)
		//})
		//console.log(json);
		return json.name
}

//Lo siguiente no funcionaria debido a que el metodo retorna una promesa, asi que se debe de usar sus respectivos keywords
//const nombre = getNombre('FernandoChavez')


//Como se retorna una promesa, entonces
getNombre('FernandoChavez')
.then((nombre) => console.log(nombre))

