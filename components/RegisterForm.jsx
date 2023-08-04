const React = require('react');
const Layout = require('./Layout');

function RegisterForm({ title }) {
  return (
    <Layout title={title}>
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form
          id="form-reg"
          style={{
            marginTop: '150px',
          }}
        >
          <div className="mb-3">
            <label
              html="exampleInputEmail1"
              className="form-label"
              style={{ display: 'flex',
              justifyContent: 'center',
            marginBottom: '20px' }}
            >
              Введите ваше имя:
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              ariaDescribedby="emailHelp"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginLeft: '10px' }}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = RegisterForm;
