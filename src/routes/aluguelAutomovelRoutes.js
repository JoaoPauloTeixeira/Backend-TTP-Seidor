const express = require('express');
const controller  = require('../controllers/aluguelAutomovelController')

const router = express.Router();

router.get('/', controller.get)
router.get('/pesquisaCpfMotorista/:cpf', controller.getByCpfMotorista)
router.post('/', controller.post)
router.put('/', controller.put)
router.delete('/:cpf', controller.delete)

module.exports = router;