// Una promesa es un objeto que representa la finalización o el fracaso de una operación asíncrona y su resultado

// Cuando creas una promesa, esta puede estar en uno de tres estados:

// Pendiente (pending): La promesa aún no ha finalizado.
// Cumplida (fulfilled): La operación asíncrona se completó con éxito y se obtuvo un valor.
// Rechazada (rejected): Hubo un error o problema, y la operación falló.


//Las promesas se crean utilizando el constructor Promise y reciben una función que tiene dos parámetros, resolve y reject.
// Estos parámetros son funciones para definir si la promesa fue resuelta exitosamente o si falló.


// sintaxis: let promesa = new Promise((resolve, reject) => {});

//La funcion que recibe promise puede ser una funcion flecha o funcion normal 

//Los parametros de la funcion que mandamos a promise son funciones callback, estas funciones JS las define por default
//Asi que no tenemos que definirlas nosotros. (Comento esto porque me confundi en esta parte).


//Una promesa es como si se creara una clase y luego se creara un objeto de esa clase.
//Primero se declara la promesa y luego se usa

let promesa = new Promise((resolver,rechazar)=>{// Se mandara a llamar la funcion resolver si sale todo bien y rechazar si sale mal
    let expresion = false;
    if (expresion){
        resolver('Todo salio correcto')//Se pasa como parametro lo que queremos que reciba la promesa cuando sea true
    }else{
        rechazar('Se produjo un error')
    }
});

//Usar una promesa
// Para usar una promesa tenemos los metodos .then y .catch
// Si usamos .then podemos pasar las funciones que reciben la respuesta de correcto y rechazado (resolved,rejected)
//o si deseamos podemos pasar solamente la funcion que recibe la respuesta correcta (resolved) 

//Si usamos .catch solo recibiremos el error si la promesa fue rechazada (rejected).

//Es decir si queremos podemos hacer promesa.then(funcionaprobada).catch(funcionrechazada) y tendremos los valores dependiendo el resultado de la promesa
//O podemos usar el .then y no usamos el catch

promesa.then(valor => console.log(valor),error => console.log(error));// Aca pasamos las 2 funciones como argumentos y imprimimos el valor que reciban

promesa.catch(error => console.log(error));//solo mostramos cuando falla

promesa.then(valor => console.log(valor)).catch(error => console.log(error));//lo mismo que .then pero separado

