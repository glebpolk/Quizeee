require('@babel/register');
const ssr = require('./middleware/ssr');
const express = require('express');



const app = express();

const PORT = 3000;

app.use(ssr);
app.use(express.json())

app.listen(PORT, () => {
  console.log(`решаем вопросы на ${PORT} `);
});