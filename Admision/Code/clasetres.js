//.shift - Agregar elemento al inicio del array
//.unshift - Elimina el primer elemento del array
//.lenght - Entrega el total de elementos

/*  unArray = [1, 2, 3];
    otroArray = [4, 5];

    function trasladar(unArray, otroArray){
        let ultimoElemento = unArray.pop();
        otroArray.push(ultimoElemento);
  }
  trasladar(unArray, otroArray);
  console.log(unArray, otroArray)
let numerosDeLoteria = [22,40,12];
console.log(numerosDeLoteria.length);

//Inicializar, creamos una variable, y le damos un valor
for(let vuelta = 0; vuelta <= 10; vuelta++ ){
    console.log("Estamos en la vuelta "+vuelta);
}
    console.log("Despues del for");    


    function imprimirAzul4(){
        for(let i = 0; i < 4; i++){
            console.log("Azul");
        }
    }
    console.log(imprimirAzul4());
   
//Sumatoria
//Recibe numeros y retorna la suma
//Que recibe mi funcion? Array con numeros
//Que se retorna? La suma que va a ser un numero

function sumatoria(arrayNumeros){
    // Acumulador, este se declara antes del for y se inicializa 0
    let resultado = 0;
    //Recorremos el arrayNumeros
    for(let indice = 0; indice < arrayNumeros.length; indice++){
        resultado = resultado + arrayNumeros[indice]; //Se usa dentro del for
    }
    return resultado; //Nunca va dentro del ciclo for, porque finalizaria la funcion
}
console.log(sumatoria([10,3,4,5]))

 
//Sumatorio de pares
function sumatoriaPar(arrayNumeros){
    // Acumulador, este se declara antes del for y se inicializa 0
    let resultado = 0;
    //Recorremos el arrayNumeros
    for(let indice = 0; indice < arrayNumeros.length; indice++){
        //Tenemos una condición? Sumar solo pares
        if(arrayNumeros[indice] % 2 === 0){
            resultado = resultado + arrayNumeros[indice]; //Se usa dentro del for
        }
    }
    return resultado; //Nunca va dentro del ciclo for, porque finalizaria la funcion
}
console.log(sumatoriaPar([10,3,4,5]))

// IndiceDe
//Funcion recibe un array y un elemento busacdo y retona las posiciones donde se encuente el elemento
//Quer recibe? Un array y un elemento buscado
//Que retorna? Las posiciones donde se encuentre en un array de numeros
//Declaramos la funcion y colocamos los parametros

function indiceDe (unArray, elementoBuscado){
    //Se necesita un acumulador? Si, para retornar el array con las posiciones
    let posiciones = []; //Se declara antes del for y se da un valor inicial
    //Que es lo que se recorre? Un array (mis parametros ingresador por log)
    for(let i = 0; i < unArray.length; i++){
        //Tenemos condiciones? Si tenemos que busacr un elemento buscado
        if(elementoBuscado === unArray[i]){ //Esto sirve para filtrar
            //Acá encontre el elemento buscado en la posición i
            posiciones.push(i);
        }
    }
    //Despues del for se retorna
    return posiciones;
}
console.log(indiceDe([1,2,3,4,5,6,2,1,3,4],2))
*/
