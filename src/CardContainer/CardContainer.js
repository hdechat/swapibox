import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card/Card.js';
import './CardContainer.css';

const CardContainer = ({ cardList }) => {
  const cards = cardList.map(card => {
    return(
      <Card card={card}/>
    )
  });

  return(
    <section>
      {cards}
    </section>
  )
}

CardContainer.propTypes = {
  cardList: PropTypes.array
}

export default CardContainer;