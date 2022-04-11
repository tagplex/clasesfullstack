/* let amigos = ["rubio", "emily"];

let amigosJSON = JSON.stringify(amigos);

let amigosOriginal = JSON.parse(amigosJSON);
console.log(amigosJSON);

console.log(amigosOriginal); */

/* let persona = {
    nombre: "Kevin",
    edad: 20,
    domicilio: "Fco. Coloane"
}

let personaJSON = JSON.stringify(persona);
let personaOriginal = JSON.parse(personaJSON);
console.log(personaOriginal); */

/* let saludo = "Hola buenos dias"

console.log(saludo.length);
console.log(saludo.slice(0,4));
console.log(saludo.split(" "));
 */

/* 
}
console.log(miPais.saludar("lunes 25 de abril")); */
/* Funciones con metodos, y funciones constructoras

let curso = {
    cantidadDeAlumnos: 25,
    docentes: ["Rubio", "Emily"],
    horario: "de 20 a 22.30 hrs",
    notificaciones: function(){
        return "El horario de la clase es " + this.horario;
    }
}
function Curso(cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}

let programacion = new Curso(12, ["Neron", "Max"], "de 10 a 13 hrs");

console.log(programacion); */

/* let laMitad = (numeroA) => numeroA * 2;
console.log(laMitad(5,6)); */

/* let tengoQueTrabajar = dia => {
    if(dia == "Sabado" || dia == "Domingo"){
        return "No tengo que trabajar"
    }else{
        return "Tienes que trabajar"
    }
}
console.log(tengoQueTrabajar("Martesasd")); */

/*  Callback

let sumar = (numeroA, numeroB) => numeroA + numeroB;
let restar = (numeroA, numeroB) => numeroA - numeroB; 

let operacionMatematica = (numeroA, numeroB, operacion) => 
operacion(numeroA,numeroB);

console.log(operacionMatematica(4,2,restar)); */

/* let mascotas = ["Rubio", "Emily","Neron"]
let numeros = [1,2,3,4]

let numerosPorDiez = numeros.map(function(numero){
    return numero * 10;
})

let mayorDos = numeros.filter(function(valor){
    return valor >= 2
})

let encontrar = mascotas.filter(function(valor){
    return valor == "Rubio"
})

let suma = numeros.reduce(function(acumulador, numero){
    return acumulador + numero
})

mascotas.forEach(function(nombre, posicion){
    console.log("El perro N° " +  (posicion + 1) + " se llama " + nombre);

}) */

/* console.log(numerosPorDiez);
console.log(encontrar)
console.log(mayorDos);
console.log(suma); */

/* let fechaActual = new Date(2023, 11, 24);

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();

let meses = ["Enero","Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto","Septiembre","Octubre","Noviembre", "Diciembre"]

console.log("Hoy es el " + dia + " de " + meses[mes]  + " de " + anio);
 */