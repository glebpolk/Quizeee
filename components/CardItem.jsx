const React = require('react');

function CardItem({card}){
  
  return(
<div data-id ={card.id} class="card" style={{width: "18rem",  margin: '20px'}}>
  <img  src="https://neiros.ru/images/49d7e4a8175790506f244b6570089e64.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">{card.name}</p>
  </div>
  <a href={`/game/${card.id}/question/1`} class="btn btn-primary">
          Играть!
        </a>
</div>

  )
}


module.exports = CardItem;