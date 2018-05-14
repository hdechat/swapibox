import React from 'react';
import reactDom from 'react-dom';
import { shallow, mount } from 'enzyme';
import Card from './Card/Card.js'
import CardContainer from './CardContainer.js'

describe('CardContainer', () => {
  let cardContainer;
  let mockClickedCard = jest.fn()
  let mockArray = [
    {name: 'Name', planet: 'Earth', favorited: false},
    {name: 'Name2', planet: 'Mars', favorited: false}
  ];

  beforeEach(() => {
    cardContainer = shallow(<CardContainer clickedCard={mockClickedCard} cardList={mockArray}/>)
  });

  it('matches snapshot', () => {
    expect(cardContainer).toMatchSnapshot();
  });

  it('renders each card in props array', () => {
    const expectation = mockArray.length
    expect(cardContainer.find(Card).length).toEqual(expectation);
  });
});

  //**Functional, need to learn testing for this
  // it('renders alternate text only if there are no cards to display', () => {
  //   mockArray = []
  //   expect(cardContainer.find('h1').length).toEqual(1)

  //   mockArray = [
  //   {name: 'Name', planet: 'Earth', favorited: false},
  //   {name: 'Name2', planet: 'Mars', favorited: false}
  //   ]
  //   expect(cardContainer.find('h1').length).toEqual(0)    
  // });