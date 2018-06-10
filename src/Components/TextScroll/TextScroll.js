import React from 'react'
import PropTypes from 'prop-types'
import starWarsAudio from '../../assets/star-wars.mp3'
import './TextScroll.css'

const TextScroll = ({ textCrawl }) => {
  return (
    <div className="textcrawl-container">
      <audio autoPlay>
        <source src={starWarsAudio} type="audio/mpeg" />
      </audio>
      <button onClick={() => document.querySelector('aside').style.display = 'none'}>Click</button>
      <section className="star-wars">
        <div className="crawl">
          <p>{textCrawl.text}</p>
          <p>{textCrawl.title}</p>
          <p>{textCrawl.released}</p>
        </div>
      </section>
    </div>
  )
}

TextScroll.propTypes = {
  textCrawl: PropTypes.object.isRequired
}

export default TextScroll
