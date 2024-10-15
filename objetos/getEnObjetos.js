/*EL metodo get es otra forma para 
crear una funcion en mi objeto

Este manera no tiene ninguna diferencia 
con el otro modo de declaracion de funciones, 
los 2 pueden hacer lo mismo.

Normalmente se utiliza get para funciones basicas,
cuando queremos que las cosas se vean como una propiedad simples

el otro modo de declaracion se usa mas para dejar claro 
que es un proceso mas complejo o una accion

*/

let persona = {
    nombre: 'Andriun',
    apellido: 'Hernandez',
    email: 'andriunhz@gmail.com',
    edad: 21,
    get  nombreCompleto(){
        return this.nombre + ' ' + this.apellido;

    }
}


console.log(persona.nombreCompleto)//No tenemos que usar los parentesis
//Si lo hubieramos declarado con la otra forma seria asi:
//console.log(persona.nombreCompleto())

