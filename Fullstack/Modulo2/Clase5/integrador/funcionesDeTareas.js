//Requerimos el modulo fs
const fs = require("fs");

let acciones = {
        archivo: "./json/tareas.json",
        listar: function() {
            return JSON.parse(fs.readFileSync(this.archivo, "utf-8"));
        },
        escribirJson: function(tareas){ //Declaramos la funcion y recibe el parametro tareas 
            fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, " ")) //Usamos fs para escribir en el archivo, recibe como parametros la ruta (this.x), la conversion de js a arreglo)
        },
        guardarTarea: function(tarea){
            let tareas = this.listar(); //Obtenemos el listado original y guardamos en tareas
            tareas.push(tarea);  //Agregamos a tareas, la nueva tarea mediante push
            this.escribirJson(tareas) //Utilizamos la funcion para escribir, que mediante fs, ingresar los datos y luego lo vuelve a convertir en un objeto json
        },
        filtrar: function(filtrar){

            let filtrados = acciones.listar(); //Obtenemos el listado original y guardamos en tareas
            let tareasFiltradas = filtrados.filter((tarea) => {
                return tarea.estado == filtrar
            });
            return tareasFiltradas;

        }
}
module.exports = acciones;



