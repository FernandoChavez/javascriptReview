// metodos o funciones en un objeto

const persona = {
    nombre: 'Juan',
    trabajo: 'Desarrollador Web',
    edad: 500,
    musicaRock: true,
    mostrarInformacion(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es de ${this.edad}`)
    }

    
}

persona.mostrarInformacion();