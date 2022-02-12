'use strict'

// transformacion de texto
var numero = 444;
var texto1 =  "bienvenido al curso de js";
var textto  =  "es buen curso";

// PARTE UNO ****************************************************************************************
// var dato = numero.toString();
//    var  minus = texto1.toLowerCase();
//     var mayus = texto1.toUpperCase();

// console.log( minus, mayus);

// // calcular longitud
// var nombre = "vales verga";
//     //nombre = ['hola', 'hola']; // array 
// console.log(nombre.length); 
// //var tetxtototal = texto1+' '+textto2;
// var tetxtototal =  texto1.concat(' '+textto2+ " cualquier cosa");

//  console.log(tetxtototal);

//BUSQUEDA **************************************************************************************
//var busqueda = texto1.indexOf("CURSO");
//var busqueda = texto1.search("DE");
//var busqueda = texto1.match('curso');
//var busqueda = texto1.substr(14,5);
//var busqueda = texto1.charAt(11);
//var busqueda = texto1.startsWith("al"); //false si no esta al inicio 
// var busqueda = texto1.includes("bienvenido"); //true si ecncuetra 
// console.log(busqueda);

//REEMPLZAR **************************************************************************************
console.log(texto1);
//var busqueda = texto1.replace("js","python"); reemplza js por python
//var busqueda = texto1.slice(14); // elimina desde hasta el caracter 14
//var busqueda = texto1.split();  // mete todo dentro de un array
//var busqueda = texto1.split(" ");  // mete todo dentro de un array separado por espacio 
var busqueda = texto1.trim();  // quita los espacios de adelante y de atras 
console.log(busqueda);