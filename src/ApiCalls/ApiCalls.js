export default class ApiCalls {

  fetchCall = async url => {
    const response = await fetch(url);

    if(response.status >= 400) {
      throw (new Error("Data not available"));
    } else {
      return await response.json(); 
    }
  }

  cleanPeopleData = async people => {
    const unresolvedPromises = people.map(async person => {
      const homeData = await this.fetchCall(person.homeworld);
      let speciesData;
      if(!person.species.length) {
        speciesData = {name: 'unknown'}
      } else {
        speciesData = await this.fetchCall(...person.species);
      }

      return {
        name: person.name, 
        species: speciesData.name, 
        homeworld: homeData.name, 
        population: homeData.population, 
        favorited: false
      }
    });

    return await Promise.all(unresolvedPromises);
  }

  cleanVehiclesData = vehicles => {
    return vehicles.map(vehicle => {
      return {
        name: vehicle.name,
        model: vehicle.model,
        class: vehicle.vehicle_class,
        passengers: vehicle.passengers,
        favorited: false
      }
    });
  }

  cleanPlanetsData = async planets => {
    const unresolvedPromises = planets.map( async planet => {
      const residents = planet.residents.map(async resident => {
        const person = await this.fetchCall(resident);
        return person.name;
      });

      const names = await Promise.all(residents);

      return {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: names.length ? names : 'no residents',
        favorited: false
      }
    });

    return await Promise.all(unresolvedPromises);
  }
}







