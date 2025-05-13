const sequelize = require('config/database')
const { DataTypes} = require('sequelize')

const Teste = sequelize.define('Teste',{

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

        id_planoDeTeste:{
        type: Sequelize.INTEGER,
        references: 'PlanoDeTeste', 
        referencesKey: 'id' 

    },

    id_casoDeTeste:{
        type: Sequelize.INTEGER,
        references: 'CasoDeTeste', 
        referencesKey: 'id' 

    }

})