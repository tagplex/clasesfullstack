const autosImportados = require("./autos")
const personasImportadas = require("./personas")

const concesionaria = {
    autos: autosImportados,
    personas: personasImportadas,
    buscarAuto: function(patente){
        for(let i = 0; i < this.autos.length; i++){
            if(this.autos[i].patente == patente){
               return this.autos[i]
            }
        }
        return null
    },
    venderAuto: function(patente) {
        let vehiculo = this.buscarAuto(patente)
        if(vehiculo){
            vehiculo.vendido = true
        }
    },
    autosParaLaVenta: function(){
        let disponibles = this.autos.filter(vendidos => { return vendidos.vendido != true })
        return disponibles
    },
    autosNuevos : function(){
        let ceroKm = this.autosParaLaVenta().filter(auto => {return auto.km < 100})
        return ceroKm;
    },
    listaDeVentas: function(){
        let ventasRealizadas = [];
        for (let i = 0; i < this.autos.length; i++) {
            if(this.autos[i].vendido == true){
                ventasRealizadas.push(this.autos[i].precio);            
            }
        }
        return ventasRealizadas
    },
    totalDeVentas: function(){
        let valorInicial = 0
        if(this.listaDeVentas() == 0){
            return 0
        }else{
            let suma = this.listaDeVentas().reduce(function(valorPrevio, valorActual){
                valorInicial = valorPrevio + valorActual;
                return valorInicial;
            })
            return suma;
        }
    },  

    puedeComprar: function(auto, persona){
        let precioPorCuota = (this.autos[auto].precio / this.autos[auto].cuotas)
        if(this.autos[auto].precio <= this.personas[persona].capacidadDePagoTotal && precioPorCuota <= this.personas[persona].capacidadDePagoEnCuotas){
            return true;
        }else{
            return false;
        }
    },
    autosQuePuedeComprar: function (persona){
        let ventas = this.autosParaLaVenta()
        let listaParaComprar = ventas.filter(function(auto)
        {
            return concesionaria.puedeComprar(auto, persona)
        })
        return listaParaComprar
    }
}
console.log("Vehiculos Disponibles en concenionaria\n");
console.table(concesionaria.autos);
console.log("\nVender Vehiculo");
console.log();(concesionaria.venderAuto("APL13"));
console.log();(concesionaria.venderAuto("JJK116"));
console.table(concesionaria.autos);
console.log("\nVehiculos para la venta");
console.table(concesionaria.autosParaLaVenta());
console.log("\nVehiculos para la venta 0 km");
console.table(concesionaria.autosNuevos());
console.log("\nListado de ventas");
console.table(concesionaria.listaDeVentas());
console.log("\nTotal de ventas");
console.table(concesionaria.totalDeVentas());
console.log("\nCliente puede comprar\n");
console.log(concesionaria.puedeComprar(1,0));
console.log("\nVehiculo que puede compar\n");
console.log(concesionaria.autosQuePuedeComprar(0));
