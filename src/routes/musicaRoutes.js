const express = require('express');
const router = express.Router()
const MusicaController = require('../controllers/musicaControllers');

router.get('/ todos/:todos', MusicaController.listarTodos);
router.get('/autor/:autor', MusicaController.buscarPorAutor);
router.get('/:id', MusicaController.buscarPorId);
router.post('/', MusicaController.criar);
router.put('/:id', MusicaController.atualizar);
router.delete('/:id',MusicaController.deletar);

module.exports = router;