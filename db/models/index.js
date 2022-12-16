const { User, UserSchema } = require('./user.model')
const { Poliza, PolizaSchema} = require('./poliza.model')

function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize))
    Poliza.init(PolizaSchema, Poliza.config(sequelize))

    User.associate(sequelize.models)
    Poliza.associate(sequelize.models)

}

module.exports = setupModels
