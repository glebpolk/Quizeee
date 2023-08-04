const React = require('react');
const Layout = require('./Layout');
const CardItem = require('./CardItem');

function CardsPage({ title, themes }) {
  return (
    <Layout title={title}>
      <h1
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '150px',
          marginBottom: '20px',
        }}
      >
        Доброго вечерочка, дамы и господа!
      </h1>
      <div
        className="container cards-list"
        style={{ display: 'flex', flexWrap: 'wrap', width: '700px' }}
      >
        {themes.map((card) => (
          <CardItem card={card} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = CardsPage;
