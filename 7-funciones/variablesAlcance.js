//Alcance de variables en js

let variableGlobal= 5;

//Modificar el valor
variableGlobal = 10;

//definicion de la funcion 

function miFuncion(variableLocal){
    console.log(variableLocal)
    //Las variables globales pueden ser modificadas en las funciones
    variableGlobal = 20;
    console.log(variableGlobal)

    //Pero no se puede redefinir una variable local



    
}


miFuncion(variableGlobal);
console.log(variableGlobal);
