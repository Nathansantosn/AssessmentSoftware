const sequelize = require('config/database')
const { DataTypes} = require('sequelize')

const User = sequelize.define('User',{
    id_matricula:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull:false
    },
    funcao:{
        type: DataTypes.STRING,
        allowNull:false
    },
    senha:{
        type: DataTypes.INTEGER,
        allowNull:false
    },


})

sequelize.sync()
    .then(()=> console.log("Tabela pessoas sincronizada"))
    .catch(err => console.log("Erro ao sincronizar tabela produtos: ", err))

module.exports = User