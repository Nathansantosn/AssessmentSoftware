const sequelize = require('config/database')
const { DataTypes} = require('sequelize')

const CasoDeTeste = sequelize.define('CasoDeTeste',{

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

    cenario:{
         type: DataTypes.STRING,
         allowNull:false
    },

    condicoes:{
        type: DataTypes.STRING,
        allowNull:false
    },

    acao:{
        type: DataTypes.STRING,
        allowNull:false
    },

    dados:{
        type: DataTypes.STRING,
        allowNull:false
    },

    resultadoEsperado:{
        type: DataTypes.STRING,
        allowNull:false
    },

    comentario:{
        type: DataTypes.STRING,
        allowNull:false
    }
})