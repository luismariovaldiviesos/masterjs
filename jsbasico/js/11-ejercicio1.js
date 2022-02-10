'use strict'
// programa que pida dos numeroes y que diga cual es mayor 

// el menor o si son iguales 


var num1 = parseInt(prompt('ingresa num 1')) ;
var num2 = parseInt(prompt('ingresa num 2')) ;

if (num1 > num2) {
    console.log(num1 + "es el mayor mayor");
    console.log(num2 + "es el menorr");
}
else if (num2 > num1) {
    console.log(num1 + "es el menor");
    console.log(num2 + "es el mayor");
}
else if(num1 == num2){
    console.log('son iguales ')
}
else{
    alert('ingresa numeros validos');
}
