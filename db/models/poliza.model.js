const {Model, DataTypes, Sequelize} = require('sequelize');
const { USER_TABLE } = require('./user.model')

const POLIZA_TABLE = 'poliza'

const PolizaSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    typePolicy:{
        field: 'type_policy',
        allowNull: false,
        type: DataTypes.STRING
    },
    plate:{
        allowNull: false,
        type: DataTypes.STRING
    },
    typeCar:{
        allowNull: false,
        field: 'type_Car',
        type: DataTypes.STRING
    },
    age:{
        allowNull: false,
        type: DataTypes.STRING
    },
    price:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: USER_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },

}

class Poliza extends Model {
    static associate(models) {
        this.belongsTo(models.User, {
            as : 'user'
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: POLIZA_TABLE,
            modelName: 'Poliza',
            timestamps: false
        }
    }
}

module.exports = { POLIZA_TABLE, PolizaSchema, Poliza}
