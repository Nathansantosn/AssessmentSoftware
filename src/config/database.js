const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './banco.db'
})

sequelize.authenticate()
    .then(()=>{ console.log("Conexão estabelecida com sucesso")})
    .catch(err => console.log("Não foi possível conectar ao banco: ", err.message))

module.exports = sequelize;