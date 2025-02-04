// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* let amigosLista = []
function borrarInput() {
    document.getElementById("amigo").value = ''
} */

/* function agregarAmigo() {
    let inputHTML = document.getElementById("amigo")
    let value = inputHTML.value

    if (value == '') {
        alert('ingrese un valor')
    } else {
        amigosLista.push(value)
        borrarInput()
        console.log(amigosLista);
        mostrarArray()
    }
} */

/* 

function agregarAmigo() {
    let inputHTML = document.getElementById('amigo').value
    console.log(inputHTML);

    if (inputHTML == '') {
        alert('ingrese un valor')
    } else {
        amigosLista.push(inputHTML)
        console.log(amigosLista);
    }
    return
}





function mostrarArray() {
    for (let i = 0; i < amigosLista.length; i++) {
        console.log(amigosLista[i]);
        let ulHTML = document.getElementById("listaAmigos")
        ulHTML.innerHTML += `<li> ${amigosLista.pop()} </li>`
    }
    return
}










for (let lista of amigosLista) {


}



function sortearAmigo() {
    if (amigosLista.length === 0) {
        alert('ningun nombre en la lista')
    }
    else { alert('ganaste') }
} */
















/* 
let ulHTML = document.getElementById("listaAmigos")
ulHTML.innerHTML += `<li> ${amigosLista} </li>` */



let amigosLista = []

function agregarAmigo(){
    let inputAmigo = document.getElementById('amigo');
    let nombre = inputAmigo.value.trim()

    if(nombre === ''){
        alert('agregar un valor')
        return
    }
    amigosLista.push(nombre)

    inputAmigo.value = ''
    console.log(amigosLista);
    actualizarLista()
    
}


function actualizarLista(){
    let listaHTML = document.getElementById('listaAmigos')
    listaHTML.innerHTML = ''

    for(let i = 0; i < amigosLista.length; i++){
        listaHTML.innerHTML += `<li>${amigosLista[i]}</li>`
    }
}



function sortearAmigo(){
    let resultado = document.getElementById("resultado")

    if(amigosLista.length === 0){
        alert('no pusiste ningun nombre en la lista de amigos');
        return;
    }
    let numeroAleatorio = Math.floor(Math.random() * amigosLista.length);
    let amigoSorteado = amigosLista[numeroAleatorio];
    resultado.innerHTML = `<li> ¡El ganador es: <strong>${amigoSorteado}</strong>! </li>`;
}