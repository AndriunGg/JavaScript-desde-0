//Operadores incremento-Decremento

let a,b,c;
a=0;
//Preincremento

++a;
console.log(a);


//post-incremento aumenta hasta que la variable se vuelva a usar
a++;//Aca la variable todavia tiene el valor de 1

console.log(a);//aca como se volvio a usar la variable aumento-->

//pre-decremento

--a;

console.log(a)


//post-decremento

a--;

console.log(a);

//ejemplo

a=5;
b=2;

c= ++a * b--;//Aca la variable 'a' tiene el valor de 6 y la variable 'b' mantiene el valor de 2(Es post decremento)

console.log(c);

console.log(a);

console.log(b);//Aca podemos ver que ya se realizo el decremento-->








