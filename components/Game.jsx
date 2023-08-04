const React = require('react');
const Layout = require('./Layout');

function Game({ question }) {
  return (
    <Layout game={game}>
      <div
        className="cardGame container"
        style={{
          width: '1000px'
        }}
      >
        <div
          class="alert alert-success"
          role="alert"
          style={{ marginTop: '150px' }}
        >
          {game.quest}
        </div>

        <div className="card-body">
          <label for="inputPassword5" class="form-label">
            Ваш ответ:
          </label>
          <input
            type="password"
            id="inputPassword5"
            class="form-control"
            aria-describedby="passwordHelpBlock"
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <a href="#" className="btn btn-primary" style={{ margin: '20px' }}>
              Отправить ответ
            </a>
            <a href="#" className="btn btn-primary" style={{ margin: '20px' }}>
              Следующий вопрос
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Game;
