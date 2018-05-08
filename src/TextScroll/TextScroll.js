import React from 'react';
import PropTypes from 'prop-types';
import './TextScroll.css';

const TextScroll = ({ textCrawl }) => {
  return (
    <div className="textScroll">
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
