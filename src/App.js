import React, { Component } from 'react';
import './App.css';
import cleanFilmData from './cleaners.js'
import filmData from './mockFilmData.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textCrawl: ''
    } 
  }

  componentDidMount() {
    const textCrawl = cleanFilmData(filmData);
    this.setState({ textCrawl });
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;
