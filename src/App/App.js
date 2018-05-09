import React, { Component } from 'react';
import './App.css';
import cleanFilmData from '../cleaners.js';
import filmData from '../mockFilmData.js';
import TextScroll from '../TextScroll/TextScroll.js';
import Button from '../Button/Button.js';
import CardContainer from '../CardContainer/CardContainer.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textCrawl: {},
      cardList: []
    } 

  }

  componentDidMount() {
    
    const textCrawl = cleanFilmData(filmData);
    this.setState({ textCrawl });

    // let randomFilm = Math.floor(Math.random() * 7 + 1)
    //  fetch(`https://swapi.co/api/films/${randomFilm}`)
    // .then(data => data.json())
    // .then(data => {
    //   const textCrawl = cleanFilmData(data);
    //   this.setState({ textCrawl });
    // })
  }
  
  render() {
    return (
      <div className="background">
        <aside>
          <TextScroll textCrawl={this.state.textCrawl} />
        </aside>
        <main>
          <Button category={"favorites"} callback={()=>{}} />
          <Button category={"People"} callback={()=>{}} />
          <Button category={"Vehicles"} callback={()=>{}} />
          <Button category={"Planets"} callback={()=>{}} />
          <CardContainer cardList={this.state.cardList}/>
        </main>
      </div>

    );
  }
}