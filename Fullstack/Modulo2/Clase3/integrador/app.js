let alumnopablog = require("./alumnos/pablo_ghiguly");
let alumnoKP = require('./alumnos/kevin_palma');
let alumnoJO = require("./alumnos/juan_ortiz");
let alumnoLN = require('./alumnos/leandro_novoa');
let zodiac = require('zodiac-signs')();

console.log("Hola, soy "+ alumnoKP[0] + ", disfruto " + alumnoKP[1] + " y soy de " + alumnoKP[2]);
console.log("Hola, soy "+ alumnoJO[0]+", disfruto el "+ alumnoJO[1]+" y soy de "+ alumnoJO[2]);
console.log("hola, soy " + alumnopablog[0]  +  ", me gusta la " + alumnopablog[1] + " y resido en " + alumnopablog[2]);
console.log('Hola, soy '+ alumnoLN[0] + ', disfruto mirar ' + alumnoLN[1]+ ' y soy de '+ alumnoLN[2]);

console.log(zodiac.getSignByDate({ day: 22, month: 6 }));