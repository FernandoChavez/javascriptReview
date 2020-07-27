//Si queremos eliminar las promesas y depender 100% de async await

const  fetch = require('node-fetch')

async function getNombre(username){
	const url = `https://api.github.com/users/${username}`
	const respuesta = await fetch(url)
	const json = await respuesta.json()
	
	if(respuesta.status !== 200)
		throw Error('El usuario no existe')

	return json.name
}

//Con el try y catch podemos recibir el error, sin pensar en la asincronia de las promesas
(async function(){
	try {
		const nombre = await getNombre('FernandoChavez')
		console.log(nombre)
	} catch(e){
		console.log(`Error: ${e}`)
	}
})()
