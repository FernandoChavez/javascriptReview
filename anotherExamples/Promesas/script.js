let x = 10;

const p = new Promise((resolve, reject)=>{
	if(x == 11){
		//el resultado es positivo
		resolve('La variable es igual a 10');
	}else{
		//Es negativo o hubo algun problema
		reject('La variable no es igual a 10');
	}
});

p.then(res =>{
	console.log('Success: ' + res);
})
.catch(error=>{
	console.log('Error: ' + error);
});




