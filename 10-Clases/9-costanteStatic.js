//Si se dsea hacer una costante static debemos usar un metodo get

class Personas {
    static get costante(){// Combinamos el static con el get, procede a ser un
        return 5; 

        //Esto es considerado una costante debido a que no se puede manipular de ninguna forma
    }

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
    }

}



console.log(Personas.costante);// aca vemos el valor

Personas.costante = 20;//Intentamos cambiar el valor de la costante

console.log(Personas.costante); //vemos que no se modifica de ninguna manera
//Si desean que se cambie pueden usar el metodo set