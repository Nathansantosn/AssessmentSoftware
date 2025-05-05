const sequelize = require('config/database')
const { DataTypes} = require('sequelize')

const Criterio = sequelize.define('Criterio',{
        

        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            prrimatyKey:true
        },

        nome:{
            type: DataTypes.STRING,
            allowNull:false
        },
        
        descricao:{
            type: DataTypes.STRING,
            allowNull:false
        },
        id_matricula: {
            type: Sequelize.INTEGER,
            references: 'User', 
            referencesKey: 'id_matricula' 
      }
        
        

})