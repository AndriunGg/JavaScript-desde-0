//De esta forma podemos agregar metodos en objetos en js
// los métodos son propiedades de un objeto que contienen una función.

let persona = {
    nombre: 'Andriun',
    apellido: 'Hernandez',
    email: 'andriunhz@gmail.com',
    edad: 21,
    nombreCompleto: function(){
        return this.nombre + ' '+ this.apellido
    }
}

/*Cuando queremos hacer referencia al 
objeto que estamos usando dentro de el mismo
(Para acceder a atributos y metodos) debemos 
usar el operador "this", ya que si usamos el nombre 
de nuestro objeto no funcionara porque es una variable 
que se definio afuera*/


/*Recordemos que esta propiedad es una funcion,
 asi que debemos colocar parentesis */
 
console.log(persona.nombreCompleto())