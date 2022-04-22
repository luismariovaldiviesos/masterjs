'use strict'

//whie 
var year =  2018;

while(year != 1999){
    //ejecuta
    console.log("estamos en el año" + year); // 2018 2017 2016 2015.....2000 
    // if (year == 2017) {
    //     break;
    // }
    year --;
}


// do while 

var years  =  30;

do{
    alert("mientras sea mayor o igual  a 25; el valor es : "  +  years); // 30 29 28 27 26 25
    years --;
}
while(years >= 25)