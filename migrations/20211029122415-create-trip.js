'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.INTEGER
      },
      accomodation: {
        type: Sequelize.STRING
      },
      transportation: {
        type: Sequelize.STRING
      },
      eat: {
        type: Sequelize.STRING
      },
      day: {
        type: Sequelize.STRING
      },
      night: {
        type: Sequelize.STRING
      },
      dateTrip: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.INTEGER
      },
      quota: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('trips');
  }
};