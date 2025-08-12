// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres

let amigos = [];

//Implementa una función para agregar amigos
function agregarAmigo() {
    //Capturar el valor del campo de entrada:
    let nombreAmigo = document.getElementById('amigo');
    
    //Validar la entrada
    if (nombreAmigo.value === '') {
        alert('Por favor ingresa un nombre');
    } 
    //Actualizar el array de amigos
    else {
        amigos.push(nombreAmigo.value);
        //Limpiar el campo de entrada
        limpiarCaja();
        //Función actualizar lista de amigos
        listaDeAmigos();
        return nombreAmigo;
    }
    
}

//función limpiar el campo de entrada
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//Implementa una función para actualizar la lista de amigos
function listaDeAmigos() {
//Obtener el elemento de la lista
    let listaHTML = document.getElementById('listaAmigos');
//Limpiar la lista existente
    listaHTML.innerHTML = '';
//Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaHTML.appendChild(li);
    }
}