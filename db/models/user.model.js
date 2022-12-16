const {Model, DataTypes, Sequelize} = require('sequelize');

const USER_TABLE = "user"

const UserSchema = {
    id:{
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true
    },
    email:{
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING
    },
    phone:{
        allowNull: true,
        type: DataTypes.STRING
    },
    role:{
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'customer'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
}

class User extends Model {
    static associate(models) {
        this.hasMany(models.Poliza, {
            as: 'poliza',
            foreignKey: 'userId'
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = { USER_TABLE, UserSchema, User }
