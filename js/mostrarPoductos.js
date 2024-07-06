import { conexionAPI } from "./conexionAPI";
const lista = document.querySelector("[data-lista]")

function crearCard(imagen, nombre, precio){
    const producto=document.createElement("div");
    producto.className="car";
    producto.innerHTML=`<img class="imgProduct" src="${imagen}" alt="">
                    <h6 class="titleH6">${nombre}</h6>
                    <div class="titleContainer">
                        <p class="titleP">${precio}</p>
                        <button class ="basura"><i class="bi bi-trash"></i></button>                   
                    </div>`
    return producto;
}

async function listarProductos(){
    const listAPI =conexionAPI.listarProductos()

    listAPI.array.forEach(producto => {lista.appendChild(crearCard(producto.imagen, producto.nombre, producto.precio))
        
    });
}
listarProductos()