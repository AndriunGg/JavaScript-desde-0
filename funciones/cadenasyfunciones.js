//Cadenas y funciones en js
//Las cadenas son inmutables (No se puede mofdificar su valor)
//Se comportan como valores primitivos

function cambiarValor (parametro){

    parametro= 'Adios'
}



//llamamos a la funcion 
let argumentos = 'Hola'

console.log(`Antes funcion: ${argumentos}`);

cambiarValor(argumentos);

console.log(`Despues funcion: ${argumentos}`)

