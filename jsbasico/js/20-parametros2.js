'use strict'

// parametros REST Y SPREAD

function listadoFrutas(fruta1,fruta2, ...resto_de_frutas){ //...rest
    console.log("fruta 1  " + fruta1);
    console.log("fruta 2  " + fruta2);
    console.log(resto_de_frutas);
}


listadoFrutas('naranja','manzana','coco','peras','uvas');

var frutas =['naranja','namzana'];
listadoFrutas(...frutas,'coco','peras','uvas');  //spread