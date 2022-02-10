'use strict'

//switch
 var edad = 84;
 var imprime  = "";

 switch(edad){
    case 18:
        imprime =  "acabas de cumplir la mayoria de edad";
    break;

    case 25:
        imprime =  "ya eres adulto";
    break;

    case 40:
        imprime =  "crisis de ls 40";
    break;
    case 75:
        imprime =  "eres un acnicano";
    break;
    default:
        imprime="tu edad es neutra";
    break;
 }
 console.log(imprime);
    