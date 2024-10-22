//Los atributos/propiedades estaticas funcionan de manera similar que los metodos estaticos
//Estos son valores que pertenecen a la clase y no a los objetos

class Personas {

    static contadorObjetos = 0; //De esta manera se definen las propiedades estaticas
    
    
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Personas.contadorObjetos++;//para usar la propiedad debemos llamarla
        //Lo que hace esto es que cada vez que se use el constructor
        //se llamara a la propiedad y se aumentara su valor en 1
    }

    get nombre(){//Metodo para devolver el nombre 
       return this._nombre ; 
    }
    get apellido(){//Metodo para devolver el nombre 
        return this._apellido ; 
     }
 
    set nombre(nombre){//Para validar que se guarde bien el nuevo valor
        this._nombre = nombre;
    }

    nombreCompleto (){//Metodo para el nombre completo
        return this._nombre + " " + this._apellido;
    }   

    toString(){
        return this._nombre + " " + this._apellido;

    }

    static saludar(){
        console.log('Mensaje del static');
      }

    static saludar2 (persona){

        console.log( persona.nombre + " " + persona.apellido);
    }

}

//Creamos objetos con la clase persona
let andriun = new Personas('Andriun','Hernandez');
let sadri = new Personas('Sadri','Corleone');

console.log(`Se han creado ${Personas.contadorObjetos} objetos con la clase Personas`);
//Aca podemos ver la cantidad de veces que se uso el constructor para crear un objeto
//-------------------------------------------------------

//Si intentamos usar la propiedad desde un objeto no nos dara el valor
//Pues aunque la propiedad exista, no se le tienen ningun valor
console.log(andriun.contadorObjetos); 

//-------------------------------------------

//Las propiedades estaticas tambien se heredan


class Empleados extends Personas {

    constructor (nombre, apellido, cargo) {
        super (nombre,apellido);
        this._cargo= cargo;
    }
    get cargo (){
        return this._cargo;
    }
    set cargo (cargo){
        this._cargo= cargo;
    }


}


let empleado1 = new Empleados('Andriun','Hernandez', 'Programador');




console.log(`Se han creado ${Personas.contadorObjetos} objetos con la clase Personas`);

//Aca podemos ver que aumento en 1, eso se debe a que cuando se hereda tambien se accede al
// constructor de la clase padre y eso hace que se ejecute el incremento.

