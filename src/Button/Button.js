import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ category, callback }) => {
  return(
    <button
    onClick={()=>{}}
    className={category === 'favorites' ? "favorites" : "category"}>
    {category}
    </button>
  )
}

Button.propTypes = {
  category: PropTypes.string,
  callback: PropTypes.func
}

export default Button;