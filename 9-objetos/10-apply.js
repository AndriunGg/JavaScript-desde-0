//apply es como call
// nos ayuda a usar metodos definidos en otros objetos
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
    
    console.log (persona.nombreCompleto.apply(persona2))
    
    
    //Aca encontramos una diferencia con CALL,
    //Si nuestro metodo tiene argumentos los debemos agregar por un arreglo
    //ya antes definido

let arreglo = ['dr','español'];

    console.log (persona2.Dr.apply(persona,arreglo));
    
    