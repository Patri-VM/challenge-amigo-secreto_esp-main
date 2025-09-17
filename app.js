// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombresAmigos =[];

function agregarAmigo() {

    // obtener el valor del input
    let nombreAmigo = document.getElementById("amigo").value;

    // validar que no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // guardar en el array
    listaNombresAmigos.push(nombreAmigo);

    // mostrar en label
    let lista = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.textContent = nombreAmigo;
    lista.appendChild(li);
    
    // limpiar imput
    limpiarCaja();

}

function limpiarCaja() {
    document.querySelector('#amigo').value = ''; 
}
