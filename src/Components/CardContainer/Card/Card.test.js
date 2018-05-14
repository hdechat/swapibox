import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card.js'

describe('Card', () => {
  let card
  let mockCardProp = {
    name: 'Name', 
    species: 'Droid', 
    favorited: false
  }
  let mockCallback = jest.fn()

  beforeEach(() => {
    card = shallow(<Card clickedCard={mockCallback} card={mockCardProp} />)
  });

  it('matches snapshot', () => {
    expect(card).toMatchSnapshot()
  });

  it('renders the card data passed in as props', () => {
    expect(card.find('h6').length).toEqual(2)
  });

  it('calls clickedCard with the correct params when favorited image on card is clicked', () => {
    card.find('img').simulate('click')

    expect(mockCallback).toHaveBeenCalledWith(!card.favorited, mockCardProp)
  });
});
  // it('changes class to active if card.favorited is true', () => {
  //   let mockCardProp = {
  //     name: 'Name', 
  //     species: 'Droid', 
  //     favorited: true
  //   };
  //   expect(card.find('.active').length).toEqual(0);

  //   card.find('img').simulate('click')

  //   expect(card.find('.active').length).toEqual(1);
  // });