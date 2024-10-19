/*Herencias, como su nombre lo dice nos sirve 
para heredar cosas de una clase a otra
Heredamos las propiedades y los metodos

Manejaremos clases "Padres" y clases "Hijas", 
Siendo las clases padres las que heredaran sus propiedades/metodos
*/
class Personas {
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){//Metodo para devolver el nombre completo
       return this._nombre ; 
    }

    set nombre(nombre){//Para validar que se guarde bien el nuevo valor
        this._nombre = nombre;
    }

    nombreCompleto (){//Metodo para el nombre completo
        return this._nombre + " " + this._apellido;
    }   
}



class empleado extends Personas {
    constructor (nombre,apellido,cargo){//En los parametros colocamos las propiedades del padre
        super (nombre,apellido);//Con esto llamamos las propiedades del padre
        this._cargo = cargo;
    }
    get cargo(){//Metodo para devolver el cargo
        return this._cargo;
    }
    set cargo(cargo){//Metodo para modificar el cargo
        this.cargo= cargo;
    }
}

let andriun = new empleado('Andriun','Hernandez','Programador')




console.log(andriun.nombre);//Aca vemos que se heredo la propiedad 'Nombre' de la clase padre
console.log(andriun.nombreCompleto());//Aca vemos que tambien se heredan metodos
