import cards from '../../../data/cardData';
import Card from './Card';

function Cards() {
  return (
    <div className="row">
      {cards &&
        cards.length > 0 &&
        cards.map((card) => <Card key={card._id} card={card} />)}
    </div>
  );
};

export default Cards;
