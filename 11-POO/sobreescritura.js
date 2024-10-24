/*Cuando hablamos de sobreescritura nos referimos a un metodo o caracteristica que un hijo hereda del padre, Muchas veces esta
caracteristica se hereda pero el hijo le agrega su propio comportamiento

En JS cuando hablamos de sobreescritura las clases hijas muchas veces heredan metodos de las clases padres, Al momento de usarse en la clase hija
esta puede usarlo de la misma manera que esta en la clase padre, le puede agregar cosas o tambien puede hacerlo de manera totalmente diferente
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

    obtenerDetalles(){//Heredamos el metodo de la clase padre
        return `${super.obtenerDetalles()}, cargo:${this._cargo}`;//Le agregamos al metodo del padre (Que llamamos con super) la propiedad de cargo
        //si deseamos cambiar todo, no agregamos super, y colocamos lo que deseemos
        //Si deseamos dejarlo tal cual, podemos simplemente dejar el super 
    }
}


gerente1 = new gerente('andriun',22,'programador');
console.log(gerente1.obtenerDetalles());