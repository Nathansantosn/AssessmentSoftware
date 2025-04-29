const sequelize = require('config/database')
const { DataTypes} = require('sequelize')

const Pessoa = sequelize.define('User',{
    nome:{
        type: DataTypes.STRING,
        allowNull:false
    },
    idade:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    descricao:{
        type: DataTypes.STRING
    },
})

sequelize.sync()
    .then(()=> console.log("Tabela pessoas sincronizada"))
    .catch(err => console.log("Erro ao sincronizar tabela produtos: ", err))

module.exports = User