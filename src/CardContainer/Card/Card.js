import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import favoriteButton from '../../assets/logo.png';

export default function Card({ card, clickedCard }) {
 
    return (
      <article>
      <img
        onClick={() => clickedCard(!card.favorited, card)}
        className={card.favorited ? "active" : "not-active"}
        src={favoriteButton}
        alt="Star Wars Rebel Alliance Logo" />
      <h2>{card.name}</h2>
      <h5>Species: {card.species}</h5>
      <h5>Homeworld: {card.homeworld}</h5>
      <p>population: {card.population}</p>
      </article>
    )
}

Card.propTypes = {
  card: PropTypes.object,
  clickedCard: PropTypes.func
}