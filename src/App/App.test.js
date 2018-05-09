import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App.js';
import TextScroll from '../TextScroll/TextScroll.js'

describe('App', () => {

  window.fetch = jest.fn()
    .mockImplementation(() => Promise.resolve({ json: () => Promise.resolve({ 'title': 'movie' })}))

  it('matches snapshot', () => {
    const app = shallow(<App />);

    expect(app).toMatchSnapshot();
  });

  // it('calls fetch in componentDidMount', () => {
  //   const app = shallow(<App />);

  //   const expected = { method: 'GET', body: JSON.stringify({ 'title': 'movie' })}

  //   app.instance()
  //   let randomFilm = Math.floor(Math.random() * 7 + 1)
  //   expect(window.fetch).toHaveBeenCalledWith(`https://swapi.co/api/films/${randomFilm}`, expected)
  // });

  it('sets state.textCrawl on initial load', () => {
    const app = shallow(<App />);

    expect(app.state('textCrawl')).toBeDefined();
  });
});