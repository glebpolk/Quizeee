require("@babel/register");
const ssr = require("./middleware/ssr");
const path = require('path');
const express = require("express");

const app = express();

const PORT = 3000;

app.use(ssr);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const gameRouter = require("./routes/game.routes");
const themesRouter = require("./routes/cards.routes");
const authRouter = require("./routes/auth.routes");

app.use("/game", gameRouter);
app.use("/themes", themesRouter);
app.use("/", authRouter);

app.listen(PORT, () => {
  console.log(`решаем вопросы на ${PORT} `);
});
