const express = require('express');

const router = express.Router();
const controller = require('../controllers/automovelController');

router.post('/', controller.post);
router.put('/:placa', controller.put);
router.delete('/', controller.delete);

module.exports = router;