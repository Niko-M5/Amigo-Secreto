
let amigos = [];

function agregarAmigo() {
    const texto = document.getElementById("amigo"); 
    const nombre = texto.value.trim(); 
   
    if (nombre === "") { 
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) { 
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    texto.value = ""; 
}


function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li"); 
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}


function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Debe haber al menos 3 nombres para realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    const amigoSeleccionado = amigos[indiceAleatorio]; 
    const resultado = document.getElementById("resultado"); 
    resultado.innerHTML = `<li> El amigo secreto es: ${amigoSeleccionado}</li>`; 
}


