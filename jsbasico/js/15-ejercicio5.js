'use strict'

/**
 * 
 * todos los numeros divisores deun numero ingresado
 */

var numero =  parseInt(prompt('numero',1));

for(var i=1; i<=numero; i++)
{
    if (numero%i ==0) {
        console.log("divisor "+i);
        }
 }
    