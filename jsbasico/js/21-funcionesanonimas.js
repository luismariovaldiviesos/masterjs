'use strict'

// fucniones anonimas
// funcion que no tiene nombre
// callback es una funcion que se ejecuta dentro de otra 


function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar =  numero1+numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(6,6,function(dato){
    console.log("la suma es :" + dato);
}, function(dato){
    console.log("la suma por dos es ", (dato*2) );
});
