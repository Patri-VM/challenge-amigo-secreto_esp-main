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
    
    // actualizar lista
    actualizarAmigos();
    // limpiar imput
    limpiarCaja();

}

function actualizarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let i=0;i<listaNombresAmigos.length;i++){
        let li = document.createElement("li");
        li.textContent = listaNombresAmigos[i];
        lista.appendChild(li);
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = ''; 
}

function sortearAmigo() {
    //Comprobar si la lista esta vacia
    if(listaNombresAmigos.length === 0){
        alert("No ha ingresado ningun amigo a la lista.");
    }else{
        let posicionAmigo = Math.floor(Math.random()*listaNombresAmigos.length);
        let amigoSorteado = listaNombresAmigos[posicionAmigo];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        let li = document.createElement("li");
        li.textContent = "El amigo secreto es: "+amigoSorteado;
        resultado.appendChild(li);
        
        document.getElementById("listaAmigos").innerHTML = "";
    }
}