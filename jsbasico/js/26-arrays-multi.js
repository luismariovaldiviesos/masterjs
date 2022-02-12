'use strict'

// array dentro de otro array

var categorias =['accion', 'terror','comedia'];

var peliculas  =['la verdad duele','los elementos','la vida es bella'];

var cine = [categorias, peliculas];
// console.log(cine[0][1]);
// console.log(cine[1][2]);

// añadir un elemto 

// var elemento = "";
// do{

//     elemento = prompt("ingresa tu pelicula");
//     peliculas.push(elemento);
// }
// while(elemento != "terminar")
// peliculas.pop(); // elimina el ultimo elemento del array 
// console.log(peliculas);

// quyitar un elemento que buscamos 

var searchpelicula  =  prompt("ingresa la peli que buscas");
var indice  = peliculas.indexOf(searchpelicula); // si no lo encuentra devuelve -1
if (indice > -1) {
    alert("hay una coincidencia")
   peliculas.splice(indice, 1); // borra desde la posiscion indice   1 elemento 
}
else{  alert("no hay una coincidencia")}
var peliculas_string = peliculas.join(" ");  // convierte el array a cadena de texto separados por comas
alert(peliculas_string);

// convertir una cadena a un array 
var cadena = "texto uno, texto dos, texto 3";
var cadena_array =  cadena.split(", ");
console.log(cadena_array);
