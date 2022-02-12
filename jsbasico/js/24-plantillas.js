'use strict'
// platillas de texto 

var nombre = prompt("ingresa tu nombre");

var apellidos = prompt("ingresa tu apellido");

//var texto = "mi nombre es "+ nombre + "mis aplellidos son " + apellidos;

var texto =  `
    <h1>hola que tal </h1>
    <h3>mi nombre es ${nombre}</h3>
    <h3>mi apellidos  es ${apellidos}</h3>

`;
document.write(texto);