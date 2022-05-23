const { read } = require("fs");
const path = require("path");

let detalleController = {

    detalle: (req, res) => {

        const listaPlatos = [

            {
                id: 1,
                titulo: 'Carpaccio fresco',
                descripcionCorta: 'Entrada Carpaccio de salmón con cítricos',
                descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident',
                precio: '65.50',
                img: 'Carpaccio-de-salmon.jpg'
            },
            {
                id: 2,
                titulo: 'Risotto de berenjena',
                descripcionCorta: 'Risotto de berenjena y queso de cabra',
                descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident',
                precio: '47.00',
                img: 'Risotto-berenjena-queso-cabra.jpg'
            },
            {
                id: 3,
                titulo: 'Mousse de arroz',
                descripcionCorta: 'Mousse de arroz con leche y aroma de azahar',
                descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident',
                precio: '27.50',
                img: 'Mousse-de-arroz-con-leche.jpg'
            },
            {
                id: 4,
                titulo: 'Espárragos blancos',
                descripcionCorta: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
                descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident',
                precio: '37.50',
                img: 'esparragos.png'
            },
            {
                id: 5,
                titulo: 'Pollo a la naranja',
                descripcionCorta: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
                descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident',
                precio: '37.50',
                img: 'esparragos.png'
            }
        ]
        let idSeleccionado = req.params.id;
        res.render("detalleMenu.ejs", { "listaPlatos": listaPlatos[idSeleccionado] })
    }
}

module.exports = detalleController;