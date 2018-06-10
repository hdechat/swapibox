import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'
import favoriteButton from '../../../assets/logo.png'
// import favorited from '../../../assets/logo-red.png'

export default function Card ({ card, clickedCard }) {
  const data = Object.entries(card).map(([key, value], index) => {
    if (key !== 'favorited') {
      if(index === Object.entries(card).length - 1) {
        return (
          <p key={value + index}>{key}: {value}</p>
        ) 
      } else {
        return (
          <h6 key={value + index}>{key}: {value}</h6>
        )
    }
  }
})

  return (
    <article>
      <img
        onClick={() => clickedCard(!card.favorited, card)}
        className={card.favorited ? 'active' : ''}
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
