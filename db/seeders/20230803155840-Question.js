"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const questionData = [
      {
        quest: "Вопрос 1",
        answer: "Ответ 1",
        theme_id: 1,
      },
      {
        quest: "Вопрос 2",
        answer: "Ответ 2",
        theme_id: 1,
      },
      {
        quest: "Вопрос 3",
        answer: "Ответ 3",
        theme_id: 1,
      },
      {
        quest: "Вопрос 4",
        answer: "Ответ 4",
        theme_id: 1,
      },
      {
        quest: "Вопрос 5",
        answer: "Ответ 5",
        theme_id: 1,
      },
      {
        quest: "Вопрос 1",
        answer: "Ответ 1",
        theme_id: 2,
      },
      {
        quest: "Вопрос 2",
        answer: "Ответ 2",
        theme_id: 2,
      },
      {
        quest: "Вопрос 3",
        answer: "Ответ 3",
        theme_id: 2,
      },
      {
        quest: "Вопрос 4",
        answer: "Ответ 4",
        theme_id: 2,
      },
      {
        quest: "Вопрос 5",
        answer: "Ответ 5",
        theme_id: 2,
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
