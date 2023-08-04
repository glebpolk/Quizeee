const React = require("react");
const Layout = require("./Layout");

function RegisterForm({ title }) {
  return (
    <Layout title={title}>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form id = "form-reg">
          <div className="mb-3">
            <label html="exampleInputEmail1" className="form-label">
              Имя игрока
            </label>
            <input
            name = "name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              ariaDescribedby="emailHelp"
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
