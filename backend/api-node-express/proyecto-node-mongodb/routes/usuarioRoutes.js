const express = require('express');
const router = express.Router();


const {
    createUsuario,listarUsuarios,actualizarUsuario,eliminarUsuario
} = require('../controllers/usuarioController');

router.post('/usuarios', createUsuario);
router.get('/usuarios',listarUsuarios);
router.put('/usuarios/:id', actualizarUsuario);
router.delete('usuarios/:id', eliminarUsuario);

module.exports = router;