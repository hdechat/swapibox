import React, { Component } from 'react';
import './App.css';
import cleanFilmData from '../cleaners.js'
// import filmData from '../mockFilmData.js'
import TextScroll from '../TextScroll/TextScroll.js'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textCrawl: {}
    } 
  }

  componentDidMount() {
    //mock data
    // const textCrawl = cleanFilmData(filmData);
    // this.setState({ textCrawl });

    let randomFilm = Math.floor(Math.random() * 7 + 1)
     fetch(`https://swapi.co/api/films/${randomFilm}`)
    .then(data => data.json())
    .then(data => {
      const textCrawl = cleanFilmData(data);
      this.setState({ textCrawl });
    })
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