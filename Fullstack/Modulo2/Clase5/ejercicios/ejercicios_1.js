/*  Ejerjcicio Clase 5 JSON

let persona = {
    nombre: "Emily", 
    edad: 5,
    domicilio: "Fco. Coloane"
}

let personaJSON = JSON.stringify(persona);

let personaString = JSON.parse(personaJSON);
console.log(personaString); */

/* Ejercicios Clase 5 Metodos String 

let saludo = "Hola Mundo, como estan todos?"
console.log(saludo.length);
console.log(saludo.indexOf("Mundo")); */
/* console.log(saludo.slice(2,4)); */
/* console.log(saludo.trim());
console.log(saludo.split(" "));
console.log(saludo.replace(",", "."));
console.log(saludo.replace("c", "C"));  */
/* 
function dominio(url){
    nuevaurl = "http://www." +  url
    return (nuevaurl)
  }
  console.log(dominio("google.cl"))
 */

/* Ejercicos Clase 5  Objetos literales 
  
  let curso = {
     cantidadDeAlumnos: 32,
     docentes: ["Daniela", "Benjamin", "Gonzalo"],
     horario: "De 19 a 21 hrs",
     notificaciones: function(){
         return "El horario de la cursada es " + this.horario
     }
 }

console.log(curso);
console.log("La cantidad de alumnos de este curso es de " + curso.cantidadDeAlumnos);
console.log(curso.notificaciones())

//Funciones constructoras siempre inician con la primera letra en mayuscula
function Curso(cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horarios = horario;
}
let cursoDeProgramacion = new Curso(10, ["Rubio", "Emily"], "De 15 a 19 hrs");

console.log(cursoDeProgramacion); */

 //Ejercicios Clase 5 Arrow functions
/* let laMitad = numero => numero / 2;
console.log(laMitad(2));

let dividir = (numeroA, numeroB) => numeroA / numeroB;
console.log(dividir(5,2))

let tengoQueTrabajar =  dia => {
    if(dia == "Sabado" || dia == "Domingo"){
        return "No tienes que trabajar"
    }else{
        return "Si, tienes que ir a trabajar"
    }
}
console.log(tengoQueTrabajar("Lunes"));  */
/*     Si no recibe ningun parametro, luego de declarar la funcion se registran los parantesis varcios
    Si se recibe 1 parametro, no es necesario colocar parenteisis luego de el parametro
    Si recibe mas de 1 parametro, es neceario colocar el parantesis

    En todos los casos no es necesario colocar la palabra return */

 