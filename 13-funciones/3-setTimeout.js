// es una función en JavaScript que permite ejecutar una función 
// o un fragmento de código después de un cierto tiempo (en milisegundos).
//  Es útil para realizar tareas de manera diferida o para introducir retrasos en la ejecución de código.

// Sintaxis: setTimeout(funcion, tiempo)

// función: La función que se ejecutará después de que pase el tiempo especificado.
// tiempo: El tiempo de espera en milisegundos antes de que se ejecute la función.


function saludo() {
    console.log('Saludo asincronico')
    
}


setTimeout(saludo,4000);// Esto hara que se ejecute la funcion saludo luego de 4 segundos
//-------------------------------------------------------------------------------------------------

//La funcion setTimeout recibe la funcion como argumento, pero tambien podemos definir la funcion ahi 



setTimeout(function(){console.log('Saludo asincrono2')}, 5000);


//Tambien podemos usar funcione flecha

setTimeout( () => console.log('Saludo asincrono3'),6000);


