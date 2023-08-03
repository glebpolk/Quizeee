const React = require("react");

function Game({ question }) {
  return (
    <div
      className="cardGame"
      style={{ margin: "200px", display: "flex", justifyContent: "center" }}
    >
      <div class="alert alert-success" role="alert">
        Лучший человек на земле?
      </div>

      <div
        className="card-body"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <label for="inputPassword5" class="form-label">
          Ваш ответ:
        </label>
        <input
          type="password"
          id="inputPassword5"
          class="form-control"
          aria-describedby="passwordHelpBlock"
        />
        <a href="#" className="btn btn-primary">
          Отправить ответ
        </a>
        <a href="#" className="btn btn-primary">
          Следующий вопрос
        </a>
      </div>
    </div>
  );
}

module.exports = Game;
