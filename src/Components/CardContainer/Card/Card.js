import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'
import favoriteButton from '../../../assets/logo.png'

export default function Card ({ card, clickedCard }) {
  const data = Object.entries(card).map(([key, value], index) => {
    if (key !== 'favorited') {
      return (
        <h6 key={value + index}>{key}: {value}</h6>
      )
    }
  })
  return (
    <article>
      <img
        onClick={() => clickedCard(!card.favorited, card)}
        className={card.favorited ? 'active' : 'not-active'}
        src={favoriteButton}
        alt="Star Wars Rebel Alliance Logo"
      />
      {data}
    </article>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  clickedCard: PropTypes.func.isRequired
}
