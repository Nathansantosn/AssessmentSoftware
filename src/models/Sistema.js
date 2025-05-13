const sequelize = require('config/database')
const { DataTypes} = require('sequelize')

const Sistema = sequelize.define('Sistema',{
    
    
    nome:{
        type: DataTypes.STRING,
        allowNull:false
    },
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    id_matricula: {
        type: Sequelize.INTEGER,
        references: 'User', 
        referencesKey: 'id_matricula' 
  }


})