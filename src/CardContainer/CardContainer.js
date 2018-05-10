import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card/Card.js';
import './CardContainer.css';

const CardContainer = ({ cardList, clickedCard }) => {
  const cards = cardList.map((card, index) => {
    return(
      <Card key={index} card={card} clickedCard={clickedCard}/>
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