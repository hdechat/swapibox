import React from 'react';
import PropTypes form 'prop-types';
import './Button.css';

const Button = ({ category, callback }) => {
  return(
    <button onclick={}>{category}</button>
  )
}

Button.propTypes = {
  category = PropTypes.string,
  callback = PropType.func
}

export default Button;