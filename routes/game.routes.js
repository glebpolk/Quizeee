const router = require("express").Router();
const {Question} = require('../db/models');
const Game = require("../components/Game");

router.get("/", (req, res) => {
  const document = res.renderComponent(Game, { title: "Game Page" });
  res.send(document);
});

router.get('/:gameId/question/:questionId', async (req, res) => {
  const { gameId } = req.params;
  const { questionId } = req.params;
  try {
    const questions = await Question.findAll({ where: { theme_id: gameId } });

    const document = res.renderComponent(Game, {question: questions[questionId-1] }  );
    res.send(document);
  } catch ({ message }) {
    res.json(message);
  }
});
module.exports = router;
