//No es posible llamar un metodo STATIC desde un objeto, se debe llamar desde una clase


class Personas {
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
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
        //Este metodo recibe un objeto como argumento y accede a las propiedades
        //".nombre" y ".apellido"

    }

}

let andriun = new Personas('Andriun','Hernandez');
//console.log(andriun.saludar());
//Aca podemos ver que aunque creamos el objeto "andriun" desde la clase personas
//no podemos usar el metodo saludar


//Para poder usar el metodo saludar debemos hacerlo desde la misma clase

Personas.saludar();// el resultado solo se puede ver por consola

//A un metodo estatido se le pueden pasar objetos como argumentos

Personas.saludar2(andriun);//Aca le pasamos el objeto "Andriun" como argumento

//Los metodos estaticos se heredan a las clases hijas 