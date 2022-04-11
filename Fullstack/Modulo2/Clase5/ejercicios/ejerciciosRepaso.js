/* let curso = {
    cantidadDeAlumnos: 32,
    docentes: ["Daniela", "Benjamin", "Gonzalo"],
    horario: "De 19 a 21 hrs",
    notificaciones: function(){
        return "El horario de la cursada es " + this.horario
    }
}

function Curso(cantidadDeAlumnos, docentes,horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}

let cursoProgramacion = new Curso(50, ["Emiliana","Ruibio"], "de 19 a 20 hrs.");

console.log(cursoProgramacion);
 */
/* let total = (num1,num2) => num1* 2 + num2;{
    if(total > 5){
        console.log("El numero es mayor que 5");
    }
        console.log("El numero es menor que 5");
}
console.log(total(5,9));
     */

/* let sumar =(num1, num2) => num1 + num2;
let restar = (num1, num2) => num1 - num2; 
let multiplicar = (num1, num2) => num1 * num2; 
let dividir = (num1, num2) => num1 / num2; 

let calculadora = (num1, num2, operaciones) => operaciones(num1, num2);

console.log(dividir(8,5)); */

/* function agregarHttp(url) {
    return "http://" + url
}
function procesar(unArray,agregarHttp){
    let recorrido = [];
    for(let i = 0; i < unArray.length; i++){
        recorrido.push(agregarHttp(unArray[i]));
    }
    return recorrido
}

let sitioWebCompleto = (unArray, algo) => procesar(unArray, algo);

console.log(sitioWebCompleto(["www.yahoo.com", "www.google.com", "www.git.com"], agregarHttp)); */

//Callback es una funcion que se pasa como parametro de otra funcion
/* 
let notas = [5,3,4,5,6,7,1];

let notasHastaEl100 = notas.map(function(numero){
    return numero * 10;
});

//console.log(notasHastaEl100)
let notasAprobadas = notas.filter(function(numero){
    return numero >= 4
});

//console.log(notasAprobadas)

let notasSumadas = notas.reduce(function(estado, numero){
    return estado + numero;
});
//console.log(notasSumadas);

notas.forEach(function(valor, indice){
console.log("En la posición " + indice + " tengo el valor " + valor);
})
 */

/* let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: 1},
    {nombre: 'Jane', promedio: 7, aprobado: 2},
    {nombre: 'June', promedio: 3, aprobado: 1},
]

let aprobados = estudiantes.filter(function(estudiantes){
    return estudiantes.aprobado == 1
});

let desaprobados = estudiantes.filter(function(estudiantes){
    return estudiantes.aprobado == 2
});

console.log(desaprobados) */

/* let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach(function(valor){
    console.log(valor);
}) */

/* let fechaActual = new Date();
console.log(fechaActual.getDay());
console.log(fechaActual.getDate());
console.log(fechaActual.getMonth());
console.log(fechaActual.getFullYear()); */

//Destructing

/* let cursos = ["JS","Marketing","UX"];
 
let [programacion, ux, marketing] = cursos;

console.log(cursos);
console.log(programacion);
console.log(ux); */

/* let mascota = {
    tipo: "Perro",
    nombre: "Rubio",
    edad: 5
}

let {nombre, edad} = mascota;
console.table(mascota);
console.log(nombre);
console.log(edad); */

/* 
let cursos = ["JS","Marketing","UX"];
let otrosCursos = ["Ninguno", "C#"];

let todosLosCursos = [...cursos, ...otrosCursos];

let alumno = { 
    nombre: "Kevin",
    apellido: "Nada",
    ...cursos
}
console.log(alumno); */
/*
function peliculasVistas(...nombresDePeliculas){
    for(let i = 0; i < nombresDePeliculas.length; i++){
        console.log("El usuario ha visto " + nombresDePeliculas[i]);
    }
    
}
peliculasVistas("End Game","IronMan","Home Alone");

*/

let arreglo1 =  [11,20,30,40]

let arreglo2 = [
    {cantidad: 10},
    {cantidad: 20},
    {cantidad: 30},
    {cantidad: 40},
]

/* let resultado = arreglo.filter(row => {
    return row.cantidad %2 == 0
}) */
let resultado1 = arreglo1.reduce((acum, num)=>{
    let suma = 0;
    suma = acum + num
    return suma
})
console.log(resultado1); 

let valorInicial = 0;
let resultado2 = arreglo2.reduce((acum, num) => acum + num.cantidad, valorInicial);
console.log(resultado2);