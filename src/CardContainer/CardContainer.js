import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card/Card.js';
import './CardContainer.css';

class CardContainer extends Component {

  componentDidMount() {
    //fetch data based on button click category
  }


  render() {
    const cards = this.props.cardList.map((card, index) => {
      return(
        <Card key={index} card={card} clickedCard={this.props.clickedCard}/>
      )
    });
    return(
      <section>
        {cards}
      </section>
    )
  }
}

CardContainer.propTypes = {
  cardList: PropTypes.array
}

export default CardContainer;