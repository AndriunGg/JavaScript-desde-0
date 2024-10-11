//Paso por referencia en JS
//objetos (array) se pasan por referencia

function cambiarValor (parametro){

    parametro[0]=20;

}


//llamamos a la funcion

let arreglo = [10];

console.log(`Antes funcion: ${arreglo[0]}`);

cambiarValor (arreglo);

console.log(`Despues funcion ${arreglo[0]}`)

/*Aca podemos ver que a los objetos como los arreglos solamente 
se le hace una referencia, es decir que el parametro dentro de 
esa funcion copia es la referencia y por lo tanto la puede modificar.

Es decir:

que las variables de los objetos solo almacenan referencias, no valores.

*/

