export default class ApiCalls {

  fetchCall = async (url) => {
    const response = await fetch(url);

    if(response.status >= 400) {
      throw (new Error("Data not available"));
    } else {
      return await response.json(); 
    }
  }

  //PEOPLE//

  fetchPeopleList = async (url) => {
    let peopleCards = [];

    //there are 9 pages of data available. to fetch all 9 pages change the iteration length to 10.
    for(let i = 1; i < 2; i++) { 
      const response = await fetch(url + `?page=${i}`);  ///await fetch
      const data = await response.json();  ///response json
      const cards = await this.createPeopleData(data.results);

      while(cards.length) {
          peopleCards.push({...cards.shift(), ...cards.shift(), favorited: false});
      }
    }

    return peopleCards;
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
    const data = await this.fetchCall(...person.species); 
    return await {species: data.name};
  }

  fetchHomeData = async ({ homeworld, name }) => {
    const data = await this.fetchCall(homeworld);
    return await {name: name, homeworld: data.name, population: data.population};
  }
}
