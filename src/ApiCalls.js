export default class ApiCalls {

  fetchDataCategories = async () => {
    let response = await fetch('https://swapi.co/api');
    return await response.json();
  }

  fetchTextCrawl = async (url) => {
      let randomFilm = Math.floor(Math.random() * 7 + 1);
      const response = await fetch(url + randomFilm);
      const movieText = await response.json();
      return {
        'title': movieText.title,
        'text': movieText.opening_crawl,
        'released': movieText.release_date
      }
  }

  //PEOPLE DATA

  fetchPeopleList = async (url, favorites) => {
    let peopleCards = [];

    //there are 9 pages of data available. to fetch all 9 pages change the iteration length to 10.
    for(let i = 1; i < 2; i++) { 
      const response = await fetch(url + `?page=${i}`);
      const data = await response.json();
      const cards = await this.createPeopleData(data.results);

      while(cards.length) {
          peopleCards.push({...cards.shift(), ...cards.shift(), favorited: false});
      }
    }

    const mergedCards = peopleCards.map(card => {
      const favorited = favorites.find(fave => fave.name === card.name);
      return (favorited ? favorited : card);
    });

    return mergedCards;
  }

  createPeopleData = (people) => {
    const peopleData = people.reduce((arr, person) => {
      if(person.species.length) {
        const species = this.fetchSpeciesData(person)
      return [...arr, species, this.fetchHomeData(person)];
      } else {
        return [...arr, {species: 'unknown'}, this.fetchHomeData(person)];
      }
    }, []);
    return Promise.all(peopleData);
  }

  fetchSpeciesData = async (person) => {
    const response = await fetch(...person.species);
    const data = await response.json();
    return await {species: data.name};
  }

  fetchHomeData = async ({ homeworld, name }) => {
    const response = await fetch(homeworld);
    const data = await response.json();
    return await {name: name, homeworld: data.name, population: data.population};
  }
  


}
