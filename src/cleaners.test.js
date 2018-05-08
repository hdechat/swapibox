import cleanFilmData from './cleaners.js'
import filmData from './mockFilmData.js'

describe('cleanFilmData', ()=> {
  it('should return cleaned film data', () => {
    const expectation = {
      'title': 'A New Hope',
      'text': "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.....",
      'released': '1977-05-25'
    };

    const cleanData = cleanFilmData(filmData);

    expect(cleanData).toEqual(expectation);
  })
})