const ex = require("express")
const suma = require('./funciones/sumar');
const resta = require('./funciones/restar');
const multiplicar = require('./funciones/multiplicar');
const dividir = require('./funciones/dividir');

console.log("El resultado de la suma es: " + suma(5,5));
console.log("El resultado de la resta es: " + resta(-5,10));
console.log("El resultado de la multiplicación es: " + multiplicar(0,5));
console.log("El resultado de la división es: " + dividir(0,0));


