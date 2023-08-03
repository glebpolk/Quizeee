"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const questionData = [
      {
        quest: "Вопрос 1",
        aswer: "Ответ 1",
        thene_id: 1,
      },
      {
        quest: "Вопрос 2",
        aswer: "Ответ 2",
        thene_id: 1,
      },
      {
        quest: "Вопрос 3",
        aswer: "Ответ 3",
        thene_id: 1,
      },
      {
        quest: "Вопрос 4",
        aswer: "Ответ 4",
        thene_id: 1,
      },
      {
        quest: "Вопрос 5",
        aswer: "Ответ 5",
        thene_id: 1,
      },
      {
        quest: "Вопрос 1",
        aswer: "Ответ 1",
        thene_id: 2,
      },
      {
        quest: "Вопрос 2",
        aswer: "Ответ 2",
        thene_id: 2,
      },
      {
        quest: "Вопрос 3",
        aswer: "Ответ 3",
        thene_id: 2,
      },
      {
        quest: "Вопрос 4",
        aswer: "Ответ 4",
        thene_id: 2,
      },
      {
        quest: "Вопрос 5",
        aswer: "Ответ 5",
        thene_id: 2,
      },
    ];
    const questions = questionData.map((question) => ({
      ...question,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Questions", questions);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions");
  },
};
