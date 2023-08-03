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


module.exports = router;