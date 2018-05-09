const cleanFilmData = (data) => {
  return {
    'title': data.title,
    'text': data.opening_crawl,
    'released': data.release_date
  }
}

export default cleanFilmData;



