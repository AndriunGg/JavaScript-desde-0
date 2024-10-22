// Esto quiere decir que el metodo se ejecutara dependiendo quien lo use
// Si lo usa la clase padre, se comportara 
//como esta definido en la clase padre
//Si se usa en la clase hija, se ejecutara como esta en la clase hija


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
let sadri = new Personas('Andriun','Hernandez');
let andriun = new empleado('Andriun','Hernandez','Programador');


/*Aca vemos que el metodo se comporta dependiendo donde es usado*/
console.log(sadri.nombreCompleto());
console.log(andriun.nombreCompleto());

