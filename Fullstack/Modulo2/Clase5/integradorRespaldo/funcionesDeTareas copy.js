//Requerimos el modulo fs
const fs = require("fs");

let acciones = {
        listar: function() {
        let verTareas = fs.readFileSync("./json/tareas.json", "utf-8");
        let tareasConversion = JSON.parse(verTareas);
        console.log(tareasConversion);
    },
        escribir: function(){
        let tareasNuevas = [
            {
                tarea: "Estudiar computacion",
                estado: "En proceso"
            },
            {
                tarea: "Estudiar calderas",
                estado: "No iniciada"
            }
        ]        
        let verTareas = fs.readFileSync("./json/tareas.json", "utf-8");
        l
            for(let i = 0; i < tareasNuevas.length; i++){
                tareasConversion.push(tareasNuevas[i]);
            }
            console.log(tareasConversion);
            let tareaJSON = JSON.stringify(tareasConversion);
            fs.writeFileSync("./json/tareas.json", tareaJSON);
    },
        filtrar: function(){
            acciones.listar();
        }
}

module.exports = acciones;



