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
    // .then(response => response.json())
    // .then(data => {
    //   const textCrawl = cleanFilmData(data);
    //   this.setState({ textCrawl });
    // })
  }

  createPeopleData = (people) => {
    const peopleData = people.reduce((arr, person) => {
      const nameAndHome = fetch(person.homeworld)
      .then(response => response.json())
      .then(data => ({name: person.name, homeworld: data.name, population: data.population}));

      if(person.species.length > 0) {
      const species = fetch(person.species[0])
      .then(response => response.json())
      .then(data => ({name: person.name, species: data.name}));
      return [...arr, nameAndHome, species]
      } else {
        return [...arr, nameAndHome, {name: person.name, species: person.species}]
      }
    }, []);

    return Promise.all(peopleData);
  }

  fetchPeopleList = () => {
    for(let i = 1; i < 10; i++) { 
      fetch(`https://swapi.co/api/people/?page=${i}`)
      .then(response => response.json())
      .then(data => this.createPeopleData(data.results))
      .then(cards => {
          const mergedCards = cards.reduce((arr, card, index) => {
          return [...arr, {...card, ...cards[index+1]}]
        }, []);
        this.setState({ cardList: [ ...this.state.cardList, ...mergedCards] });
      });
    }
  }
  
  render() {
    return (
      <div className="background">
        <aside>
          <TextScroll textCrawl={this.state.textCrawl} />
        </aside>
        <main>
          <div className="buttons">
          <Button category={"favorites"} callback={()=>{}} />
          <Button category={"People"} callback={this.fetchPeopleList} />
          <Button category={"Vehicles"} callback={()=>{}} />
          <Button category={"Planets"} callback={()=>{}} />
          </div>
          <CardContainer cardList={this.state.cardList}/>
        </main>
      </div>

    );
  }
}