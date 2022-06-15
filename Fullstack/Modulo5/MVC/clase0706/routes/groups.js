const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const controller = require('../controllers/groupsController');

//Validaciones  name, description, repository
const validateCreateGroup = [
    body("name").notEmpty().withMessage("El campo nombre es obligatorio"),
    body("description").notEmpty().withMessage("El campo descripción es obligatorio"),
    body("repository").notEmpty().withMessage("Debes registrar el campo del repository"),
];


// Todos los grupos
router.get('/', controller.index);

// Formulario de creación
router.get('/create', controller.create);

// Procesamiento del formulario de creación
router.post('/', validateCreateGroup, controller.store);

// Detalle de un grupo
router.get('/:id', controller.show);

module.exports = router;