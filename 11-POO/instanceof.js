// Esto es un perador logico que no s ayuda a comprobar si un objeto es de una clase o funcion constructora
//Si el objeto pertenece a la clase o funcion constructora nos devuelve TRUE y FALSE si es el caso contrario

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Cliente extends Persona {
    constructor(nombre, idCliente) {
        super(nombre);
        this.idCliente = idCliente;
    }
}

const persona1 = new Persona("Ana");
const cliente1 = new Cliente("Juan", 123);

console.log(persona1 instanceof Persona);  // true
console.log(cliente1 instanceof Cliente);  // true
console.log(cliente1 instanceof Persona);  // true
console.log(persona1 instanceof Cliente);  // false


/*persona1 instanceof Persona: Esto devuelve true porque persona1 es una instancia de la clase Persona.
cliente1 instanceof Cliente: Devuelve true porque cliente1 es una instancia de la clase Cliente.
cliente1 instanceof Persona: También devuelve true porque Cliente hereda de Persona, y cliente1 es indirectamente una instancia de Persona.
persona1 instanceof Cliente: Devuelve false porque persona1 no es una instancia de la clase Cliente.*/