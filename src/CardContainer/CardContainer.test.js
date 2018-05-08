import React from 'react';
import reactDom from 'react-dom';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer.js'
import Card from '../Card.js'

describe('CardContainer', () => {
  let cardContainer;
  let mockArray = [];

  beforeEach(() => {
    cardContainer = shallow(<CardContainer cardList={mockArray}/>)
  });

  it('matches snapshot', () => {
    expect(cardContainer).toMatchSnapshot();
  });

  it('renders each card in props array', () => {
    const expectation = mockArray.length
    expect(cardContainer.find(Card).length).toEqual(expectation);
  })
});