const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');


const controller = {
	// Root - Show all products
	index: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('products', {
			products
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id
		let product = products.find(product => product.id == id)
		res.render('detail', {
			product
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},

	// Create -  Method to store
	store: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let newProduct = {
			id: products[products.length - 1].id + 1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: "default-image.png"
		}
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		res.redirect("/products")
	},

	// Update - Form to edit
	edit: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('product-edit-form', { productToEdit })
	},
	// Update - Method to update
	update: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let productToEdit = products.find(product => product.id == req.params.id)
		let editedProduct = {
			id: req.params.id,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: productToEdit.image
		}
		let indice = products.findIndex(product => product.id == req.params.id);
		products[indice] = editedProduct;
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		res.redirect("/products");
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let finalProducts = products.filter(product => product.id != req.params.id)
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
		res.redirect("/products");
		/* let id = req.params.id;
		res.send("Producto con id " + id + " eliminado"); */
	}
};

module.exports = controller;