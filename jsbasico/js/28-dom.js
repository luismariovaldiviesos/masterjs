'use strict'

// dom

function  cambiaColor(color){
    caja.style.back = color;
}

//var caja = document.getElementById("micaja") ;
var caja = document.querySelector("#micaja");
caja.innerHTML = "texto en la caja desde el js";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";
console.log(caja);
