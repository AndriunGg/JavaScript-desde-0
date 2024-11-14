// es una palabra clave en JavaScript que solo puede usarse dentro de funciones declaradas con async. 
// Su función es "pausar" la ejecución de la función async hasta que una promesa se resuelva, 
// permitiendo que el valor resultante se asigne a una variable como si fuera una operación sincrónica. 

// Esto hace que el código sea más legible y evita el uso excesivo de .then().

// await literalmente suspende la ejecución de la función hasta que se establezca la promesa, 
// y luego la reanuda con el resultado de la promesa. 
// Eso no cuesta ningún recurso de CPU, porque el motor de JavaScript puede
// hacer otros trabajos mientras tanto: ejecutar otros scripts, 
// manejar eventos, etc.

// Es simplemente una sintaxis más elegante para tener el resultado de una promesa que promise.then, es más fácil de leer y de escribir.


async function funcionConPromesayAwait() {
    let miPromesa= new Promise (resolver => {
        resolver('Funcion con await');
    });
    
    console.log (await miPromesa);
    //Estamos usando await para mandar a llamar nuestra promesa, esperamos el resultado y se imprime
}


funcionConPromesayAwait();