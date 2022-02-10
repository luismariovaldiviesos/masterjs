'use strict'

// var numero1  = parseInt(prompt('ingresa el primer numero'));  //10
// var numero2  = parseInt(prompt('ingresa el segundo  numero')); // 5

// if (numero1 > numero2) {
//     alert('el mayor es el num 1 '+ numero1);
//     for(var i  = numero2; numero2 < numero1 -1 ; numero2 ++ )
//     {
//         i++;
//         console.log('numeros intermedios ' + i);
//     }

// }
// else if(numero2 > numero1){
//     alert('el mayor es el num 2 '+ numero2);
//     for(var i  = numero1; numero1 < numero2 -1 ; numero1 ++ )
//     {
//         i++;
//         console.log('numeros intermedios ' + i);
//     }
// }


// hacer un codigo que entre dos numeros sacar los intermedios 


var numero1  = parseInt(prompt('ingresa el primer numero'));  //10
var numero2  = parseInt(prompt('ingresa el segundo  numero')); // 5
document.write("<h1>de" +numero1+"a"+numero2+" estan estos numeros: </h1>")
for(var i = numero1; i<= numero2; i++){
    document.write(i+"<br />");
}