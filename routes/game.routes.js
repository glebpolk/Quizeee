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
    const game = await Question.findOne({ where: { theme_id: gameId, id: questionId } });
    console.log(game)
    const document = res.renderComponent(Game, { game, title: 'Game page' });
    res.send(document);
  } catch ({ message }) {
    res.json(message);
  }
});
module.exports = router;
