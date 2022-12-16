const { models } = require('../libs/sequelize')
const bcrypt = require('bcrypt');


class UserService {
    constructor(){}
    async create(data){
        const hash = await bcrypt.hash(data.password, 10);
        const newUser = await models.User.create({
            ...data,
            password: hash
          });
        delete newUser.dataValues.password;
        return newUser;
    }

    async find(){
        const user = await models.User.findAll(
            {
                include: ['poliza']
            }
        )

        return user
    }

    async finByEmail(email){
        console.log('entre')
        const user = await models.User.findOne({
            where: { email }
        })
        return user
    }

    async findOne(id){
        const user = await models.User.findByPk(id)
        return user
    }

    async upDate(id, changes) {
        const user = await models.User.findByPk(id)
        const udpateUser = await user.update(changes)
        return udpateUser
    }

    async delete(id) {
        const user = await models.User.findByPk(id)
        const deleteUser = await user.destroy()
        return ( 'success delete' )
    }

}

module.exports = UserService
