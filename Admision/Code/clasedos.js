//Funciones 


//Declaradas, la puedes en cualquier momento
function sumar(numeroA, numeroB){
    return numeroA + numeroB;
}
//Expresadas, la puedes usar solo despues que es declarada
let restar = function (numeroA, numeroB){
    return numeroA - numeroB;
}

//Invocación
//console.log(sumar(1,3));
//console.log(restar(1,3));
// Al declarar una funcion podemos asignar un valor por defecto
function saludar(nombre = "usuario", apellido = "anonimo"){
    return "Hola " + nombre + " " + apellido;
}
console.log(saludar("Kevin","Palma"));

function paridad (numero){
    if(numero % 2 === 0){
        return "El numero es par";
    }else{
        return "El numero es impar";
    }
}
//console.log(paridad(2);
