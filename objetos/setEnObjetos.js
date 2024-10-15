/*El metodo SET nos ayuda si queremos modificar
 los valores de los atributos de nuestro objeto


 tambien nos ayuda a hacer validaciones
*/



let persona = {
    nombre: 'Andriun',
    apellido: 'Hernandez',
    email: 'andriunhz@gmail.com',
    edad: 21,
    idioma:'es',
    set leng (leng){/*Este metodo necesita un parametro,
                     ya que toma el valor nuevo y lo adecua segun 
                     lo que indiquemos*/

        return this.idioma= leng.toUpperCase()/*Aca tomamos el nuevo valor y 
                                            lo convertimos todo a mayusculas*/
     },

    get  nombreCompleto(){
        return this.nombre + ' ' + this.apellido;

    }
}



persona.leng= 'español';//aca asignamos el nuevo valor, y usamos el metodo set


console.log(persona.idioma)//Aca validamos la modificacion