"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("sample_type", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      enabled: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      updatedBy: {
        type: Sequelize.STRING,
      },
      createdDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("sample_type");
  },
};
