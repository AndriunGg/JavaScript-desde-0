//Podemos usar funciones asincronas con promesas


let promesa = new Promise ((aproved)=>{
    console.log('Validando')
    setTimeout(()=>aproved('Todo salio correcto'),3000);
    console.log('Validacion completa')
})

promesa.then(correcto=>console.log(correcto)); //aca podemos ver que podemos usar procesos asincronos en nuestras promesas
//ya que primero se imprimen los mensajes y luego de 3 segundos es que se le da el valor con el setTimeout