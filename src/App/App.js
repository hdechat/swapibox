import React, { Component } from 'react';
import './App.css';
import TextScroll from '../TextScroll/TextScroll.js';
import Button from '../Button/Button.js';
import CardContainer from '../CardContainer/CardContainer.js';
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
  }

  clickedCard = (faved, card) => {
    const upDatedCard = {...card, favorited: faved}
    const upDatedCardList = this.state.cardList
      .map(person => card.name === person.name ? upDatedCard : person);

    this.setState({ cardList: upDatedCardList });

    if(faved) {
      this.addToFavorites(upDatedCard);
    } else {
      this.removeFromFavorites(card);
    }
  }

  addToFavorites(card) {
    this.setState({ favorites: [...this.state.favorites, card] });
  }

  removeFromFavorites(card) {
    const upDatedFaves = this.state.favorites.filter(fave => fave.name !== card.name);
    this.setState({ favorites: upDatedFaves});

    if(document.querySelector('.favorites').classList.value.includes('active')) {
      this.setState({ cardList: upDatedFaves });
    }
  }

  showFavorites = () => {
    this.setState({ cardList: this.state.favorites });
  }

  fetchPeople = async () => {
    //   there are 9 pages of data available. to fetch all 9 pages change the iteration length to 10.
    let mergedData = [];

    for(let i = 1; i < 2; i++) { 
       // + `?page=${i}`
    const peopleData = await call.fetchCall(this.state.categoryLinks.people + `?page=${i}`);

    const cleanedData = await call.cleanPeopleData(peopleData.results);

      mergedData.push(...cleanedData);
    }
    console.log(mergedData)
    const cardList = mergedData.map(card => {
      const favorited = this.state.favorites.find(fave => fave.name === card.name);
      return (favorited ? favorited : card);
    });

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
            <Button category={"Vehicles"} callback={()=>{}} />
            <Button category={"Planets"} callback={()=>{}} />
          </div>
          <CardContainer clickedCard={this.clickedCard} cardList={this.state.cardList}/>
        </main>
      </div>
    );
  }
}