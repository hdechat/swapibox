import React from 'react';
import PropTypes from 'prop-types';
import './TextScroll.scss';

const TextScroll = ({ textCrawl }) => {
  return (
    <div>
      <p>{textCrawl.text}</p>
      <p>{textCrawl.title}</p>
      <p>{textCrawl.released}</p>
    </div>
  )
}

TextScroll.propTypes = {
  textCrawl: PropTypes.object
}

export default TextScroll;
