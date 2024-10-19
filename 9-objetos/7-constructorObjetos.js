//Funcion constructor en JS

//Es una funcion especial que nos ayuda a crear objetos
 /* Se puede crear un "Molde" (Nuestra funcion constructor) para crear varios objetos
  que tengan los mismos atributos, para que asi no tengamos que crear varios metodos
  de la forma que ya sabemos

  Esto nos ahorra tiempo y lineas de codigo

*/

function Personas(nombre,apellido,email){//La lista de parametros son los atributos de nuestro objeto
    this.nombre = nombre;// 'This' nos ayuda a definir las propiedades 
    this.apellido = apellido;// lo que colocamos luego del = es el parametro que recibimos 
    this.email = email;// lo que colocamos junto al this es el nombre de la propiedad
}

let padre= new Personas('Andriun','Hernandez','andriunhz@gmail.com')// Aca llamamos la funcion 
let alter= new Personas('Sadri','Corleone','sadrilax.3@gmail.com')
//Los argumentos que le mandamos, seran los valores de nuestras propiedades


console.log(padre);
console.log(alter);

//si deseamos cambiar el valor de alguna propiedad lo hacemos normal

padre.nombre ='Sadri';
//Y vemos que actua de una forma normal
console.log (padre.nombre);


//-------------------------------------


//Agregar un metodo en funcion constuctor
//Se hace de la misma forma que cuando se hace directamente en un objeto

function Personas2(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido; 
    this.email = email;
    this.nombreCompleto = function (){
        return this.nombre + ' ' + this.apellido;

    }
}
let padre2= new Personas2('Andriun','Hernandez','andriunhz@gmail.com');

//Aca podemos ver que funciona de manera normal.
//Recordemos que es una funcion asi que se usan ()
console.log(padre2.nombreCompleto())