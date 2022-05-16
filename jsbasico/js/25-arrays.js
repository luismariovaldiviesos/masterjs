'use strict'

// arreglos , matrices, arrays
// una coleccion de tipos de valores qye puede tener una variable 

var nombres = ["juan", "pedro","manolo",1]; // una coleccion 

// o en forma de objeto 
 var lenguajes = new Array("php","laravel","python","etc","objetos");


// console.log(nombres[2]);
// console.log(nombres.length);
// console.log(lenguajes);
// var elementos  =  nombres.length;
// var  elemento  = parseInt(prompt("que elemeto del array nombres quieres ??"));
// if(elementos < elemento){
//     alert("no hay esa cantidad de elementos");
// }
// else{
//     var dato  =  nombres[elemento];
//     alert("el elemeto es " + dato);
// }


// todos los elementos del arrya por pantalla

document.write("<h1>lenguajes de programacion</h1>")
// document.write("<ul>")
// for(var i= 0; i<= nombres.length; i++){
//     document.write("<li>"+lenguajes[i]+"</li>");
// }
// document.write("</ul>")

// document.write("<h1>recorrido por un for each</h1>")
// lenguajes.forEach((elemento, indice)=> {
//     document.write("<li>poiscion "+indice+" - "+elemento+"</li>");
// });

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

// busquedas
// var busqueda = lenguajes.find(function(parametro){
//     return parametro = "php7";
// });
var precios = [10,20,30,40];
var busqueda = precios.some(precio => precio >= 30);
console.log(busqueda);

