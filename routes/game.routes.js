const router = require("express").Router();
const Game = require("../components/Game");

router.get("/", (req, res) => {
  const document = res.renderComponent(Game, { title: "Game Page" });
  res.send(document);
});

module.exports = router;
