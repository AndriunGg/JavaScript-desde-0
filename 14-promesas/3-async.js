// La palabra clave async en JavaScript convierte una función en una función asíncrona
//  y permite que esa función maneje promesas de una manera más sencilla y legible.

// Cuando usas async en una función, esta automáticamente devuelve una promesa 
// y te permite utilizar await dentro de ella para "pausar" la ejecución hasta que una promesa se resuelva o se rechace.

// Cuando defines una función como async, su valor de retorno es siempre una promesa, 
// independientemente de lo que realmente devuelva. Esto hace que sea ideal para trabajar con promesas en código asincrónico.

async function obtenerDatos() {
    return "Datos obtenidos"; // Esta línea en realidad devuelve Promise.resolve("Datos obtenidos")
}

obtenerDatos().then(respuesta => console.log(respuesta)); // Salida: "Datos obtenidos"
