const router = require("express").Router();
const { Question } = require("../db/models");
const Game = require("../components/Game");

router.get("/", (req, res) => {
  const document = res.renderComponent(Game, { title: "Game Page" });
  res.send(document);
});

router.get("/:gameId/question/:questionId", async (req, res) => {
  const { gameId } = req.params;
  const { questionId } = req.params;
  try {
    if (questionId <= 5) {
      const questions = await Question.findAll({ where: { theme_id: gameId } });
      const document = res.renderComponent(Game, {
        question: questions[questionId - 1],
      });
      console.log();
      res.send(document);
    } else {
      res.redirect("/themes");
    }
  } catch ({ message }) {
    res.json(message);
  }
});

router.post("/", async (req, res) => {
  const { answer, question_id, theme_id } = req.body;
  try {
    const answTrue = await Question.findOne({
      where: { id: question_id },
    });
    console.log(answTrue);
    if (answer.trim().toLowerCase() === answTrue.answer.toLowerCase()) {
      res.json({ message: "ok" });
      return;
    } else {
      res.json({ message: "Не верно" });
      return;
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
