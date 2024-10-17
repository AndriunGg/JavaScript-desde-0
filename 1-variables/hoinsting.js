// Hoisting es usar una variable y luego declararla
x=10;

console.log(x);

var x;

/*Esto ya no se usa ya que puede ser confuso,
 lo recomendable es siempre declarar primero la variable y usarla
 
 Cabe recalcar que esto solo funciona si declaramos la variable con 'var',
  Si la declaramos con 'let' no funciona.
 */