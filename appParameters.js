//parametros por default en las funciones

const actividad = function (nombre = 'Walter white', actividad = 'Enseñar Quimica'){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad('Juan', 'Aprende javascript');
actividad('Pedro', 'Creando un sitio web');
actividad('Antonio');
actividad();