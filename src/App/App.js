import React, { Component } from 'react';
import './App.css';
import TextScroll from '../TextScroll/TextScroll.js';
import Button from '../Button/Button.js';
import CardContainer from '../CardContainer/CardContainer.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textCrawl: {},
      cardList: [],
      favorites: [],
      //Refactor: inital fetch to get links to categories
      // peopleLink: null,
      // vehicleLink: null,
      // planetsLink: null
    } 
  }

  async componentDidMount() {
    const data = await this.fetchTextCrawl();
    this.setState(
      { textCrawl: {
        'title': data.title,
        'text': data.opening_crawl,
        'released': data.release_date
      }}
    );
  }

  fetchTextCrawl = async () => {
    let randomFilm = Math.floor(Math.random() * 7 + 1);
    const response = await fetch(`https://swapi.co/api/films/${randomFilm}`);
    return await response.json();
  }

  clickedCard = (faved, card) => {
    const upDatedCard = {...card, favorited: faved}
    const upDatedCardList = this.state.cardList
      .map(person => card.name === person.name ? upDatedCard : person);
    this.setState({ cardList: upDatedCardList });

    if(faved) {
      this.setState({ favorites: [...this.state.favorites, upDatedCard] });
    } else {
      const upDatedFaves = this.state.favorites.filter(fave => fave.name !== card.name);
      this.setState({ favorites: upDatedFaves});
      document.querySelector('.favorites').classList.value.includes('active') ? this.setState({ cardList: upDatedFaves }) : '';
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
    let peopleCards = [];

    //there are 9 pages of data available. to fetch all 9 pages change the iteration length to 10.
    for(let i = 1; i < 2; i++) { 
      const response = await fetch(`https://swapi.co/api/people/?page=${i}`);
      const data = await response.json();
      const cards = await this.createPeopleData(data.results);

      while(cards.length) {
          peopleCards.push({...cards.shift(), ...cards.shift(), favorited: false});
      }
    }

    const mergedCards = peopleCards.map(card => {
      const favorited = this.state.favorites.find(fave => fave.name === card.name);
      return (favorited ? favorited : card);
    });

    this.setState({ cardList: mergedCards });
  }

  showFavorites = () => {
    // if(!this.state.favorites.length) {
    //   document.querySelector('section').innerHTML = '<h1>No Favorite Cards</h1>';
    // }
    this.setState({ cardList: this.state.favorites });
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