import React, { Component } from 'react';
import './App.css';
import TextScroll from '../Components/TextScroll/TextScroll.js';
import Button from '../Components/Button/Button.js';
import CardContainer from '../Components/CardContainer/CardContainer.js';
import ApiCalls from '../ApiCalls/ApiCalls.js'
const call = new ApiCalls();

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryLinks: {},
      textCrawl: {},
      cardList: [],
      favorites: [],
    } 
  }

  async componentDidMount() {
    const categoryLinks = await call.fetchCall('https://swapi.co/api');
    this.setState({ categoryLinks });

    let randomFilm = Math.floor(Math.random() * 7 + 1);
    const movieText = await call.fetchCall(this.state.categoryLinks.films + randomFilm);
    const textCrawl = {
        'title': movieText.title,
        'text': movieText.opening_crawl,
        'released': movieText.release_date
      }

    this.setState({ textCrawl });

    for( let i=0; i<localStorage.length; i++) {
      const key = localStorage.key(i)
      this.state.favorites.push(JSON.parse(localStorage.getItem(key)))
    }
    this.setState({ favorites: this.state.favorites });
  }

  setToStorage(card) {
    const stringified = JSON.stringify(card)
    localStorage.setItem(card.name, stringified);
  }

  getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  clickedCard = (faved, card) => {
    const upDatedCard = {...card, favorited: faved}
    const upDatedCardList = this.state.cardList
      .map(person => card.name === person.name ? upDatedCard : person);

    this.setState({ cardList: upDatedCardList });

    faved ? this.addToFavorites(upDatedCard) : this.removeFromFavorites(card);
  }

  addToFavorites(card) {
    this.setToStorage(card);
    this.setState({ favorites: [...this.state.favorites, card] });
  }

  removeFromFavorites(card) {
    localStorage.removeItem(card.name)
    const upDatedFaves = this.state.favorites.filter(fave => fave.name !== card.name);
    this.setState({ favorites: upDatedFaves });

    if(document.querySelector('.favorites').classList.value.includes('active')) {
      this.setState({ cardList: upDatedFaves });
    }
  }

  showFavorites = () => {
    this.setState({ cardList: this.state.favorites });
  }

  //create helper file and move the guts into there. can the only call back be thue update?
  //rename thse callbacks to 'render' instead of fetch

  fetchPeople = async () => {
    const peopleData = await call.fetchCall(this.state.categoryLinks.people);
    const cleanPeopleData = await call.cleanPeopleData(peopleData.results);
    this.updateCardListToRender(cleanPeopleData);
  }

  fetchVehicles = async () => {
    const vehiclesData = await call.fetchCall(this.state.categoryLinks.vehicles);
    const cleanVehiclesData = call.cleanVehiclesData(vehiclesData.results);
    this.updateCardListToRender(cleanVehiclesData);
  }

  fetchPlanets = async () => {
    const planetsData = await call.fetchCall(this.state.categoryLinks.planets);
    const cleanPlanetsData = await call.cleanPlanetsData(planetsData.results);
    this.updateCardListToRender(cleanPlanetsData);
  }

  updateCardListToRender = (data) => {
    const cardList = data.map(card => {
      const favorited = this.state.favorites.find(fave => fave.name === card.name);
      return (favorited ? favorited : card);
    })
    this.setState({ cardList });
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
            <Button category={"People"} callback={this.fetchPeople} />
            <Button category={"Vehicles"} callback={this.fetchVehicles} />
            <Button category={"Planets"} callback={this.fetchPlanets} />
          </div>
          <CardContainer clickedCard={this.clickedCard} cardList={this.state.cardList}/>
        </main>
      </div>
    );
  }
}