let  amigos = [];

console.table(amigos);

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
console.log (nombreAmigo)

    if (nombreAmigo == "") {
        alert ("Por favor, inserte un nombre");
    } else {
        amigos.push(nombreAmigo);
        console.log (amigos)
    }
    limparCaja()
    actualizarLista()
}

function limparCaja(){
    document.getElementById("amigo").value = ""
}


function actualizarLista() {
   const lista = document.getElementById("listaAmigos");
    lista.innerHTML=""
   amigos.forEach(nombre => {
    const li = document.createElement("li");
    li.textContent= nombre
    lista.appendChild(li);
   });
}
   

function sortearAmigo() {
    if (amigos.length == 0) {
        document.getElementById("resultado").innerHTML = "Inserta un nombre para sortear";
        return; 
    } 
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[numeroAleatorio]
        document.getElementById("resultado").innerHTML = `El amigo secreto es ${amigoSorteado}`;
    }


