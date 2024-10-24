/* Esto quiere decir que una cosa tiene avarias formas de mostrarse

Un metodo tiene varias formas de mostrearse, depende quien lo llame

en el caso presentado en SOBREESCRITURA podemos presentar un caso de polimorfismo,
ya que el metodo mostrarDetalles se puede expresar de 2 maneras dependiendo que clase lo use


*/

class empleado{
    constructor (nombre, edad){
        this._nombre= nombre;
        this._edad= edad;
    }

    obtenerDetalles(){
        return `nombre:${this._nombre},${this._edad}`;
    }

}


class gerente extends empleado{
    constructor(nombre,edad,cargo){
        super (nombre,edad);
        this._cargo= cargo;
    }

    obtenerDetalles(){//Metodo heredado
        return `${super.obtenerDetalles()}, cargo:${this._cargo}`;
    }
}
empleado1 = new empleado('juan',20);
console.log(empleado1.obtenerDetalles());

gerente1 = new gerente('andriun',22,'programador');
console.log(gerente1.obtenerDetalles());

//Lo que vimos con el metodo "obtenerDetalles" se comporta de maneras diferentes.

//Si lo usa la clase empleado solamente me muestra el nombre y la edad
//Si lo usa la clase gerente me muestra nombre, edad y cargo 