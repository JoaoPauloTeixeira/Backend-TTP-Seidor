const express = require('express');

const router = express.Router();
const controller = require('../controllers/motoristaController');

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:cpf', controller.delete);
router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/pesquisaCpf/:cpf', controller.getByCpf);

module.exports = router;