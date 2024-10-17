//Operador ternario

let miNumero = 2;

//Validar si el numero es positivo

//si el codigo dentro del if solo es una linea de codigo, se pueden omitir los corchetes
/*
if(miNumero>0)
    console.log("Valor positivo",miNumero)
else
console.log("Valor cero", miNumero)*/


//Es una simplificacion de la sentencia if/else
//Si se usa esto, no se puede usar else if
//(condicion)?casoverdadero : caso falso

(miNumero>0)? console.log("Valor positivo",miNumero):console.log("Valor cero", miNumero)