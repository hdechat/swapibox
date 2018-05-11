import React, { Component } from 'react';
import './App.css';
import ApiCalls from './../ApiCalls.js'
import TextScroll from '../TextScroll/TextScroll.js';
import Button from '../Button/Button.js';
import CardContainer from '../CardContainer/CardContainer.js';

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
    const categoryLinks = await call.fetchDataCategories();
    this.setState({ categoryLinks })
    const textCrawl = await call.fetchTextCrawl(this.state.categoryLinks.films);
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
    document.querySelector('.favorites').classList.value.includes('active') ? 
      this.setState({ cardList: upDatedFaves }) : '';
  }

  showFavorites = () => {
    this.setState({ cardList: this.state.favorites });
  }

  fetchPeople = async () => {
    const cardList = await call.fetchPeopleList(this.state.categoryLinks.people, this.state.favorites);
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