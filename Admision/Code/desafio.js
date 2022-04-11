/* function factorial(numero){
    let total = 1;
    if(numero > 0){
    for(let i = 1; i <= numero; i++){
        total = i*total
    }
    return total
    }
}
console.log(factorial(10))



function productoria(numeros){
    let mul = 1;
    for(let i = 0; i < numeros.length; i++){
        let valor = numeros[i];
        mul = mul * valor;
    }
    return mul;
}
console.log(productoria(numeros=[1,2,3,4,5,6,7,8,9,10]));


function alturaArbolUtopico(ciclos){
    let altura = 1;
    for(let i = 1; i <= ciclos; i++){
        if(i%2 === 0){
            altura = altura + 1
        }else{
            altura = altura*2
        }
    }
    return altura  
}
console.log(alturaArbolUtopico(3))
*/
function masMenos(numeros){
    //Declaro variables inicializadas en 0
    let positivos = 0;
    let cero = 0;
    let negativos = 0;

    for (let  i = 0; i<numeros.length; i++){ //uso .length para recorrer el arreglo
         if (numeros[i] > 0) {  //Consulto si son mayores a 0, si es así a positivo le sumo uno
            positivos = positivos + 1 
        }
        else if (numeros[i] < 0) { //Consulto si son menores a 0, si es así a negativo le sumo uno
          negativos = negativos + 1 
        }
        else if (numeros[i] == 0) { //Consulto si son iguales a 0, si es así a cero le sumo uno
           cero = cero +1 }
    }
    let suma = positivos + negativos + cero;
    let fraccion = [positivos / suma, cero / suma, negativos / suma]

return fraccion
}
console.log(masMenos([0,0,0,0]))