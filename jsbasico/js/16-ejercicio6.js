'use strict'

/*
que nos diga si es par o impar y si nos es nuemro que nos pida de vueta
**/ 

var numero  =  parseInt(prompt('ingresa el numero '));

while (isNaN(numero)) {
    numero=parseInt(prompt('ingresa el numero '));
}
if(numero%2 ==0){
    alert('es nuemro par ')
}
else{alert('el numero es impar');}
