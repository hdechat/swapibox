import React, { Component } from 'react';
import './App.css';
import cleanFilmData from '../cleaners.js'
import filmData from '../mockFilmData.js'
import TextScroll from '../TextScroll/TextScroll.js'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textCrawl: {}
    } 
  }

  componentDidMount() {
    const textCrawl = cleanFilmData(filmData);
    this.setState({ textCrawl });
  }

  render() {
    return (
      <div>
        <aside>
          <TextScroll textCrawl={this.state.textCrawl} />
        </aside>
      </div>

    );
  }
}