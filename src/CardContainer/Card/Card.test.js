import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Card from './Card.js';

define('Card', () => {
  let card;
  let mockCard = {name: 'Name'};

  beforeEach(() => {
    card = shallow(<Card clickedCard={jest.fn()} card={mockCard} />);
  });

  it('matches snapshot', () => {
    expect(card).toMatchSnapshot();
  });

  xit('should update state to opposite boolean when clicked', () => {
  });

  xit('should call props function with proper parameters when favoriteCard is called', () => {
  });

  

});