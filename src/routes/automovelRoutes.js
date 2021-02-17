const express = require('express');

const router = express.Router();
const controller = require('../controllers/automovelController');

router.post('/', controller.post);
router.put('/:placa', controller.put);
router.delete('/', controller.delete);
router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/pesquisaCor/:cor', controller.getByCor);
router.get('/pesquisaMarca/:marca', controller.getByMarca);

module.exports = router;