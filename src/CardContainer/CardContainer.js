import React from 'react';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ cardList }) => {
  const cards = cardList.map(card => {
    return(
      <Card card={card}/>
    )
  });

  return(
    {cards}
  )
}

CardContainer.PropTypes = {
  cardList: PropTypes.object
}

export default CardContainer;