const personas = [
    {nombre: 'Juan', edad: 23, aprendiendo: 'Javascript'},
    {nombre: 'Pablo', edad: 18, aprendiendo: 'PHP'},
    {nombre: 'Alejandra', edad: 21, aprendiendo: 'AdobeXD'},
    {nombre: 'Karen', edad: 38, aprendiendo: 'Python'},
    {nombre: 'Miguel', edad: 35, aprendiendo: 'ReactJS'},
]

console.log(personas);

//mayores de 28 años
const mayores = personas.filter(persona => {
    return persona.edad > 28;
});

console.log(mayores);


// Que aprende Alejandra y su edad
const alejandra = personas.find(persona => {
    return persona.nombre === 'Alejandra';
});

 console.log('Alejandra esta aprendiendo: '+ alejandra.aprendiendo);



 let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
 }, 0 );

 console.log(total / personas.length);