const router = require("express").Router();
const RegisterForm = require("../components/RegisterForm");
const { User } = require('../db/models');

router.get("/", (req, res) => {
  const document = res.renderComponent(RegisterForm, {
    title: "Register Page",
  });
  res.send(document);
});

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);
    if (name.trim()){
      const user = await User.create({name});
      res.json({ message: 'ok' });
      return;
    }else {
      res.json({ message: 'Заполните поле Имя' });
      return;
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
