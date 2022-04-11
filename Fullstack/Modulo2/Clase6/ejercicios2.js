/* Destructuring

let colores = ["Amarillo", "Rojo", "Blanco"]

let [colorA, colorB, colorC] = colores;


let persona = {
    nombre: "Kevin",
    edad: 29,
    apellido: "Palma"
}

let {nombre, edad, apellido} = persona

console.log(nombre);
console.log(apellido);
console.log(edad); */

/*  Spread Operator */

/* let curso = {
    curso: "Fullstack",
    turno: "Tarde",
    sede: "Online"
};

let estudianteUno = {
    nombre: "Kevin",
    correo: "kevin@gmail.com",
    ...curso
};

let estudianteDos = {
    nombre: "Daniela",
    correo: "daniela@gmail.com",
    ...curso
}

console.log(estudianteUno, estudianteDos); */
/* 
let generoComedias = {
    nombreGenero: "Comedia",
    popularidad: 3
}

let miPobreAngelito = {
    nombre: "Mi pobre Angelito",
    duracion: 120,
    ...generoComedias
}
let quePasoAyer = {
    nombre: "Que paso ayer",
    duracion: 110,
    ...generoComedias
}
console.log(miPobreAngelito);
console.log(quePasoAyer); */

function peliculaVistas(...nombreDePeliculas){
    for (let i = 0; i < nombreDePeliculas.length; i++) {
            console.log(nombreDePeliculas[i]);   
    }
}
peliculaVistas("Batman","IronMan","Man of Steel")