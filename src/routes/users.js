const express = require('express');
const router = express.Router();
const {funcionesUsuarios} = require('../controllers/usuarios');
router.get('/', mostrar);

// Crear un nuevo usuario
router.post('/', funcionesUsuarios.listarUsuarios);

module.exports = router;
