// Las funciones callback son funciones que se pasan como argumentos a otras funciones 
// y se ejecutan después de que una acción específica haya ocurrido en esa función.

// ¿Cómo funcionan las funciones callback?
// 1-Definir la función callback: Puedes definir la función de antemano o en línea.
// 2-Pasarla como argumento: La función se pasa como argumento a otra función.
// 3-Ejecutar la función callback: La función "padre" (la que recibe la callback) la ejecutará en algún punto.


//ejemplo 

function despedirse (){
    console.log('Adios')
}



function saludar (nombre, callback){
    console.log ("Hola, " + nombre);

    callback();

}

// saludar recibe dos parámetros: nombre y callback.
// saludar ejecuta su código principal (console.log("Hola, " + nombre)) y luego llama a callback().
// Al ejecutar saludar("Ana", despedirse);, se imprime primero "Hola, Ana" y después "Adiós".



saludar('ana', despedirse);
// -------------------------------------------------------------------


//otro ejemplo

function imprimir(mensaje) {
    console.log(mensaje);
}


function suma(a,b, callback){
    let res = a+b;

    callback (`Resultado: ${res}`)

}


suma(1,3,imprimir);

// suma recibe 3 parametros: a,b,callback.
// suma realiza la operacion a+b y se la asigna a una variable "res" y luego llama a callback y le pasa res como argumento
// al ejecutar suma(a,b,imprimir) se pasan los argumentos para la suma y luego se pasa el resultado con imprimir 
