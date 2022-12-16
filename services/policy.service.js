const { models } = require('../libs/sequelize')

class PolicyService {
    constructor(){}
    async create(data){
        const newPolicy = await models.Poliza.create(data)
        return newPolicy
    }

    async find(){

        try {
          const policy = await models.Poliza.findAll()
          return policy

        } catch (error) {
            console.error(error)
            return error
        }
    }

    async findOne(id){
        const policy = await models.Policy.findByPk(id)
        return policy
    }

    async upDate(id, changes) {
        const policy = await models.Policy.findByPk(id)
        const udpatepolicy = await policy.update(changes)
        return udpatepolicy
    }

    async delete(id) {
        const policy = await models.Policy.findByPk(id)
        const deletepolicy = await policy.destroy()
        return ( 'success delete' )
    }

}




module.exports = PolicyService
