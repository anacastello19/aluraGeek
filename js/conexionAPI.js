async function listarProductos() {
    try {
        const conexion = await fetch("http://localhost:3001/productos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        return []; // Devuelve un arreglo vacío en caso de error
    }
}

async function enviarCard(imagen, precio, nombre) {
    try {
        const conexion = await fetch("http://localhost:3001/productos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                imagen: imagen,
                nombre: nombre,
                precio: precio
            })
        });

        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error("Error al enviar el producto:", error);
        return { error: "No se pudo agregar el producto" }; // Devuelve un objeto con un mensaje de error
    }
}

export const conexionAPI = {
    listarProductos,
    enviarCard
};

// async function listarProductos(){
//     const conexion = await fetch("http://localhost:3001/productos",{
//         method:"GET",
//         headers:{
//         "Content-type":"application/json",
//         "Permissions-Policy": "geolocation=(self `http://localhost:3001/productos`)"
//         }
//     });

//     const conexionConvertida= await conexion.json();

//     // console.log(conexionConvertida)
//     return conexionConvertida;
// }

// async function enviarCard(imagen, precio, nombre){
//     const conexion= await fetch("http://localhost:3001/productos",{
//         method: "POST",
//         headers:{"Content-type": "'application/json: charset=utf-8'"},
//         body:JSON.stringify({
//             imagen:imagen,
//             nombre:nombre,
//             precio:precio
//         })
//     });
//     const conexionConvertida= await conexion.json();

//     return conexionConvertida;
// }

// export const conexionAPI={
//     listarProductos, enviarCard
// }
//listarProductos();