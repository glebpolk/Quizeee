const router = require("express").Router();
const RegisterForm = require("../components/RegisterForm");

router.get("/", (req, res) => {
  const document = res.renderComponent(RegisterForm, {
    title: "Register Page",
  });
  res.send(document);
});

module.exports = router;
