const express = require('express');
const controller  = require('../controllers/aluguelAutomovelController')

const router = express.Router();

router.get('/', controller.get)
router.post('/', controller.post)
router.put('/', controller.put)

module.exports = router;