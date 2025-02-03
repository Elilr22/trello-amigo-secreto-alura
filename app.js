// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosLista = []
function borrarInput() {
    let inputHTML = document.getElementById("amigo").value = ''
}

function agregarAmigo() {
    let inputHTML = document.getElementById("amigo")
    let ulHTML = document.getElementById("listaAmigos")
    let value = inputHTML.value

    if (value == '') {
        alert('ingrese un valor')
    } else {
        amigosLista.push(value)
        console.log(value);
        borrarInput()
        console.log(amigosLista);
        ulHTML.innerHTML += `<li> ${amigosLista.pop()} </li>`
        
    }


}
/* 
let ulHTML = document.getElementById("listaAmigos")
ulHTML.innerHTML += `<li> ${amigosLista} </li>` */
