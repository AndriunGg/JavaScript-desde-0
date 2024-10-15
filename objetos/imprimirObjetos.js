/*los objetos no se pueden imprimir con el "Console.log(nombreObjeto)", 
ya que si lo hacemos el navegador imprimira object: object*/


let persona = {
    nombre: 'Andriun',
    apellido: 'Hernandez',
    email: 'andriunhz@gmail.com',
    edad: 21
}


//Se pueden imprimir mediante un FOR IN
for (nombrePropiedad in persona) {
    console.log(nombrePropiedad)//asi vemos los nombres de las propiedades
    console.log(persona[nombrePropiedad])//Asi vemos las valores

    console.log(`propiedad:Valor ${nombrePropiedad}:${persona[nombrePropiedad]}`)//Asi vemos todo el objeto
}


//Se pueden imprimir concatenando los valores de las propiedades

console.log(persona.nombre + " , "+ persona.apellido);

/*Se puede usar Object.values(nombreObjeto) 
pero esto nos regresa nuestro objeto en forma de arreglo

regresa solamente los valores de las propiedades.
*/

objetoValues= Object.values(persona)

console.log(objetoValues)

/*Se puede usar JSON.stringify(nombreObjeto),
 Este nos regresa el objeto en forma de string 
 
 
 En este si tenemos el nombre de la propiedad  y su valor: {"propiedad":"valor"}*/ 

let personaString = JSON.stringify(persona);

console.log(personaString);