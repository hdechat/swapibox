
//https://swapi.co/api/films/[insert random number 1-7] to fetch film data
const cleanFilmData = (data) => {
  return {
    'title': data.title,
    'text': data.opening_crawl,
    'released': data.release_date
  }
}

export default { cleanFilmData }

