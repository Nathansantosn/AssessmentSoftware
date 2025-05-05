const sequelize = require('config/database')
const { DataTypes} = require('sequelize')

const Questao = sequelize.define('Questao',{

    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        prrimatyKey:true
    },

    id_sistema:{
        type: Sequelize.INTEGER,
        references: 'Sistema', 
        referencesKey: 'id' 

    },

    id_matricula: {
        type: Sequelize.INTEGER,
        references: 'User', 
        referencesKey: 'id_matricula' 
    },
    id_criterio: {
        type: Sequelize.INTEGER,
        references: 'Criterio', 
        referencesKey: 'id' 
    },
    id_subCriterio: {
        type: Sequelize.INTEGER,
        references: 'SubCriterio', 
        referencesKey: 'id' 
    },

    descricao:{
        type: DataTypes.STRING,
        allowNull:false
    }

})