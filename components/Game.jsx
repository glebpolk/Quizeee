const React = require("react");
const Layout = require("./Layout");

function Game({ question }) {
  return (
    <Layout question={question}>
      <form
        id="form-answ"
        data-theme={question.theme_id}
        data-question={question.id}
      >
        <div
          className="cardGame container"
          style={{
            width: "1000px",
          }}
        >
          <div
            class="alert alert-success"
            role="alert"
            style={{ marginTop: "150px" }}
          >
            {question.quest}
          </div>

          <div className="card-body">
            <label for="inputPassword5" class="form-label">
              Ваш ответ:
            </label>
            <input
              name="answer"
              type="text"
              id="inputPassword5"
              class="form-control"
              aria-describedby="passwordHelpBlock"
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button type="submit" className="btn btn-primary">
                Проверить ответ
              </button>
              <a
                href={`/game/${question.theme_id}/question/${question.id + 1}`}
                className="btn btn-primary"
                style={{ margin: "20px" }}
              >
                Следующий вопрос
              </a>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

module.exports = Game;
