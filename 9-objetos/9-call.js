//call nos ayuda a usar metodos definidos en otros objetos
//Pero los objetos deben tener las MISMAS PROPIEDADES

let persona = {
nombre: 'Andriun',
apellido: 'Hernandez',
nombreCompleto: function(){
    return this.nombre + ' ' + this.apellido
    }
}

let persona2 = {
    nombre: 'Noelia',
    apellido: 'Vazquez',
    Dr : function (cargo,lenguaje){

        return cargo + " "+this.nombre+" "+this.apellido+" "+lenguaje
    }
}
//Aca podemos ver el metodo del objeto 'persona'
console.log(persona.nombreCompleto());


//Asi podemos usar el metodo 'nombreCompleto' del objeto 'Persona'
//con los valores del objeto 'Persona2'

console.log (persona.nombreCompleto.call(persona2))



//Si nuestro metodo tiene argumentos le podemos agregar
// Pero debe ir en este orden (objeto,argumento1,argumento2)

console.log (persona2.Dr.call(persona,'Dr','Español'))



