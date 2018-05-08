import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {

  it('matches snapshot', () => {
    const app = shallow(<App />);

    expect(app).toMatchSnapshot();
  });

  it('sets state.textCrawl on initial load', () => {
    const app = shallow(<App />);

    expect(app.state('textCrawl')).toBeDefined();
  });

  xit('renders TextScroll component', () => {
    //would snapshot cover this part?
  });
});