require("@babel/register");
const ssr = require("./middleware/ssr");
const express = require("express");

const app = express();

const PORT = 3000;

app.use(ssr);
app.use(express.json());

const gameRouter = require("./routes/game.routes");

app.use("/game", gameRouter);

const themesRouter = require('./routes/cards.routes');

app.use('/themes',themesRouter)

app.listen(PORT, () => {
  console.log(`решаем вопросы на ${PORT} `);
});
