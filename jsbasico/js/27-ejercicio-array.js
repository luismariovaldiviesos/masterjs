'use strict'

/*
1 pida seis numeros por pantalla y los meta en un array
2 mostrar el array entero / todos sus elementos en el curpo de la pagina y la conssola
3 ordenarlo y mostrarlo
4 invertir su orden y mostrarlo 
5 mostrar cuantos elementos tiene el array
6 busqueda de un valor introducido por el usuario y que nos diga si esta en el array y que nos dig
su posiccion o indice 
*/

function mostrarArray(elementos, textoCustom = ""){
    
    document.write("<h1>contenido del array" +textoCustom+ "</h1>");
    document.write("<ul>");
    elementos.forEach( (elemento, index) => {
        document.write("<li>"+elemento+"</li>")
    });
    document.write("</  ul>");
}

//1  pida 6 elementos
//var numeros = new Array(6); // array de 6 elementos
var numeros =[]; // array vacio
for(var i=0; i<=5; i++){
    //numeros[i] = parseInt(prompt("intrduce un numero", 0)) ; // ,0 -> valor por default
    numeros.push(parseInt(prompt("Ingresa un numero",0)));
}
// mostrar en el cuerpo de la pagina
mostrarArray(numeros,);

// mostrat en consola
console.log(numeros);

// ordenar y mostrar
numeros.sort(function (a,b){
    return a-b
});
mostrarArray(numeros, 'ordenado');
