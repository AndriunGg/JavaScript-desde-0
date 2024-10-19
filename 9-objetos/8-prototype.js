/*Para modificar propiedades o metodos de nuestro constructor
 podemos usar prototype
*/

function Personas(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

hijo = new Personas('Andriun','Hernandez','andriunhz@gmail.com');

madre = new Personas('Noelia','Vazquez','noelia@mail.com');

console.log(hijo.nombre);

/*
Esto hace que se cree una nueva propiedad en nuestro constructor
llamada 'tel' con el valor de '232222222'

Esto se agrega a TODOS los objetos creados con el constructor 'Personas'

*/

Personas.prototype.tel = 232222222;

//Aca vemos que se agrego correctamente la nueva propiedad
console.log(hijo)


//Tambien se pueden agregar metodos

Personas.prototype.nombreCompleto= function(){
    return this.nombre+" "+this.apellido
}

//Aca validamos que ya esta el metodo en la funcion 'Personas'
console.log(hijo.nombreCompleto());

console.log(madre.nombreCompleto());