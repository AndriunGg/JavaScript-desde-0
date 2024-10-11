//Objetos en JS
let x = 10;
/*Los objetos a contrario de los tipos primitivos 
contienen atributos y metodos.

los tipos primitivos tienen un valor individual
*/


//creamos el objeto persona con sus propiedades

let persona = {
    nombre: 'Andriun',
    apellido: 'Hernandez',
    email: 'andriunhz@gmail.com',
    edad: 21
}


/*Podemos acceder a los valores de las propiedades del metodo
 llamandolo y colocando la propiedad
*/

console.log(persona.nombre);//Aca vemos el valor de la propiedad nombre


//podemos ver todo el objeto de llamandolo directamente

console.log(persona);

//=======================================================================
//Tambien se pueden crear objetos de esta forma


let persona2= new Object();
persona2.nombre = 'Sadri'
persona2.apellido= 'Corleone'


//Consultamos nuestro objeto
console.log(persona2.nombre);
//=======================================================================
//otras formas de acceder a propiedades

console.log(persona2['nombre']);//Se pueden consultar como un arreglo

//Asi que podemos recorrer un objeto como si fuera un arreglo
//Pero para eso usamos un buble especial, "For in"

for (nombrePropiedad in persona2) {
        console.log(nombrePropiedad)//Aca vemos los nombres de las propiedades
        console.log(persona2[nombrePropiedad])

        console.log(`propierad:Valor ${nombrePropiedad}:${persona2[nombrePropiedad]}`)
}