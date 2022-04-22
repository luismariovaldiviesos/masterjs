'use strict'
//  puebas con let y var 

// prueba con var 
var numero = 40;
console.log(numero);  // valor 40
if (true) {
	var numero = 50;
	console.log(numero);  // valor 50
}

console.log(numero); // valor 50


// prueba con let sigue mantienedo el valor de la variable que se asigno fuera del bucle

var texto = "curso js";
console.log(texto); // valor ''
if (true) {
	let texto = "curso laravel 5";
	console.log(texto); // valor ''
}
console.log(texto); // valor ''