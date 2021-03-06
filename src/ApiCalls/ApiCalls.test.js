import ApiCalls from './ApiCalls.js';

describe('ApiCalls', () => {
  let apiCalls;
  let mockData;
  let mockUrl;

  beforeEach(() => {
    apiCalls = new ApiCalls();

    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({status: 200, json: () => 
      Promise.resolve(mockData)}));
  });

  describe('fetchCall', () => {

    beforeEach(() => {
      mockData = {prop: 'string'}
      mockUrl = 'https://swapi.com'

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
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({status: 500}));

      const expectation = "Data not available"

      await expect(apiCalls.fetchCall(mockUrl)).rejects.toEqual(Error(expectation));
    });

    describe('cleanPeopleData', () => {
      let mockPeopleData;
      let mockReturnData;

      beforeEach(() => {
        mockReturnData = [
          {favorited: false,
          homeworld: 'Earth',
          name: 'Persona',
          population: 5,
          species: 'Human'},
          ];
        mockPeopleData = [
            {name: 'Persona',
              species: ['https://swapi.com/people/species'],
              homeworld: 'https://swapi.com/people/homeworld',
            }
          ];
        mockData = {name: 'Human', population: 5};
      });

      xit('calls a fetch for species data', () => {
        apiCalls.cleanPeopleData(mockPeopleData);

        expect(window.fetch).toHaveBeenCalledWith('https://swapi.com/people/species');   

        expect(apiCalls.cleanPeopleData(mockPeopleData)).resolves.toEqual(mockReturnData);
      });

      xit('calls a fetch for homeworld data', () => {
        apiCalls.cleanPeopleData(mockPeopleData);

        expect(window.fetch).toHaveBeenCalledWith('https://swapi.com/people/homeworld');   
      });
    });
  });
});






     