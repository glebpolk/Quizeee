const React = require("react");
const Layout = require("./Layout");

function RegisterForm({ title }) {
  return (
    <Layout title={title}>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form>
          <div className="mb-3">
            <label html="exampleInputEmail1" className="form-label">
              Имя игрока
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              ariaDescribedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label html="exampleInputPassword1" className="form-label">
              Пароль
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = RegisterForm;
