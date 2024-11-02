// permite ejecutar una función o un fragmento de código repetidamente en intervalos específicos. 
// Mientras que setTimeout se usa para retrasar la ejecución de una función una sola vez,
//  setInterval repite la ejecución de la función cada cierto tiempo.

// sintaxis: setInterval(función, intervalo); 
// función: La función que se ejecutará repetidamente.
// intervalo: El tiempo en milisegundos entre cada ejecución de la función.


let reloj = ()=>{
    let fecha = new Date ();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

setInterval(reloj,1000);

//tambien se pueden definir las funciones dentro de setInterval, como en setTimeout