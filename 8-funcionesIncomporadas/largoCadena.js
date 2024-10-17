//largo cadena

let cadena= 'Hola';
console.log(cadena)
//las cadenas se pueden manejar como un objeto
//no podemos modificar una cadena en js
cadena[0]= 'x';
console.log(cadena[0]);
//no se puede modificar una cadena, pero si podemos crear una nueva cadena

cadena= 'adios';
console.log(cadena);


cadena1=cadena.length
for (let i=0; i<cadena.length;i++){

    console.log(`${i}:${cadena[i]}`)

}