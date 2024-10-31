//Es una estructura que se utiliza para manejar errores, permitiendo que el programa 
//siga ejecutandose en lugar de detenerse como normalmente lo hace

//Esto lo utlizaremos en bloques de codigo que puedan lanzar un error

/*Esta estructura la podemos dividir en 2 partes,

la parte del try{}: es este bloque colocaremos el codigo que puede lanzar error

La parte del catch(error){}: primero capturamos el error que pueda generarse en la parte del try, y dentro del bloque 
se define que hacer en dado caso se aparezca error

se puede añadir el bloque finally, Este bloque se ejecutara si o si, no importa si hubo error(Podemos usarlo para mensajes finales)



cuando se produce un error en try JS crea un objeto que contiene los detalles al respecto, este objeto es el que recibimos en catch

el objeto tiene 2 propiedades, name y message
name: Nombre del error, Por ejemplo, para una variable indefinida que es "ReferenceError".

message: Mensaje de texto sobre detalles del error.

stack (propiedad no estándar disponibles en la mayoría de los entornos):una cadena con información sobre la secuencia
de llamadas anidadas que condujeron al error. Utilizado para fines de depuración.

se pueden personalizar los errores con throw



*/
'use strict'

try {
    //let x; si hacemos esta declaracion ya no marcaria error

    x=10;//Este es el bloque de codigo que nos puede saltar error

} catch (error) {//aca recibimos el error del try
    
    //Aca es lo que haremos si se recibe el error
    console.log(error);//Aca vemos el error 
    console.log(error.name)//vemos el nombre del error
    console.log(error.message) //vemos el mensaje del error

} finally{//Esto se ejecutara siempre
    console.log("validacion de erorres completa")
}






//el bloque catch puede ser omitido 