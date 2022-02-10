'use strict'

function por_consola(numero1, numero2){

    console.log("suma : " + (numero1+numero2));
        console.log("resta : " + (numero1-numero2));
        console.log("mult : " + (numero1*numero2));
        console.log("div : " + (numero1/numero2));
        console.log("***************************");
}


function por_pantalla(numero1, numero2){
        document.write("suma : " + (numero1+numero2));
        document.write("resta : " + (numero1-numero2));
        document.write("mult : " + (numero1*numero2));
        document.write("div : " + (numero1/numero2));
        document.write("***************************");

}


function calculadora(numero1, numero2, mostrar= false){

    if (mostrar == false) {
        por_consola(numero1,numero2);
    }
    else{
        por_pantalla(numero1,numero2);
    }

    
   
}
calculadora(10,2);
calculadora(1,2,true);

// for(var i = 1; i<=10; i++)
// {
//     console.log(i);
//     calculadora(i,8);
// }

