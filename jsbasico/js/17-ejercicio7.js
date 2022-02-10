'use strict'

// tabla de multiplicar de un nuemeor ingresado 

var numero  =  parseInt(prompt('ingrese el numero ',1));

for(var i =1 ; i<=10; i++)
{
    document.write("<br /> " +  i +" por "+numero+ '=  ' +(numero*i));
}

// todas las tablas de miltiplica

for (var c = 0; c <= 10; c++) {
    document.write("<h1>tabla del  " +c+ "</h1>");
    for(var i = 1 ; i<=10 ; i++)
    {
        document.write(i+" x " +c+ " = " +(i*c) + "<br />");
    }
    
}

