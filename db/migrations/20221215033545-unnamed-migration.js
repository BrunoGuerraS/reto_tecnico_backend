'use strict';

const {USER_TABLE, UserSchema} = require('../models/user.model')
const {POLIZA_TABLE, PolizaSchema} = require('../models/poliza.model')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(POLIZA_TABLE, PolizaSchema)

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE, UserSchema)
    await queryInterface.dropTable(POLIZA_TABLE, PolizaSchema)
  }
};
