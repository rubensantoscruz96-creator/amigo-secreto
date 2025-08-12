// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres

let amigos = [];

//
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo');
    
    if (nombreAmigo.value === "") {
        alert('Por favor ingresa un nombre');
    } else {
        amigos.push(nombreAmigo);
        limpiarCaja();
        return nombreAmigo;
    }
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}