export default class ApiCalls {

  fetchCall = async (url) => {
    const response = await fetch(url);

    if(response.status >= 400) {
      throw (new Error("Data not available"));
    } else {
      return await response.json(); 
    }
  }

  cleanPeopleData = async (people) => {
    const unresolvedPromises = people.map(async person => {
      const speciesData = await this.fetchCall(...person.species);
      const homeData = await this.fetchCall(person.homeworld);

      return {name: person.name, species: speciesData.name, homeworld: homeData.name, population: homeData.population, favorited: false}
    })
    return await Promise.all(unresolvedPromises);
  }

}
