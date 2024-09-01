'use strict';
const { PRODUCT_TABLE,productSchemas } = require('../models/products.model');
const { CATEGORY_TABLE,categorySchemas } = require('../models/category.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PRODUCT_TABLE, productSchemas);
    await queryInterface.createTable(CATEGORY_TABLE, categorySchemas);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
