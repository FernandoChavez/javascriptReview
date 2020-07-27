//Otra cualidad importante de async await es la manera en que manejan errores

const  fetch = require('node-fetch')

async function getNombre(username){
	const url = `https://api.github.com/users/${username}`
	const respuesta = await fetch(url)
	const json = await respuesta.json()
	
	if(json.status !== 200)
		throw Error('El usuario no existe')

		return json.name
}



//Intentaremos buscar un usuario que no existe
getNombre('yonoexistoengit')
.then((nombre) => console.log(nombre))
.catch((e) => console.log(`Error: ${e}`))

