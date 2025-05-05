const express = require('express');
const router = express.Router();
const userController = require('../controllers/pessoaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/lista', userController.listarP);
router.post('/cadastrar', userController.cadastrarUser);
router.put('/editar/:id', userController.editarPessoa);

module.exports = router;