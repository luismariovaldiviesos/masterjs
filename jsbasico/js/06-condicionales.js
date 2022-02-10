'use strict'

// if
var edad  =  19;
var nombre  =  "Luis mArio";

if (edad >= 18) {
    console.log(nombre+" tiene "+edad+ " años, es mayor de edad");
    if (edad <= 33) {
        console.log("todavia eres milenial");
    }
    else if (edad >= 70){
        console.log("eres anciano");
    }
    else{
        console.log("ya no eres milenial");
    }
}
else{
    console.log(nombre+" tiene "+edad+ " años, es menor de edad");
}

// operadores logicos 
// AND (Y ) &&
// OR (O) ||
// NEGACION !

var year  =  2028;
// negacion 
if (year != 2016) {
    console.log('el año no es 2016, realmente es ' + year);
}
// and
if (year >= 2000 && year <=2020) {
    console.log("estamos en la era actual");
}
else{
    console.log("estamos en la era postmoderna");
}
//or
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("el año acaba en 8");
}
else{
    console.log("AÑO NO REGISTRADO");
}
