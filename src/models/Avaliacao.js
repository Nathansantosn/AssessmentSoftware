const sequelize = require('config/database')
const { DataTypes} = require('sequelize')

const Avaliacao = sequelize.define('Avaliacao',{

    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        prrimatyKey:true
    },

        id_matricula: {
        type: Sequelize.INTEGER,
        references: 'User', 
        referencesKey: 'id_matricula' 
    },

        id_sistema:{
        type: Sequelize.INTEGER,
        references: 'Sistema', 
        referencesKey: 'id' 

    },

        id_questao:{
        type: Sequelize.INTEGER,
        references: 'Questao', 
        referencesKey: 'id' 

    }

})