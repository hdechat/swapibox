import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ category, callback }) => {
  const clickHandler = (event) => {
    event.preventDefault();
    document.querySelectorAll('button').forEach(button => {
      button.classList.toggle('active', button === event.target);
    })
    callback();
  }

  return(
    <button
    onClick={ clickHandler }
    className={category === 'favorites' ? "favorites" : category}>
    {category}
    </button>
  )
}

Button.propTypes = {
  category: PropTypes.string,
  callback: PropTypes.func
}

export default Button;