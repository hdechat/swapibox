import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ card }) => {
  return (
    <article>
     <h2>{card.name}</h2>
     <h5>Species: {card.species}</h5>
     <h5>Homeworld: {card.homeworld}</h5>
     <p>pop: {card.population}</p>

    </article>
  )
}

Card.propTypes = {
  card: PropTypes.object
}

export default Card;