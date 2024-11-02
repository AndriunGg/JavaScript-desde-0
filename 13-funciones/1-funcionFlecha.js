/*son una forma compacta de escribir funciones. 
Son útiles para simplificar el código, especialmente en funciones cortas, 
y tienen algunas diferencias clave con las funciones tradicionales*/

//Son funciones anonimas, son funciones que se asignan a una variable (Costante)

//No se aplica el concepto de hoisting

/*
la sintaxis es:  const nombre = (parametros) => {}

    se declaran dentro de la variable nombre, solamente pasamos los parametros, hacemos el simbolo de flecha
    y si la funcion tiene mas de 1 linea se pueden usar los corchetes, si es de 1 linea se puede declarar sin corchetes


    *Si la funcion tiene solo un parametro se pueden omitir los parentesis al rededor del parametro
*/


//Funcion tradicional 

function suma(a, b) {
    
    return a + b;
}




console.log(suma(1,2));


//funcion flecha equivalente

const suma1 = (a,b) => a+b;

console.log(suma1(2,4));






