//Las calases en JS son una plantilla para crear objetos, parecido a una funcion constructor

class Personas {
    //Dentro de las clases se crean metodos, por lo tanto no es necesario separar con coma
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        
    }

    get nombre(){//Metodo para devolver todo el nombre completo
       return this._nombre + ' ' + this._apellido; 

    }

    set nombre(nombre){//Para validar que se guarde bien el nuevo valor
        this._nombre = nombre;
    }

}






let andriun = new Personas('Andriun','Hernandez');

console.log(andriun.nombre);

andriun.nombre = 'Sadri';//Usamos el set para cambiar el nombre

console.log(andriun.nombre);