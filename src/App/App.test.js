import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App.js';

describe('App', () => {
  let app;
  let expected;

  beforeEach(async () => {
    app = await shallow(<App />, {disableLifecycleMethods: true})
  });

  it('matches snapshot', () => {
    expect(app).toMatchSnapshot();
  });

  describe('CLICKEDCARD', () => { 
    let mockCard;

    beforeEach(() => {
      mockCard = {name: 'abc', favorited: false};
    });


    it('should change the favorited value of card to equal passed in value', () => {
      const expectation = [{name: 'abc', favorited: true}];

      app.instance().clickedCard(true, mockCard);

      expect(app.state('favorites')).toEqual(expectation);
    });

    it('should call addToFavorites with correct params if favorited value is true', () => {
      const expectation = {name: 'abc', favorited: true};
      const spy = spyOn(app.instance(), 'addToFavorites')
      
      app.instance().clickedCard(true, mockCard);

      expect(spy).toHaveBeenCalledWith(expectation);
    });

    it('should call removeFromFavorites with correct params if favorited value is false', () => {
      const expectation = {name: 'abc', favorited: false};
      const spy = spyOn(app.instance(), 'removeFromFavorites');

      app.instance().clickedCard(false, mockCard);

      expect(spy).toHaveBeenCalledWith(expectation);
    });
  });

  describe('ADDTOFAVORITES', () => {
    it('should add card to favorites in state', () => {
      const mockCard = {name: 'abc', favorited: true};

      expect(app.state('favorites').length).toEqual(0);

      app.instance().addToFavorites(mockCard);

      expect(app.state('favorites').length).toEqual(1);
    });
  });

  describe('REMOVEFROMFAVORITES', () => {
    xit('should remove card from favorites in state', () => {
      const mockCard = {name: 'abc', favorited: true};
      app.instance().addToFavorites(mockCard);
      expect(app.state('favorites').length).toEqual(1);
      const spy = spyOn(app.instance(), 'document.querySelector')

      app.instance().removeFromFavorites(mockCard);

      expect(app.state('favorites').length).toEqual(0);
    });
  })

  describe('BUTTON CALLBACKS', () => {
    it('should call updateCardList with correct params', () => {

    })
  })
});