// Las microtareas son un mecanismo interno de JavaScript que permite manejar la ejecución de tareas de prioridad alta,
//  como las promesas, antes de cualquier otra tarea asíncrona en el Event Loop (bucle de eventos). 
//  Entender cómo funcionan te ayudará a prever el orden de ejecución de tu código asíncrono.

// ¿Qué es exactamente una microtarea?
// En JavaScript, el Event Loop gestiona dos colas de tareas:

// Microtareas (Microtasks): Tareas de alta prioridad que incluyen las promesas y sus callbacks (then, catch, finally).
// Macrotareas (Macrotasks): Tareas de menor prioridad, como las originadas por setTimeout, setInterval, eventos del DOM, etc.
// Las microtareas son cruciales porque JavaScript ejecuta todas las microtareas pendientes antes de procesar cualquier macrotarea.

// ¿Cómo funciona el ciclo de ejecución con microtareas?
// El flujo típico de ejecución del Event Loop con microtareas es el siguiente:

// 1-JavaScript ejecuta todas las tareas sincrónicas (es decir, código "normal" que no usa promesas ni temporizadores).
// 2-Luego, si hay microtareas pendientes, JavaScript las ejecuta todas en el orden en que fueron añadidas, antes de pasar a la siguiente macrotarea.
// 3-Después de ejecutar todas las microtareas, el Event Loop procesa la siguiente macrotarea en la cola, como el callback de un setTimeout.
// 4-Una vez que termina una macrotarea, el ciclo vuelve a empezar, verificando si hay nuevas microtareas y procesándolas antes de cualquier otra cosa.


console.log("Inicio");

setTimeout(() => console.log("Macrotarea 1"), 0); // macrotarea

Promise.resolve().then(() => console.log("Microtarea 1")); // microtarea
Promise.resolve().then(() => console.log("Microtarea 2")); // microtarea

console.log("Fin");

// Explicación del orden:

// 1-"Inicio" y "Fin" son mensajes sincrónicos, así que se ejecutan de inmediato.
// 2-setTimeout coloca una macrotarea en la cola, que espera hasta que se hayan ejecutado todas las microtareas.
// 3-Promise.resolve() inmediatamente coloca sus callbacks (then) en la cola de microtareas.
// 4-Microtareas (Microtarea 1 y Microtarea 2) se ejecutan antes que la macrotarea (Macrotarea 1).

// ¿Qué diferencia las microtareas de las macrotareas?
// La diferencia clave es que las microtareas tienen prioridad sobre las macrotareas. 
// Siempre se ejecutan antes, y en el caso de las promesas, esto garantiza que las respuestas
//  de promesas que se resuelven rápidamente se manejen de inmediato, sin esperar a otras tareas de menor prioridad.

