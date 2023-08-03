"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const themesData = [
      {
        name: "Для Влада",
      },
      {
        name: "Общие",
      },
    ];
    const themes = themesData.map((theme) => ({
      ...theme,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Themes", themes);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Themes");
  },
};
