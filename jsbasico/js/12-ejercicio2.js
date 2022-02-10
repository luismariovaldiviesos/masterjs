'use strict'

// utilizando un bucle mostrar la suma y la media de los numeros introduciod hasta introducir u
// numeo negativo y ahi mostrar el resultado 


// var suma  = 0;
// var num_ingresado;
// var promedio ;

// var repeticiones = parseInt(prompt('cnuemero de vueltas ')) ;

// console.log(repeticiones);

// for(var i=0; i< repeticiones; i++){

//     num_ingresado =  parseInt(prompt('ingresa el numero'));

//     suma = suma + num_ingresado;
//     promedio = suma/num_ingresado;

// }
// console.log("la suma total es " + suma);
// console.log("el promedio es  " + promedio);

var suma =0;
var contador = 0;

do{
    var numero  =  parseInt(prompt('ingressa numeros hasta que ingreses uno negativo', 0));
    if (isNaN(numero)) {
        numero = 0;
    }
    else  if(numero >= 0)
    {
        suma = suma +numero;
        contador ++;
    }
    console.log(suma);
    console.log(contador);
}
while(numero >=0)
alert('la suma de todos los nuemeros es: ' +  suma);
alert('el promedio de todos los numeors es :  ' +  (suma/contador));