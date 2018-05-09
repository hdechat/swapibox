import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ card }) => {
  return (
    <article>
      THIS IS A CARD FOOL!
    </article>
  )
}

Card.propTypes = {
  card: PropTypes.object
}

export default Card;