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
          <div className="card-item">
            <h6 className="card-item-key" key={value + index}>{key}:</h6>
            <h6 className="card-item-value">{value}</h6>
          </div>
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
