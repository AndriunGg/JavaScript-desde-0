//Redondeo y truncado en JS

let numero = 8.5,Redondeo,truncado;

//Redondeo
//Usamos la clase Math.round() que redondea al valor entero mas cercano
// si es (0.5) o superior, redondea al valor entero superior mas cercano
//Si es menos de (0.5), Redondea al valor entero inferior mas cercano

Redondeo= Math.round(numero);
console.log(Redondeo);


//Truncado

//Usamos la clase math.trunc() y eliminamos la parte decimal del numero
// no importa el valor, se elimina
truncado= Math.trunc(numero);
console.log(truncado)