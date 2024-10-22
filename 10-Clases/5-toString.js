//Cuando usamos el metodo 'toString()' en un objeto nos devolvera 'object:object'
//Si deseamos que nos entregue otro valor lo podemos personalizar sobreescribiendolo

class Personas {
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){//Metodo para devolver el nombre 
       return this._nombre ; 
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
        
    nombreCompleto (){
        return super.nombreCompleto() + ',' + this.cargo;
       }

}