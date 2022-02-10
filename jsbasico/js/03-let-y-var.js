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


// prueba con let 

var texto = "curso js";
console.log(texto); // valor ''
if (true) {
	let texto = "curso laravel 5";
	console.log(texto); // valor ''
}
console.log(texto); // valor ''