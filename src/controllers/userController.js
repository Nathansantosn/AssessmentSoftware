const Pessoa = require('../models/Pessoa');

exports.listarPessoas = async (req, res) => {
  try {
    const pessoas = await User.findAll();
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.cadastrarPessoa = async (req, res) => {
  const { nome, idade, descricao, avatar } = req.body;
  try {
    await Pessoa.create({ nome, idade, descricao, avatar });
    res.redirect('/');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
src/co