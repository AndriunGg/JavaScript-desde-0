//Se pueden modificar los metodos ya creados en la clase padre

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
    constructor (nombre,apellido,cargo){
        super (nombre,apellido);
        this._cargo = cargo;
    }
    get cargo(){//Metodo para devolver el cargo
        return this._cargo;
    }
    set cargo(cargo){//Metodo para modificar el cargo
        this.cargo= cargo;
    }

    //debemos volver a llamar como si lo declararamos desde 0
    // *DEBE TENER EL MISMO NOMBRE QUE EN LA CLASE PADRE*
        
    nombreCompleto (){/*Se puede hacer de esta manera, pero esto modificaria todo el metodo
        
        return this._nombre + " " + this._apellido + ',' + this.cargo;

        Si deseamos solamente reutilizar lo ya definido, debemos hacer lo siguiente:
        */

        return super.nombreCompleto() + ',' + this.cargo;
        //'Super' nos devuelve lo ya defindo y luego le agregamos lo que querramos
    }

}

let andriun = new empleado('Andriun','Hernandez','Programador');


console.log(andriun.nombreCompleto());//Aca vemos que se modifico correctamente