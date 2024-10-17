//funciones recursivas

//Vamos a imprimir 3,2,1

function funcionRecursiva(numero){
    if (numero == 1){ //Este es el caso base (Donde se acaba la funcion)
        console.log(numero);

    }else{
        console.log(numero);
        funcionRecursiva(numero-1);
    }

}

let numeroBase= 3;

funcionRecursiva(numeroBase);