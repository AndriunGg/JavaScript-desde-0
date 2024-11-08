// Ejemplo básico de await
// Imaginemos una función que simula una operación asincrónica (como una solicitud a una API) que toma 2 segundos en completarse:

function operacionAsincrona() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Operación completada"), 2000);
    });
}

async function ejecutarOperacion() {
    console.log("Inicio de la operación...");
    const resultado = await operacionAsincrona(); // Espera hasta que se resuelva
    console.log(resultado); // "Operación completada"
    console.log("Fin de la operación...");
}

ejecutarOperacion();

// Aquí, await operacionAsincrona() pausa la ejecución de
//  ejecutarOperacion hasta que operacionAsincrona se resuelva. 
//  Solo entonces resultado obtiene el valor "Operación completada".