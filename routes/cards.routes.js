const router = require('express').Router();
const { Theme } = require('../db/models');
const CardsPage = require('../components/CardsPage');
const CardItem = require('../components/CardItem');

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll();
    const document = res.renderComponent(CardsPage, { title: 'Cards Page', themes });
    res.send(document);
  } catch ({ message }) {
    res.json(message);
  }
});


router.get('/:cardId', async (req, res) => {
  const { cardId } = req.params;
  try {
    const question = await Theme.findAll({ where: { id: cardId } });
    const document = res.renderComponent(CardItem, { question, title: 'Card page' });
    res.send(document);
  } catch ({ message }) {
    res.json(message);
  }
});


module.exports = router;