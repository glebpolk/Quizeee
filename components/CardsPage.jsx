const React = require('react');
const Layout = require('./Layout');
const CardItem = require('./CardItem');

function CardsPage({ title, themes }) {
  
  return (
    <Layout title={title}>
      <h1>Добро пожаловать!</h1>
      <div className="container cards-list"
        style={{ display: 'flex', flexWrap: 'wrap', width: '700px' }} >
        {themes.map((card) => (
          <CardItem card={card} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = CardsPage;