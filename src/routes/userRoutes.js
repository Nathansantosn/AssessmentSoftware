const express = require('express');
const router = express.Router();
const userController = require('../controllers/pessoaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/lista', userController.listarPessoas);
router.post('/cadastrar', userController.cadastrarPessoa);
router.put('/editar/:id', userController.editarPessoa);

module.exports = router;