import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: false
    }
  }

  favoriteCard = () => {
    const clickedState = !this.state.favorited
    this.setState({ favorited: clickedState })
    this.props.clickedCard(clickedState, this.props.card);
  }

  render() {
    return (
      <article>
      <img
        onClick={this.favoriteCard}
        className={this.state.favorited ? "active" : "not-active"}
        src="./../assets/logo.png"
        alt="Star Wars Rebel Alliance Logo" />
      <h2>{this.props.card.name}</h2>
      <h5>Species: {this.props.card.species}</h5>
      <h5>Homeworld: {this.props.card.homeworld}</h5>
      <p>population: {this.props.card.population}</p>
      </article>
    )
  }
}

Card.propTypes = {
  card: PropTypes.object
}