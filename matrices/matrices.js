//matrices en js 

let matriz =[[],[]];


//Modificar valores
matriz[0][0]= 100;

matriz [0][1]= 200;

matriz [0][2]= 300;


//renglon 1

matriz [1][0]= 400;
matriz [1][1]= 500;
matriz [1][2]= 600;

console.log (`Elemento [0][1] = ${matriz[0][0]}`)
console.log (`Elemento [0][1] = ${matriz[1][0]}`)

//Asi como los arreglos tambien existe una forma simplificada de crearlas

let matriz2= [[100,200,300],[400,500,600]]//creando y declarando 



// Saber el no. Renglones

console.log(matriz.length)

//Saber el numero de columnas (Depende del renglon seleccionado)

console.log(matriz[0].length)


//iterar matriz

for(let ren =0; ren < matriz.length ; ren ++){

    for(let col=0; col< matriz[ren].length; col++){

        console.log(`elemento [${ren}] [${col}]`, matriz[ren] [col])


    }}