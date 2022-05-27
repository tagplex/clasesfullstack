const fs = require('fs');
const path = require('path');

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	// (get) Root - Mostrar todos los productos
	index: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render("products",{"products": products})
	},

	// (get) Detail - Detalle de un producto
	detail: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let product = products.find(producto => producto.id == req.params.id)
		res.render("detail.ejs", {"products": product});
	},

	// (get) Create - Formulario para crear
	create: (req, res) => {
		// Do the magic
	},
	
	// (post) Create - Método para guardar la info
	store: (req, res) => {
		// Do the magic
	},

	// (get) Update - Formulario para editar
	edit: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let product = products.find(producto => producto.id == req.params.id)
		res.render("product-edit-form.ejs", {"products": product});
	},
	// (post) Update - Método para actualizar la info
	update: (req, res) => {
		// Do the magic
	},

	// (delete) Delete - Eliminar un producto de la DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;