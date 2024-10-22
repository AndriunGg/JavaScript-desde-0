//En diferencia a las propiedades ESTATICAS estas se asocian a los objetos creados
//a partir de nuestra clase

class Personas {

    lenguaje = "Valor por default" //De esta manera se definen

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){//Metodo para devolver el nombre 
       return this._nombre ; 
    }
    get apellido(){//Metodo para devolver el apellido 
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
        //Este metodo recibe un objeto como argumento y accede a las propiedades
        //".nombre" y ".apellido"

    }

}


persona1 = new Personas ('Andriun','Hernandez');


//Aca vemos que nuestro objeto tiene la propiedad lenguaje

console.log(persona1.lenguaje);
//----------------------------
//Al contrario de las estaticas estas NO pueden ser llamadas con la clase

console.log(Personas.lenguaje);
// Sucede como cuando intentamos llamar una propiedad estatica desde un objeto

//----------------------------------------

//Estas propiedades se heredan 
 
class Empleados extends Personas{
    constructor(nombre, apellido, cargo){
        super(nombre, apellido);
        this._cargo = cargo;
    }

    get cargo (){
        return this._cargo;
        }
    set cargo (cargo){

        this._cargo= cargo;
    }
}

empleado1= new Empleados('Andriun', 'Hernandez', 'Programador');

console.log(empleado1.lenguaje);
//Aca podemos ver que la propiedad se heredo al objeto empleado1

