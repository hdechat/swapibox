import React from 'react';
import ReactDom from 'react-dom';
import { shallow, mount } from 'enzyme';
import ApiCalls from './ApiCalls.js';

describe('ApiCalls', () => {
  let apiCalls;
  let mockData;
  let mockUrl;

  beforeEach(() => {
    apiCalls = new ApiCalls();
  });

  describe('fetchCall', () => {

    beforeEach(() => {
      mockData = {prop: 'string'}
      mockUrl = 'https://swapi.com'

      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({status: 200, json: () => 
        Promise.resolve(mockData)}));
    });

    it('calls fetchCall with the correct params', async () => {
      const expectation = 'https://swapi.com';

      await apiCalls.fetchCall(mockUrl);

      expect(window.fetch).toHaveBeenCalledWith(expectation);
    });

    it('returns an object if status code is ok', async () => {
      const expectation = {prop: 'string'}

      await expect(apiCalls.fetchCall(mockUrl)).resolves.toEqual(expectation);
    });

    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({status: 500}));

      const expectation = "Data not available"

      await expect(apiCalls.fetchCall(mockUrl)).rejects.toEqual(Error(expectation));
    });
  });

  describe('fetchPeopleList', () => {

    it('calls fetchPeopleList with the correct params', async () => {

    });

    it('returns')

  });
});
     