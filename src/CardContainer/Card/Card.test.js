import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Card from './Card.js';

define('Card', () => {
  let card;
  let mockObject = {};

  beforeEach(() => {
    card = shallow(<Card card={mockObject} />);
  });

  it('matches snapshot', () => {
    expect(card).toMatchSnapshot();
  });

});