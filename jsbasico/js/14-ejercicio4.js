'use strict'
/* 
mostrar impares de entre dos numeros

*/

var numero1  = parseInt(prompt('ingresa el primer numero'));  //10
var numero2  = parseInt(prompt('ingresa el segundo  numero')); // 5

while(numero1<numero2){
    numero1++
    if (numero1%2 !=0) {
        console.log("el "+numero1+ "es impar");
    }
}
