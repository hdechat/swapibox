import React from 'react'
import PropTypes from 'prop-types'
import './TextScroll.css'

const TextScroll = ({ textCrawl }) => {
  return (
    <div>
      <div className="textScroll">
        <p>{textCrawl.text}</p>
        <p>{textCrawl.title}</p>
        <p>{textCrawl.released}</p>
      </div>
      <button onClick={() => document.querySelector('aside').style.display = 'none'}>Click</button>
    </div>
  )
}

TextScroll.propTypes = {
  textCrawl: PropTypes.object.isRequired
}

export default TextScroll
