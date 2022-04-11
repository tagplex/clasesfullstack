/* let nombre = 'Dragon Ball Z y dragon ball gt';
nuevoArray =  nombre.split(' ');

console.log(nuevoArray) */
/* 
function dominio(url){
  nuevaurl = "http://www." +  url
  console.log(nuevaurl)
}
console.log(dominio('muniquemchi.cl')) */

/* function reemplazoFastFast(texto, buscaReemplazo, paraReemplazar){
  texto = texto.replace(buscaReemplazo, paraReemplazar);
  return texto
}
console.log(reemplazoFast('Este texto es mala onda','mala','buena')); */

/* function menciona(texto, palabra){
    if(texto.indexOf(palabra) == -1){
      return false
    }else{
      return true
    }
}
console.log(menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación')); */
/* 
let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(11,17) 
console.log(licenciada);
 */

/* let computador = {
    nombre: "Kevin",
    apellido: "Palma",
    saludar: function(){
        return "Hola, me llamo " + this.nombre;
    }
};

console.log(computador.saludar());  */

/* function Auto(marca, modelo){
  this.marca = marca;
  this.modelo = modelo;
}
let nuevoAuto = new Auto('Ford', 'Escape'); */
/* 
let deportista = {
	  energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (horas){
        this.energia -= (horas * 5);
        this.experiencia  += (horas * 2);
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
 */
let sumar = (a, b) => a + b;