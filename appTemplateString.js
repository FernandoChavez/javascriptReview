//TemplateString

const nombre = 'Juan';
const trabajo = 'Desarrollador Web';

//concatenar javascript
console.log('Nombre: ' + nombre  + ', Trabajo: ' + trabajo);
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);


//concatenar con multiples linesas

const contenedorApp = document.querySelector('#app');
/*

let html = '<ul>'+
                '<li> Nombre:' + nombre  + '</li>' + 
                '<li> Trabajo:' + trabajo  + '</li>' + 
            '</ul>';

contenedorApp.innerHTML = html;
*/

let html = `<ul>
                <li> Nombre: ${nombre} </li>
                <li> Trabajo: ${trabajo} </li> 
            </ul>
            `;

contenedorApp.innerHTML = html;