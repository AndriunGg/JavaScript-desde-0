//Esta clausula se usa para lanzar un error de manera intencional.

//Permite crear un error personalizado, enviando un mensaje, numero , booleano, o una instancia de error

//este error puede ser capturado  posteriormente con try..catch

// sintaxis throw expresion;<-- expresion es el valor que se lanzara , puede ser cualquier valor de los mencionados anteriormente
'use strict'

function verificarEdad(edad) {
    if (edad < 18) {
        throw "Edad no permitida para acceder"; // Lanza un error si la edad es menor a 18
    }
    return "Acceso permitido";
}

try {
    console.log(verificarEdad(16)); // Intenta ejecutar la función
} catch (error) {
    console.log("Error:", error); // Maneja el error lanzado
}



//Puedes personalizar los errores aún más usando distintos tipos de errores como TypeError, ReferenceError, o SyntaxError

// sintaxis: throw new tipoError("Mi error")
// new tipoError= cualquier tipo de error mencionado anteriormente 
//("Mi error")= Mensaje que lanzara el error

// Esto hace que nuestro error tenga un tipo y un mensaje personalizado


function procesarDatos(dato) {
    if (typeof dato !== "string") {
        throw new TypeError("El dato debe ser una cadena de texto");
    }
    // Resto del procesamiento
    return dato.toUpperCase();
}

try {
    console.log(procesarDatos(123)); // Intenta procesar un número en lugar de una cadena
} catch (error) {
    console.log("Tipo de error:", error.name); // "TypeError"
    console.log("Descripción:", error.message); // "El dato debe ser una cadena de texto"
}
