import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {

  it('matches snapshot', () => {
    const app = shallow(<App />)

    expect(app).toMatchSnapshot();
  });

  xit('fetches data on initial load', () => {
    //test that componentDidMount calls fetch?
  });

  xit('renders TextScroll component', () => {
    //would snapshot cover this part?
  });
});