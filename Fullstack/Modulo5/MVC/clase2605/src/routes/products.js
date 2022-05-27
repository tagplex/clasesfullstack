// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/* Quiten el comentario y editen según el enunciado */

// Devolver todos los productos  
router.get('/', productsController.index); 

// Crear un producto
router.post('/:id', productsController.create); 
router.post('/', productsController.store); 

// Devolver un producto 
router.get('/detail/:id', productsController.detail); 

// Editar un producto 
router.get('/:id/edit', productsController.edit); 
router.put('/:id', productsController.update); 

// Eliminar un producto 
router.delete('/:id', productsController.destroy);


module.exports = router;