const express = require('express');
const router = express.Router();

const {
  crear,
  listar,
  actualizar,
  eliminar
} = require('../controllers/cursoController');

router.post('/cursos', crear);
router.get('/cursos', listar);
router.put('/cursos/:id', actualizar);
router.delete('/cursos/:id', eliminar);

module.exports = router;