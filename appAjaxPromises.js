const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    
    // pasar la cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // Llamado a AJAX
    const xhr = new XMLHttpRequest();


    // abrir la conexion
    xhr.open('GET', api, true);

    //on load
    xhr.onload = () => {
       if(xhr.status === 200) {
           resolve(JSON.parse(xhr.responseText).results );
       } else {
           reject(Error(xhr.statusText));
       }
    }

    // Opcional (on error)
    xhr.oneror = (error) => reject(error);

    //send
    xhr.send();
});

descargarUsuarios(10)
    .then(
        miembros => imprimirHTML(miembros),
        error => console.error(
            new Error('Hubo un error' +  error)
        )
    );

function imprimirHTML(usuarios){

    let html = '';
    usuarios.forEach(usuario => {
            html += `
                <li>
                    Nombre: ${usuario.name.first} ${usuario.name.last}
                    Pais: ${usuario.nat}
                    Imagen:
                        <img src="${usuario.picture.medium}">
                </li>
            `;
     });

     const contenedorApp = document.querySelector('#app');
     contenedorApp.innerHTML = html;
 }