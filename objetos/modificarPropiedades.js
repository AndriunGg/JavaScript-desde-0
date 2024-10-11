//Modificar propiedades de un objeto en js


//definimos nuestro objeto
let persona = {
    nombre: 'Andriun',
    apellido: 'Hernandez',
    email: 'andriunhz@gmail.com',
    edad: 21
}

//agregar nueva propiedad

persona.telefono = 32111223;

console.log(persona);//Aca validamos que se creo correctamente

//Modificar valor de una propiedad

persona.telefono = 3116683455
console.log(persona.telefono)//Aca validamos la modificacion

//Borrar una propiedad

delete persona.telefono;
console.log(persona);//Aca validamos que la borramos correctamente

