import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ card, clickedCard }) {
  // constructor(props) {
  //   super(props);

  //     this.name = props.card.name;
  //     this.species = props.card.species;
  //     this.homeworld = props.card.homeworld;
  //     this.population = props.card.population;
  //     this.favorited = false;
  // }

 

  // render() {
    return (
      <article>
      <img
        onClick={() => clickedCard(!card.favorited, card)}
        className={card.favorited ? "active" : "not-active"}
        src="./../assets/logo.png"
        alt="Star Wars Rebel Alliance Logo" />
      <h2>{card.name}</h2>
      <h5>Species: {card.species}</h5>
      <h5>Homeworld: {card.homeworld}</h5>
      <p>population: {card.population}</p>
      </article>
    )
  // }
}

Card.propTypes = {
  card: PropTypes.object,
  clickedCard: PropTypes.func
}