import React, { Component } from 'react';
import './App.css';
import TextScroll from '../TextScroll/TextScroll.js';
import Button from '../Button/Button.js';
import CardContainer from '../CardContainer/CardContainer.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.favorites = [];
    this.state = {
      textCrawl: {},
      cardList: []
    } 
  }

  async componentDidMount() {
    let randomFilm = Math.floor(Math.random() * 7 + 1);

    const response = await fetch(`https://swapi.co/api/films/${randomFilm}`);
    const data = await response.json();
    this.setState(
      { textCrawl: {
        'title': data.title,
        'text': data.opening_crawl,
        'released': data.release_date
      }}
    );
  }

  clickedCard = (faved, card) => {
    console.log(faved)
    if(faved) {
      this.favorites.push(card);
    } else {
      let unFave = this.favorites.findIndex(person => person.name === card.name);
      this.favorites.splice(unFave, 1);
    }
  } 

  fetchHomeData = async ({ homeworld, name }) => {
    const response = await fetch(homeworld);
    const data = await response.json();
    return await {name: name, homeworld: data.name, population: data.population};
  }

  fetchSpeciesData = async (person) => {
    const response = await fetch(...person.species);
    const data = await response.json();
    return await {species: data.name};
  }

  createPeopleData = (people) => {
    const peopleData = people.reduce((arr, person) => {
      if(person.species.length) {
        const species = this.fetchSpeciesData(person)
      return [...arr, species, this.fetchHomeData(person)];
      } else {
        return [...arr, {species: 'unknown'}, this.fetchHomeData(person)];
      }
    }, []);
    return Promise.all(peopleData);
  }

  fetchPeopleList = async () => {
    for(let i = 1; i < 10; i++) { 
      const response = await fetch(`https://swapi.co/api/people/?page=${i}`);
      const data = await response.json();
      const cards = await this.createPeopleData(data.results);

      let mergedCards = [];

      while(cards.length) {
          mergedCards.push({...cards.shift(), ...cards.shift()});
        }

      this.setState({ cardList: [...this.state.cardList, ...mergedCards] });
    }
  }

  showFavorites = () => {
    this.setState({ cardList: this.favorites});
  }
  
  render() {
    return (
      <div className="background">
        <aside>
          <TextScroll textCrawl={this.state.textCrawl} />
        </aside>
        <main>
          <div className="buttons">
          <Button category={"favorites"} callback={this.showFavorites} />
          <Button category={"People"} callback={this.fetchPeopleList} />
          <Button category={"Vehicles"} callback={()=>{}} />
          <Button category={"Planets"} callback={()=>{}} />
          </div>
          <CardContainer clickedCard={this.clickedCard} cardList={this.state.cardList}/>
        </main>
      </div>

    );
  }
}