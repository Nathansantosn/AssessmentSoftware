const sequelize = require('config/database')
const { DataTypes} = require('sequelize')

const PlanoDeTeste = sequelize.define('PlanoDeTeste',{

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

    introducao:{
         type: DataTypes.STRING,
         allowNull:false
    },

    avaliacao:{
        type: DataTypes.STRING,
        allowNull:false
    },

    abordagem:{
        type: DataTypes.STRING,
        allowNull:false
    },

    conograma:{
        type: DataTypes.DATE,
        allowNull:false
    },

    relatorio:{
        type: DataTypes.STRING,
        allowNull:false
    }
})