"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const questionData = [
      {
        quest: "Что на самом деле представляет из себя легендарный зеленый код из «Матрицы»?",
        answer: "Рецепт суши",
        theme_id: 1,
      },
      {
        quest: "«Игра на понижение» Майкл Берри назвал свою компанию хедж-фонда Scion Capital в честь своей любимой детской книги, как называется книга?",
        answer: "Отцы Шаннары",
        theme_id: 1,
      },
      {
        quest: "«Ненависть» Сколько лет было Венсану Касселю, играющему подростка, на момент съемок?",
        answer: "28",
        theme_id: 1,
      },
      {
        quest: "«Банши Инишерина» Колм хвастливо заявляет, что хочет писать музыку, которая будет жить вечно — как и музыка ...?",
        answer: "Моцарта",
        theme_id: 1,
      },
      {
        quest: "Сколько всего на данный момент существует фильмов о Джеймсе Бонде?",
        answer: "25",
        theme_id: 1,
      },
      {
        quest: "Кто проживает на дне океана?",
        answer: "Губка Боб Квадратные Штаны",
        theme_id: 2,
      },
      {
        quest: "Правда ли, что Патрик и улитка Гэри являются родственниками?",
        answer: "Да",
        theme_id: 2,
      },
      {
        quest: "Существует ли город Бикини Боттом в реальной жизни?",
        answer: "Да",
        theme_id: 2,
      },
      {
        quest: "Сквидвард является Кальмаром?",
        answer: "Нет",
        theme_id: 2,
      },
      {
        quest: "14 июля  губке Бобу исполнилось ?",
        answer: "37 лет",
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
