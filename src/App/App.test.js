import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App.js';
import TextScroll from '../TextScroll/TextScroll.js'

describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  })

  it('matches snapshot', () => {
    expect(app).toMatchSnapshot();
  });

  xit('sets state.textCrawl on initial load', () => {
    expect(app.state('textCrawl')).toBeDefined();
  });

  it('should add card to favoriteList when parameter is true', () => {
    const fave = true;
    const card = {name: "Name"};

    app.instance().clickedCard(fave, card);

    expect(app.favorites).length.toEqual(1);
  })

  xit('should delete card from favoriteList when parameter is false', () => {
  });
});