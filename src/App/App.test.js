import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App.js';
import TextScroll from '../TextScroll/TextScroll.js'
// it('calls fetch with the correct data when adding a new grocery', () => {
//   })

//   it('resets the state after adding a new grocery', () => {
//   })

//   it('calls the updateGroceryList callback after adding a new grocery', () => {
//   })

//   it('sets an error when the fetch fails', () => {
//   })

describe('App', () => {
  let app;

  describe('componentDidMount', () => {

    beforeEach(() => {
      app = shallow(<App />);
    })
  
    it('matches snapshot', () => {
      expect(app).toMatchSnapshot();
    });
  
    xit('calls fetch with the correct data on initial load', () => {
  
    })
  
    xit('resets state on initial load', () => {
  
    });

    xit('sets an error when the fetch fails', () => {

    });
  });
});



  // xit('sets state.textCrawl on initial load', () => {
  //   expect(app.state('textCrawl')).toBeDefined();
  // });

  // it('should add card to favoriteList when parameter is true', () => {
  //   const fave = true;
  //   const card = {name: "Name"};

  //   app.instance().clickedCard(fave, card);

  //   expect(app.favorites).length.toEqual(1);
  // })

  // xit('should delete card from favoriteList when parameter is false', () => {
  // });