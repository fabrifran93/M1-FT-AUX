const { Queue } = require("../estructuras")
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola 

var controlAcces = function(queue, event){
    // Tu código aca:
    let queueRta = [];
    let arrAdic = [];
    // for (const key in queue){
    //   if(Object.values(queue[key]).includes(event) && queue.age>=18){
    //     queueRta.unshift(queue[key])
    //     return queueRta
    //   }
    // }
    
    for(const key in queue){
     let arr = queue[key]
     for(let i=0;i<arr.length;i++){
        if(arr[i].age>=18 && arr[i].ticket.event === event && !arrAdic.includes(arr[i].ticket.number)){
         arrAdic.push(arr[i].ticket.number);
         queueRta.push(arr[i].fullname)
         console.log(queueRta)
         }
        }
      return queueRta
     } 
 }


  module.exports = {
    controlAcces,
   
}