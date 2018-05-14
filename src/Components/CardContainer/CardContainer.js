import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card/Card.js'
import './CardContainer.css'

const CardContainer = ({ cardList, clickedCard }) => {
  const cards = cardList.map((card, index) => {
    return (
      <Card key={index} card={card} clickedCard={clickedCard}/>
    )
  })

  return (
    <section>
      <h1 className={cardList.length ? 'cards-to-display' : 'no-cards'}>
      There Are No Cards To Display</h1>
      {cards}
    </section>
  )
}

CardContainer.propTypes = {
  cardList: PropTypes.array.isRequired
}

export default CardContainer
