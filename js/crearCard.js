import { index } from ".";
const formulario = document.querySelector("[data-formulario]");

async function crearCard(evento){

    evento.preventDefault();

    const imagen = querySelector("data-imagen").value;
    const nombre = querySelector("data-nombre").value;
    const precio = querySelector("data-precio").value;

    try{
        await index.enviarCard(imagen, nombre, precio);
        window.location.href='index.html'        
    }catch(e){
        alert(e)
    }

}

formulario.addEventListener("submit", evento=> crearCard());