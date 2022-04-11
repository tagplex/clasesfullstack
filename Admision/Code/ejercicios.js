/*function medallaSegunPuesto(posicion){
    let puesto = ["Oro" , "Plata" , "Bronce" , "Seguí participando"];
    //Comprobamos si la posicion coincide con alguna de las medallas , sino devolvemos "segui participando"
    if(posicion < 4){
    //rebajamos 1 a posicion para trabajar mejor con el array donde 1= oro , 2 plata , 3 bronce y 4 en adelante  segui participando
    console.log(puesto[posicion-1]);
        } else {
    console.log(puesto[3]);
    }
    
}
console.log(medallaSegunPuesto(3));

function medallaSegunPuesto(posicion){
    let puesto = ["Oro" , "Plata" , "Bronce" , "Seguí participando"];
    
    if(posicion == 1){
            console.log(puesto[posicion-1])    
        } else if (posicion == 2){
            console.log(puesto[posicion-1])   
        } else if (posicion == 3){
            console.log(puesto[posicion-1])   
        }
         else {
            console.log(puesto[3])
    }
}
console.log(medallaSegunPuesto(200));


function medallaSegunPuesto(posicion){
     
    let puesto = ["Oro" , "Plata" , "Bronce" , "Seguí participando"];
    //Comprobamos si la posicion coincide con alguna de las medallas , sino devolvemos "segui participando"
    if(posicion < 4){
       //rebajamos 1 a posicion para trabajar mejor con el array donde 1= oro , 2 plata , 3 bronce y 4 en adelante  segui participando
        return puesto[posicion-1];
    }else{
        return puesto[3];
    }
}

function sumar5MonedasDe25Centavos(){
    let moneda = 0
    for (let i = 0; i < 5; i++){
        return moneda = moneda + 0.25
    }
    console.log(moneda);
}

function sumaDeLosParesDel0Al(x){
    let suma = 0;
    
    for(let i = 0; i < x; i++){
        if(i % 2 === 0){
            suma = suma + i;
        }
    }
    return suma;
}
console.log(sumaDeLosParesDel0Al(10))

function sumatoriaHasta(x){
    let suma = 0;
    for(let i = 0; i < x; i++){
        suma = suma+i
    }
    return suma
}
console.log(sumatoriaHasta(5))

function caloriasDeTrote(x){
    let total = 0;
    for (let i = 1; i <= x; i++){
        total = total + (i * 5)
    }
    return total
}
console.log(caloriasDeTrote(3))

//Asi se pasan valores a un array ENTIENDE
function sumatoriaGananciasSemestre(unSemestre) {
    return unSemestre[0] + unSemestre[1] +
        unSemestre[2] + unSemestre[3] +
        unSemestre[4] + unSemestre[5];
}
console.log(sumatoriaGananciasSemestre(unSemestre=[1,2,3,4,4,5]))

function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        sumatoria = sumatoria + mes;
    }
    return sumatoria;
}

function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i]
        if(unPeriodo[i] > 0){
        cantidad = cantidad + 1
      }
    }
    return cantidad;
  }


console.log(cantidadDeMesesConGanancia(unPeriodo=[1,2,-3]))
/*
function saldoMesesConGanancia(unPeriodo) {
    let cantidad = [];
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i]
      if(unPeriodo[i] > 0){
        cantidad.push(unPeriodo[i])
      }
    }
    return cantidad;
  }
  console.log(saldoMesesConGanancia(unPeriodo=[1,2,-3]))

function naipes(palo){
    let naipes = []
    for (let i = 1; i <= 12; i++){
        if(i != 8 && i != 9){
            naipes.push(i+" "+"de "+palo)
        }
        
    }
    return naipes
}
console.log(naipes("espadas"))

function trasladar(unArray, otroArray){
      let ultimoElemento = unArray.pop();
      otroArray.push(ultimoElemento);
}
*/

function laClaveSecreta(letras){
    let clave = "";
    for(let i=letras.length-1; i>=0; i--){
        if(letras[i]!="*") {
        clave = clave + letras[i];
        }
    }
    return clave;
}
console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]));