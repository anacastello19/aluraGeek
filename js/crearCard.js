import { conexionAPI } from "./conexionAPI";
const formulario = document.querySelector("[data-formulario]");

async function crearCard(evento){

    evento.preventDefault();

    const imagen = querySelector("data-imagen").value;
    const nombre = querySelector("data-nombre").value;
    const precio = querySelector("data-precio").value;

    await conexionAPI.enviarCard(imagen, nombre, precio);

    window.location.href='index.html'
}

formulario.addEventListener("submit", evento=> crearCard())